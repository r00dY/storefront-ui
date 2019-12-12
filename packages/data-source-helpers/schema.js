const fs = require("fs");
const schema = fs.readFileSync(`${__dirname}/sdl.gql`, "utf8");
module.exports = schema;
