// // reduce => redução

//  -- Retona o valor ( pode ser um novo array , um objeto, string, number e etc)
//  -- Aceita 4 parametros
//     - acumulador
//     - valor atual
//     - index
//     - array completo


const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 3},
    { productName: 'Cebola', pricePerKg: 6.1, kg: 4},
    { productName: 'Melão', pricePerKg: 5.2, kg: 4.65},
    { productName: 'Abacate', pricePerKg: 4.2, kg: 1},
    { productName: 'Pepino', pricePerKg: 5.9, kg: 2.63},
    { productName: 'Uva', pricePerKg: 5.79, kg: 10},
    { productName: 'Laranja', pricePerKg: 5.2, kg: 7},
]

const finalPrice = cart.reduce(( acc, value ) => {
    const finalValue = value.pricePerKg * value.kg
    return acc + finalValue
},0)

console.log(`Valor Total a paga é de : ${finalPrice.toFixed(2)}`)