from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/execute', methods=['POST'])
def execute_code():
    code = request.get_json()

    # Validate the code to make sure it is safe to execute

    # Use subprocess to execute the code
    import subprocess
    result = subprocess.run(['python', '-c', code['code']],
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Return the output of the code execution to the frontend
    response = {
        "output" : str(result.stdout)
    }
    return  jsonify(response)
    # return result.stdout


if __name__ == "__main__":
    app.run(debug=True)
