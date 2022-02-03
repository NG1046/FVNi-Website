var fs = require("fs");
var mysql = require("mysql");
var mime = require("mime");

var connx = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fvnindex"
});


connx.query(`INSERT INTO \`music\`(\`audioBlob\`, \`audioContentType\`) VALUES (${connx.escape(fs.readFileSync("./BGM_Theme_Celio.wav"))}, "${mime.getType("./BGM_Theme_Celio.wav")}")`, async (errx, resul, fiel) => {
    if (errx){ throw errx; }
    console.log(resul);
});