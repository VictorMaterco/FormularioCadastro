$(document).ready(function() {

    $('#telefone').mask('(00)00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: false
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu email',
            telefone: 'Por favor, insira o seu telefone',
            cpf: 'Por favor, insira o seu cpf',
            cep: 'Por favor, insira o seu CEP'
        },
        submitHandler: function(form) {
            alert('Cadastro concluído com sucesso!');
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos ou vazios`);
        }
        }
    })
});