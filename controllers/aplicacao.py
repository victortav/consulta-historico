from flask import render_template
from server.instance import server

app, api = server.app, server.api

historicos_db = [
    {'id': 0, 'nome':"Victor Tavares"},
    {'id': 1, 'nome':"Lara Oliveira"},
]

@app.route('/app')
def home():
    home = "APP-HISTORICO-ALUNOS"
    return render_template('index.html', home1= home)