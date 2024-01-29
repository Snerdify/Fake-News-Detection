# app.py
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model
model, vectorizer = joblib.load('fake_news_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    # Get input data from the request
    input_data = request.get_json()

    # Extract the text from the input data
    text = input_data['text']

    # Convert text to TF-IDF features
    text_tfidf = vectorizer.transform([text])

    # Make a prediction using the loaded model
    prediction = model.predict(text_tfidf)

    # Return the prediction as JSON
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
