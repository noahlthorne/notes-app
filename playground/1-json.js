const fs = require("fs");

const updateJsonData = (name, age) => {
  const dataBuffer = fs.readFileSync("1-json.json");
  const dataJson = dataBuffer.toString();
  const data = JSON.parse(dataJson);
  data.name = name;
  data.age = age;
  console.log("new data", data);
  fs.writeFileSync("1-json.json", JSON.stringify(data));
};

updateJsonData("dad", 38);
// load and parse json data
// change the name and age property using your info
// stringify the changed object and overwrite the original data
// test work by viewing data
