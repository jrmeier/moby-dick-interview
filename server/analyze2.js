const fs = require('fs');

const file_path = "test.txt"

const file_data = fs.readFileSync(file_path)


console.log(file_data)

