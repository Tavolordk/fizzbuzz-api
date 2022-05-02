class Reader{
    static readJsonFile(filePath){
        const fs = require("fs");
        const rawdata = fs.readFileSync(filePath);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}
module.exports=Reader;