function dividir(a = 0, b = 0){
    if(b === 0){
        throw Error("Não é possível dividir por zero.")
    }
    return a/b
}

try {
    dividir(2, 0)
} catch (error) {
    console.log("Ocorreu um erro: ", error.message)
}