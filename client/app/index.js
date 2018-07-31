//Cria um array que utiliza a API do DOM que vasculha os seletores utilizano campos CSS
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

//Imprime os objetos para saida
console.log(campos);

//Com esse script vou pegar o tbody do html
var tbody = document.querySelector('table tbody');

//Função que abre o popup com a mensagem oie apenas depois de preenchido todas as informações
document.querySelector('.form').addEventListener('submit', function(event) {

    //removi o Oi para colocar a função que constroi dinamicamente o <tr>
    // alert('oi');
    var tr = document.createElement('tr');

    campos.forEach(function(campo){

        //cria uma td sem nada
        var td = document.createElement('td');

        //atribui o valor do campo a td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);         
    });

    //td que vai colocar o volume de negociação
    var tdVolume = document.createElement('td');

    //posições de array 1 e 2 armazenadas nos campos de quantidade e valor
    tdVolume.textContent = campos[1].value * campos[2].value;

    //adicionar a td na tr
    tr.appendChild(tdVolume);

    //adicionando a tr
    tbody.appendChild(tr);

    //esse evento deixa o submit sem dar o reload imprimindo as informações
    event.preventDefault();
});
