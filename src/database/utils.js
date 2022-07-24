// Currently in file src/database/utils.js
const fs = require('fs');

const saveToDatabase = (database) => {
    fs.writeFileSync("./src/database/temporary_db.json", JSON.stringify(database, null, 2), {
        encoding: 'utf-8',
    });
};

module.exports = {
    saveToDatabase,
};
