from flask import Flask, jsonify
from github import Github
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

g = Github('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')
owner = 'Anas-Dew'
repo_name = 'what_the_bug_problem_base'
repo = g.get_repo(f'{owner}/{repo_name}')

# @app.route('/get-files/<path:folder_path>')
# def get_files(folder_path):


@app.route('/get-files')
def get_files():
    # Get the contents of the folder
    folder_contents = repo.get_contents('/Problems')
    # Extract the names of the files in the folder
    file_names = [file.name for file in folder_contents if file.type == 'file']

    return jsonify({"files": file_names})


@app.route('/read-file/<folder>/<file_path>')
def read_file(folder, file_path):
    file_contents = repo.get_contents(f"{folder}/{file_path}")
    # Decode the file contents from base64
    base64_encoded_content = file_contents.content
    # decode the string
    decoded_string = base64.b64decode(base64_encoded_content).decode()

    # INSERT TRY EXCEPT BLOCK HERE BEFORE RUNNING ON PRODUCTION.

    return jsonify(decoded_string)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
