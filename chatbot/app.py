from flask import Flask, render_template , request, jsonify
<<<<<<< HEAD
from flask_cors import CORS, cross_origin
=======
>>>>>>> d772a91b4e5959a22fc2b2df59f43f1c03aa9757
from chat import get_response

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.get("/")
def index_get():
    return render_template("base.html")

# @app.post("/predict")
@app.get("/predict")
@cross_origin()
def predict():
    # text = request.get_json().get("message")
<<<<<<< HEAD
    text= request.args.get("data")
=======
    text = request.args.get("data")
>>>>>>> d772a91b4e5959a22fc2b2df59f43f1c03aa9757
    response = get_response(text)
    message = {"answer":response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug = True)