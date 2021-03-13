const fs = require('fs');

const name = './database/data.json';

const saveData = (data) => {
    fs.writeFileSync (name, data);
}

const getData = () => {
    
    if( !fs.existsSync(name)){
        return null;
    }
    
    return fs.readFileSync(name, {encoding: 'utf-8'});    
}
module.export = {
    saveData,
    getData
}