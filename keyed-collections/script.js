console.log('----------------------')
console.log('MAP')
console.log('----------------------')

// MAP

const map = new Map()

map.set('nome', 'Emanuel')
map.set('idade', 18)

console.log(map.get('nome'))
console.log(map.get('idade'))

console.log(map.has('nome'))
console.log(map.has('sexo'))

console.log(map.size)

const map2 = new Map([['a1', 'oi1'], ['a2', 'oi2']])

console.log(map2)

console.log('----------------------')
console.log('WEAKMAP')
console.log('----------------------')

// WEAKMAP

const weakMap = new WeakMap()

const obj1 = {nome:'Emanuel'}
const obj2 = {nome:'João'}

weakMap.set(obj1, 'Pessoa1')
weakMap.set(obj2, 'Pessoa2')

console.log(weakMap.get(obj1))
console.log(weakMap.get(obj2))

console.log(weakMap.has(obj1))

console.log('----------------------')
console.log('SET')
console.log('----------------------')

// SET

const set = new Set()

set.add('valor1')
set.add('valor2')
set.add('valor1')

console.log(set)

console.log('----------------------')
console.log('WEAKSET')
console.log('----------------------')

// WEAKSET

const weakSet = new WeakSet()

const obj3 = {nome: 'Emanuel'}
const obj4 = {nome: 'João'}

weakSet.add(obj3)
weakSet.add(obj4)
weakSet.add(obj3)

console.log(weakSet)