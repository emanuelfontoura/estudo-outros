// FOR...IN
const obj = {
    nome:'Emanuel',
    idade:18,
    sexo:'M'
}

for(let key in obj){
    console.log(obj[key]) // RETORNA OS VALORES
}

for(let key in obj){
    console.log(key) // RETORNA AS KEYS
}

const arr = ['Banana', 'Maçã', 'Uva']

for(let fruta in arr){
    console.log(fruta)
}

// FOR...OF

for(let fruta of arr){
    console.log(fruta)
}