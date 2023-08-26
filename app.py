from flask import Flask, render_template, request, send_file, jsonify
import pandas as pd
import json
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import sqlite3


app = Flask(__name__)


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #name = db.Column(db.String(50))
    message = db.Column(db.String(50))
    date_created = db.Column(db.DateTime, default=datetime.now)


class Mail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #name = db.Column(db.String(50))
    mail = db.Column(db.String(50))
    date_created = db.Column(db.DateTime, default=datetime.now)


@app.route('/')
def home():
    return render_template("index.html")


@app.route('/signin')
def signin():
    return render_template('login.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    if username == 'hello' and password == 'ok':
        cnx = sqlite3.connect('db.sqlite3')
        df = pd.read_sql_query("SELECT * FROM user", cnx)
        # email database in form of dataframe
        df1 = pd.read_sql_query("SELECT * FROM user", cnx)
        return render_template('table.html', tables=[df.to_html(render_links=True, classes=['table table-striped table-bordered table-hover table-responsive text-white'])])


@app.route('/email', methods=['GET', 'POST'])
def email():
    content = request.json
    msg = content['text']
    msg = msg.lower()
    print('mail')
    user = Mail(mail=msg)
    db.session.add(user)
    db.session.commit()
    new = 'How can we assist you today ?'
    return jsonify({'data': new})


@app.route('/chat', methods=["POST"])
def chat():
    with open("detail.json") as file:
        data = json.load(file)
    content = request.json
    msg = content['text']
    print('ok')
    msg = msg.lower()
    user = User(message=msg)
    db.session.add(user)
    db.session.commit()
    if msg == 'placement':
        print('hello')
        new = data['placement']
        return jsonify({'data': new})
    elif msg == 'campus':
        new = data['campus life']
        return jsonify({'data': new})
    elif msg == 'webkiosk':
        new = data['webkiosk']
        return jsonify({'data': new})
    elif msg == 'accreditations':
        new = data['accreditations']
        return jsonify({'data': new})
    elif msg == 'TEQIP':
        new = data['TEQIP']
        return jsonify({'data': new})
    elif msg == 'examination updates':
        new = data['examination updates']
        return jsonify({'data': new})
    elif msg == 'library':
        new = data['library']
        return jsonify({'data': new})
    elif msg == 'contact':
        new = data['contact']
        return jsonify({'data': new})
    elif msg == 'scholarship':
        new = data['scholarships']
        return jsonify({'data': new})
    elif msg == 'admission':
        new = data['admission']
        return jsonify({'data': new})


if __name__ == '__main__':
    app.run()
