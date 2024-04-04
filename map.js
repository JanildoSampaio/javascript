/* map > mapear array
    -Cria um novo array apartir de array percorio[Original]

    -Cria um novo array com quantidade de itens iguais ao original

    - Aceita três parâmentros

        • item
        • index
        • array completo



const number = [1,2,3,4,5,6,7]

const double = number.map( item => {
    const newItem = item * 10
    return newItem
})

console.log(double)
console.log(number)



const list = [
    { name: 'Janildo', vip: true },
    { name: 'Letycia', vip: false },
    { name: 'Kimberly', vip: false },
    { name: 'Vinicius', vip: true },
    { name: 'Kai', vip: true },
    { name: 'Ryu', vip: false },
    { name: 'Levi', vip: false },
    { name: 'Maya', vip: true },
]

const newList = list.map( user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'Black' : 'green'
    }

    return newUser
})

console.log(newList)


const list = [
    { name: 'Janildo', vip: true },
    { name: 'Letycia', vip: false },
    { name: 'Kimberly', vip: false },
    { name: 'Vinicius', vip: true },
    { name: 'Kai', vip: true },
    { name: 'Ryu', vip: false },
    { name: 'Levi', vip: false },
    { name: 'Maya', vip: true },
]

const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'Black' : 'Green'
    }

    return newUser
})

console.log(newList)
*/

// const list = [
//     { name: 'Janildo', testGrade: 7 },
//     { name: 'Letycia', testGrade: 5 },
//     { name: 'Kimberly', testGrade: 6 },
//     { name: 'Vinicius', testGrade: 8 },
//     { name: 'Kai', testGrade: 10 },
//     { name: 'Ryu', testGrade: 9 },
//     { name: 'Levi', testGrade: 3 },
//     { name: 'Maya', testGrade: 1 },
// ]

// const aprovedList = list.map(students => {
//     const approvedStudent = {
//         name: students.name,
//         aproved: students.testGrade > 5 ? 'approved' : 'disapproved'    
//     }

//         return approvedStudent
// })

// console.log(aprovedList)


const list = [
    { name: 'Janildo', testGrade: 7 },
    { name: 'Letycia', testGrade: 5 },
    { name: 'Kimberly', testGrade: 6 },
    { name: 'Vinicius', testGrade: 8 },
    { name: 'Kai', testGrade: 10 },
    { name: 'Ryu', testGrade: 9 },
    { name: 'Levi', testGrade: 3 },
    { name: 'Maya', testGrade: 1 },
]

const aprovedList = list.map(students => {
    const approvedStudent = {
        name: students.name,
        aproved: students.testGrade > 5 ? 'approved' : 'disapproved'
    }

    return approvedStudent
})

console.log(aprovedList)