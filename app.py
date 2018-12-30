from flask import Flask, render_template, jsonify, request
from flask_cors import CORS, cross_origin
from data_file_proc import proc_data

FILE_PATH = 'data_file.xlsx'

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/data_list')
def data_list():
    # return "hello"
    return proc_data(FILE_PATH)

@app.route('/about')
def about():
    return render_template(r'about.html', title='this is awsooom')

@app.route('/add_new', methods=['GET', 'POST'])
def add_new():
    if request.method == 'GET':
        return 'hello'
    elif request.method == "POST":
        val = request.json
 
@app.route('/post', methods=['POST', 'GET'])
def pos():
    val = request.json['key']
    return val

if __name__ == '__main__':
    app.run(debug=True)
    
"""
FLASK_DEBUG=1
set FALSK_APP=app.py
flask run
"""