# Import the necessary libraries
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import PassiveAggressiveClassifier
from sklearn.metrics import accuracy_score
import pickle

# Load the dataset
real_news = pd.read_csv("../Dataset/True.csv")
fake_news = pd.read_csv("../Dataset/Fake.csv")

# combine both the datasets
data = pd.concat([real_news, fake_news], ignore_index=True)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    data["text"], data["subject"], test_size=0.2, random_state=42
)

# Initialize the TfidfVectorizer
tfidf_vectorizer = TfidfVectorizer(stop_words="english", max_df=0.7)

# Fit and transform the training data
tfidf_train = tfidf_vectorizer.fit_transform(X_train)

# Transform the testing data
tfidf_test = tfidf_vectorizer.transform(X_test)

# Initialize the PassiveAggressiveClassifier
pac = PassiveAggressiveClassifier(max_iter=50)
pac.fit(tfidf_train, y_train)

# Predict on the testing data
y_pred = pac.predict(tfidf_test)

# Calculate the accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)

# Save the model
model_filename = "fake-news-model.pkl"
with open(model_filename, "wb") as file:
    pickle.dump(pac, file)
