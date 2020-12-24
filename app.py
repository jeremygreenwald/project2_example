from flask import Flask, jsonify, send_from_directory, render_template

app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')


@app.route('/')
def hello_world():
    return render_template('html/index.html')


@app.route('/data')
def data1():
    return jsonify(
        {
            'key1': 1,
            'key2': 101,
            'key3': 1002
        }
    )
