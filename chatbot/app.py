from flask import Flask, render_template , request, jsonify
from chat import get_response

app = Flask(__name__)

@app.get("/")
def index_get():
    return render_template("base.html")

# @app.post("/predict")
@app.get("/predict")
def predict():
    # text = request.get_json().get("message")
    text = request.args.get("data")
    response = get_response(text)
    message = {"answer":response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug = True)