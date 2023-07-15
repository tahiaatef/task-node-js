// 1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )
const person ={
    fname : "ahmed",
    lname : "hossam",
    age : "20",
    city :"alex"
}

//2) change obj to Json 
const personJson =JSON.stringify(person)
console.log(personJson)

//3) store in file
const fs = require("fs")
fs.writeFileSync("data.json" ,personJson  )

//4) read file (json
console.log (fs.readFileSync("data.json").toString())

//5) Convert to obj
const personObject = JSON.parse(personJson)
console.log(personObject)

//6) Update data to ( adel ahmed , 40 , cairo)
personObject.fname = "adel"
personObject.lname = "ahmed"
personObject.age = "40 "
personObject.city = "cairo"

//7) convert obj to Json 
const jsonPerson =JSON.stringify(personObject)
console.log(jsonPerson)

//8) store in file (writeFileSync)
fs.writeFileSync("data.json" ,jsonPerson  )

