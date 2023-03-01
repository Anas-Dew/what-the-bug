from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return 'API does not have this endpoint.'

@app.route('/execute', methods=['POST'])
def execute_code():
    request_body = request.get_json()

    # Validate the code to make sure it is safe to execute

    # Use subprocess to execute the code
    import subprocess
    result = subprocess.run(['python', '-c', request_body['code']],
                            stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    # Return the output of the code execution to the frontend
    exit_output = str(result.stdout)
    if exit_output == "b''":
        exit_output = "The code has bugs."
    response = {
        "output" : exit_output
    }
    return jsonify(response)


if __name__ == "__main__":
    app.run(debug=True)
