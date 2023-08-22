class Person{
    handle(){
        return 'handle1'
    }
}

class OtherPerson{
    handle(){
        return 'handle2'
    }
}

var classesNames = [Person, OtherPerson] // COLOCA AS 2 CLASS EM UMA ARRAY

function handleClasses(){

    if(classesNames.length <= 0){ // ISSO É CRIADO PARA POR UM FIM NA RECURSIVIDADE, OU SEJA, QUANDO CLASSNAME TIVER 0 ELEMENTOS
        console.log('END')
        return false
    }

    var className = new classesNames[0] // PEGA O ELEMENTO 0 DA ARRAY CLASSNAMES
    className.handle() // ATIVA O MÉTODO HANDLE DESSE ELEMENTO

    classesNames.shift() // REMOVE O PRIMEIRO ELEMENTO DE CLASSNAMES
    handleClasses() // CHAMA A FUNÇÃO NOVAMENTE, AGORA O ELEMENTO 0 SERÁ "OTHERPERSON" E NÃO MAIS "PERSON"
}

handleClasses()