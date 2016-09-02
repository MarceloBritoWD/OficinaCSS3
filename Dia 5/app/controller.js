// Criado por: Caio Lucena Medeiros
// Criado em: 30/08/2016
// Github: lucenacaio

angular.module("toDoApp",[])
.controller("toDoController",toDoController);

function toDoController(){
    var self = this;

    //Instância da lista de ToDO
    self.listaToDo = [];

    //Controle do Editar
    self.ativaEditar = false;

    //Controle do Texto no input
    self.salvarEditar = "O que deseja adicionar a lista?";

    //Declaração das funções como públicas
    self.enterAction = enterAction;
    self.adicionar = adicionar;
    self.completaToDO = completaToDO;
    self.excluir = excluir;
    self.acionaEditar = acionaEditar;
    self.editar = editar;
    self.ativaSwipe = ativaSwipe;


    //Função que verifica se o ENTER foi pressionado
    function enterAction($event,input){
        if($event.keyCode === 13 && !self.ativaEditar){
            adicionar(input);
        }else if($event.keyCode === 13 && self.ativaEditar){
            editar(input);
        }
    }

    //Função que realiza a adição
    function adicionar(input){
        self.listaToDo.push({atividade:input});
        self.input = "";
    }

    //Função que marca como concluido um TODO
    function completaToDO(todo){
        alert("Completo");
        todo.estiloToDo = {
            'text-decoration' : 'line-through'
        };
    }

    //Função para remover o TODO da lista
    function excluir(todo){
        self.listaToDo.splice(self.listaToDo.indexOf(todo),1);
    }

    //Função para acionar o editar de um elemento
    function acionaEditar(todo){
        self.ativaEditar = true;
        self.salvarEditar = "Como deseja alterar?";
        self.input = todo.atividade;
        self.elementoEditar = todo;
    }

    //Função que realiza a edição de um elemento
    function editar(todo){
        var index = self.listaToDo.indexOf(self.elementoEditar);
        self.listaToDo[index] = {atividade : self.input};
        self.input = "";
        self.ativaEditar = false;
        self.salvarEditar = "O que deseja adicionar a lista?";

    }

    //Função que ativa os botões de editar e remover
    function ativaSwipe(todo){

        todo.swipeTrue = !todo.swipeTrue;
    }





};
