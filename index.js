const agenda = {
    nome:'Minha agenda',
    contatos: [],
    adicionarContato: function (nome, telefone){
        let pessoa = {nome: nome, telefone: telefone};
        this.contatos.push(pessoa);
    },
    listarContatos: function (){
       let lista = ''; 
       this.contatos.forEach((contato, index) => {
        lista += `${index + 1} - Nome: ${contato.nome} Telefone: ${contato.telefone} \n `
        })
        return lista;
    },
    PesquisarContato: function (nome){
        let nomeEncontrado = '';
        this.contatos.forEach((element, index) => {if(element.nome === nome){
            nomeEncontrado = `${index + 1} - Nome: ${element.nome} Telefone: ${element.telefone}`;
            return nomeEncontrado;
        }
            
    });
        return nomeEncontrado;
    },
    editarContato: function(index, novoNome, novoTelefone){
        if(index > 0 && index <= this.contatos.length){
            if(novoNome !== undefined){
                this.contatos[index - 1].nome = novoNome;
            }
            if(novoTelefone !== undefined){
                this.contatos[index - 1].telefone = novoTelefone;
            }
            return this.contatos;
        }
        else{
            return 'Contato não existente';
        }
    },


}

const pessoa1 = agenda.adicionarContato('João', 543653445);
//console.log(agenda.contatos);
console.log(agenda.listarContatos());
console.log(agenda.editarContato(1,'pedro',12345));
console.log(agenda.listarContatos());
