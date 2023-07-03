const obj = {'nome': 'Emanuel', 'idade': 18}
console.log(obj['nome']) // CRIA UMA ARRAY "NOME" TODA VEZ QUE CHAMAR ESSA POSIÇÃO DO OBJETO

const nome = Symbol()
const obj2 = {[nome]: 'Emanuel', 'idade': 18}
console.log(obj[nome]) // NÃO CRIA UMA ARRAY PARA CHAMAR A POSIÇÃO "NOME" DO OBJETO, ESTA É UMA DAS UTILIDADES DO SYMBOL