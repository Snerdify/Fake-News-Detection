import os
from flask import Flask, render_template, request

app = Flask(__name__)


def detect_fake_news(article_link):
    return "Fake"


@app.route("/", methods=["GET", "POST"])
def index():
    result = None

    if request.method == "POST":
        article_link = request.form["article_link"]
        result = detect_fake_news(article_link)

    return render_template("index.html", result=result)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
