from flask import Flask, jsonify, request
from flask_cors import CORS  # enables cross-origin requests

app = Flask(__name__)
CORS(app)  # allows frontend (e.g. React) to talk to backend

@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Ensure the server runs on port 5000