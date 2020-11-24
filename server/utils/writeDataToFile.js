const fs = require('fs');
const path = require('path');

const writeData = (data) => {
  fs.writeFile(
    path.join(__dirname, '../data', 'employee.json'),
    JSON.stringify(data),
    (err) => {
      console.log(err);
    }
  );
};

module.exports = writeData;
