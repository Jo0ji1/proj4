document.getElementById('cadastro').addEventListener('submit', function(event){
    event.preventDefault();
    let cpf = document.getElementById('cpf').value;
    if(cpf.length !== 11 || isNaN(cpf)){
        alert('CPF inválido.');
    }else{
        alert('Formulário enviado!');
    }
});
