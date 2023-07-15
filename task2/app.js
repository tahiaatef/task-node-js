
//1- to add 7 persons with ids from 1-7 
//(id - fname - lname - age - city )
const data10 = require("./data10")
const yargs = require("yargs")
yargs.command({
    command:"add",
    describe:"to add an item",
    builder : {
       fname:{
        describe :"frist name in command add",
        demandOption : true ,
        type :"string"
       },
       lname:{
        describe :"last name in command add",
        demandOption : true ,
        type :"string"
       },
      id:{
        describe :"id in command add",
        demandOption : true ,
        type :"string"
       },
       age:{
        describe :"age in command add",
        demandOption : true ,
        type :"string"
       },
       city:{
        describe :"city  in command add",
        demandOption : true ,
        type :"string"
       }
    },
    handler:(x) => {
        data10.addPerson(x.fname,x.lname,x.age,x.city,x.id)
    }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2- to delete id 4 - 6 
yargs.command({
    command:"delete",
    describe:"to delete an item",
    handler:(x) => {
        data10.deleteData(x.id)
    }
})
console.log(yargs.argv)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4- to read all data for only the 5th person

yargs.command({
    command:"read",
    describe:"to read data",
    builder : {
      id:{
        describe :"id in command delete",
        demandOption : true ,
        type :"string"
       }
    },
    handler:(x) => {
        data10.readData(x.id)
    }
})
/////////////////////////////////////////////////////////////
//3- to list fname & lname & city for all
yargs.command({
    command : "list",
    describe : "to list data",
    handler : () => {
        data10.listData()
    }
})

yargs.parse()