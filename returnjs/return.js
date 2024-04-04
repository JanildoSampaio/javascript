const cart = [10, 200, 99, 25, 2, 36, 350]
let finalPriceWithDiscount = 0
let finalPrice = 0

/* função para calcular disconto */
function calculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

/* Itera sobre cada item do carrinho */
cart.forEach(value => {
    /* Verificar se o valor é maior que 30 */
    if(value > 30) {
            /* Calcula o desconto de 10%*/
        const discountedPrice = calculateDiscount(value, 10)
        finalPriceWithDiscount += discountedPrice /* Adiciona o preço com desconto */
        finalPrice+= value  /* Adiciona o preço sem desconto */
    } else {
        finalPriceWithDiscount += value
        finalPrice+= value
    }
});
console.log(`- O valor total de sua compra foi R$ ${finalPrice.toFixed(2)}
- Valor do Desconto de 10% R$ ${finalPriceWithDiscount.toFixed(2)}
- Total a pagar é de R$ ${finalPrice.toFixed(2) - finalPriceWithDiscount.toFixed(2)}`)
