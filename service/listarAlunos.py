import pandas as pd
import json

def listaDeAlunos():
    data = pd.read_csv('./data/relatorioFinalSATPB4.csv')
    listaDeNomes = data.groupby(['nome', 'igreja'])['curso'].count()
    listaDeNomes = listaDeNomes.reset_index()
    listaDeNomes['id'] = listaDeNomes.index +1 
    listaDeNomes = listaDeNomes[['id', 'nome', 'igreja', 'curso']]
    result = listaDeNomes.to_json(orient="split")
    return json.loads(result)['data']
