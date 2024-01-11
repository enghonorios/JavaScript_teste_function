/**Chamando 'nome' 
function escrevaMeuNome(name) {
    console.log('Your name is: ' + name);
}

escrevaMeuNome('Daniel');
escrevaMeuNome('Dhj');*/

function escreveMeuNome(name) {
    return 'Meu nome é: ' + name;
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreveMeuNome('Daniel') + ' sou maior de Idade.');
    } else {
        console.log(escreveMeuNome('Daniel') + ' sou menor de Idade.');
    }
}

verificarIdade('105');