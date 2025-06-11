const mongoose = require("mongoose");
// const uri = "mongodb+srv://adminhamza:adminhamza123&@cluster0.pzcviot.mongodb.net/InventoryManagementApp?retryWrites=true&w=majority";

let conn_url = "mongodb+srv://ghiren20:ghiren20@cluster0.lgqjh6x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

function main() {
    mongoose.connect(conn_url).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };