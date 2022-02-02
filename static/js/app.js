var url = "http://127.0.0.1:5000/api/alunos"

var dataSet = 
    [
        ['1', 'Victor', 'Ressurreicao', 10],
        ['2', 'Victor2', 'Ressurreicao2', 20],
        ['3', 'Victor3', 'Ressurreicao3', 30],
    ]


$.getJSON(url, function(lista) {
    console.log(lista)
    $('#tableAlunos').DataTable({
        data: lista
    } );
});