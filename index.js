const HtmlTableToJson = require('html-table-to-json');
const fs = require('fs');

const input = process.argv[2];
const output = process.argv[3];

fs.readFile(`input/${input}`, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const jsonTable = HtmlTableToJson.parse(data);

  fs.writeFile(`output/${output}`, JSON.stringify(jsonTable.results), function (err) {
    if (err) return console.log(err);
    console.log('success!');
  });
})
