from flask import Flask
from flask_restx import Api

class Server():
    def __init__(self,):
        self.app = Flask(
            __name__, 
            template_folder='../templates', 
            static_folder='../static'
        )
        self.api = Api(self.app,
            version='1.0',
            title='App Histórico Academico',
            description='Descrição simples',
            doc='/docs'
        )

    def run(self,):
        self.app.run(
            debug=True
        )

server = Server()