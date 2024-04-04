let p = document.querySelector("p");
let input = document.getElementById("input");
const btn = document.getElementById("btn");

const contacts = [    
    { name: "Janildo", number: "(85) 992127413"},
    { name: "Kimberly", number: "(85) 992127414"},
    { name: "Vinicius", number: "(85) 992127415"},
    { name: "Letycia", number: "(85) 992127416"},
];

function search() {
    let contactFound = false; // Variável para rastrear se o contato foi encontrado
    let i = 0;

    while (i < contacts.length && !contactFound) {
        const contact = contacts[i];
        if (input.value.toLowerCase() === contact.name.toLowerCase()) {
            p.innerHTML = `Contato Encontrado: Nome: ${contact.name}, Tel: ${contact.number}`;
            contactFound = true; // Definir como verdadeiro se o contato for encontrado
        }
        i++;
    }

    if (!contactFound) {
        p.innerHTML = "Contato não encontrado";
    }
}
