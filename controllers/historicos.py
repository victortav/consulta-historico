from flask import Flask, render_template
from flask_restx import Api, Resource

from server.instance import server
from service.listarAlunos import listaDeAlunos

app, api = server.app, server.api

# historicos_db = [
#     {'id': 0, 'nome':"Victor Tavares"},
#     {'id': 1, 'nome':"Lara Oliveira"},
# ]

historicos_db = listaDeAlunos()

@api.route('/api/alunos')
class HistoricoList(Resource):
    def get(self,):
        return historicos_db

    def post(self,):
        response = api.payload
        historicos_db.append(response)
        return response, 200
