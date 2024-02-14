import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def detect_fake_news(article_link):
    return "Real"


@app.route("/")
def index():
    return "Hello from flask"


@app.route("/detect", methods=["POST"])
def detect():
    try:
        data = request.get_json()
        print(data)
        result = detect_fake_news(data)
        print(result)
    except:
        result = ["Something went wrong"]

    return jsonify({"result": result})


if __name__ == "__main__":
    app.run(debug=True)
