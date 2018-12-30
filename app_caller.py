from flask import Flask, render_template, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)


@app.route('/')
def home():
    return render_template('home_app_caller.html')

if __name__ == '__main__':
    app.run(debug=True, port=5002)
    
"""
FLASK_DEBUG=1
set FALSK_APP=app.py
flask run
"""