var nome = `Yegor`
let age, isHuman

age = 34
isHuman = true

console.log(`Olá ${nome} você tem ${age} anos`)

const person = {
    name: `Yegor`,
    age: 34,
    weight: 75.5,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} e pesa ${person.weight}`)

const animals = [
    `Lion`,
    `Monkey`,
    {
        name: `cat`,
        age:3
    },
    isHuman,
    person
]

console.log(animals[2].name)
console.log(animals[4].name)