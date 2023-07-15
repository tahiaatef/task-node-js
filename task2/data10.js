
const fs = require("fs")
const allData =require("./allData")

const addPerson = (fname , lname , age , city ,id) => {
    
    const allData = loadData()

    const dublicatedData = allData.filter((obj) =>{
        
        return   obj.id === id
    })
    console.log(dublicatedData)
    if (dublicatedData.length == 0){
        allData.push({
            fname : fname ,
            lname : lname ,
            age : age ,
            id : id ,
            city :city
        })
        saveAllData(allData)
    }
    else{
        console.log("error to dublicatedData")
    }
}
/////////////////////////////////////////////////////////////////////////////////////
const loadData = () => {
      try {
         const dataJson = fs.readFileSync("data10.json").toString()
         return       JSON.parse(dataJson)
        } 
        catch {
         return []
        }
}
///////////////////////////////////////////////////////////////////////////////////////
const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData)

    fs.writeFileSync("data10.json", saveAllDataJson )

}
//////////////////////////////////////////////////////////////////////////
const  deleteData = (id) => {
    const allData = loadData()

    const dataToKeep = allData.filter((obj) => {
        return obj.id != id  
    })
    console.log(dataToKeep)
    
    saveAllData(dataToKeep)

}
//////////////////////////////////////////////////////////////////////////
const  readData = (id) => {
    const allData = loadData()

    const itemNeeded = allData.find((obj) => {
        return obj.id == 5
    })
    console.log(itemNeeded)

}

////////////////////////////////////////////////////////////////////////////
const  listData = (id) => {
    const allData = loadData()

    allData.forEach((obj) => {

        console.log(obj.fname ,obj.lname,obj.city)
         
    })

}

////////////////////////////////////////////////
module.exports ={
    addPerson,
    deleteData,
    readData,
    listData
}