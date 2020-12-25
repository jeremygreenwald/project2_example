from flask import Flask, jsonify, render_template
from api.data.data_connector import get_data1, get_data2

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')


# serve a dynamic html file from the flask app
@app.route('/')
def hello_world():
    return render_template('html/index.html', data2=get_data2())


# serve data from the flask app
@app.route('/data1')
def data1():
    return jsonify(get_data1())
