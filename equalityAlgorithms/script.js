// isLooselyEqual -> ==
const a = 3
const b = 3

console.log(a == b)

// isStrictEqual -> ===
const c = '3'
const d = 3

console.log(c === d)

// SameValue -> Object.is()
const obj1 = {
    nome:'Emanuel',
    idade:18
}

const obj2 = {
    nome:'Emanuel',
    idade:18
}

const obj3 = obj1 // ESTÃO REFERENCIADOS NA MESMA POSIÇÃO DA MEMÓRIA, ISSO É IGUAL A "TRUE"

console.log(Object.is(obj1, obj2))
console.log(Object.is(obj1, obj3))

// SameValueZero -> segue a mesma ideia do SameValue, porém aqui se considera +0 e -0 como iguais