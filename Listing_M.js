une fonction qui permet de filtrer seulement les ressources de votre API dont le nom commence par la lettre M
var unirest = require("unirest")

var req = unirest("GET", "http://localhost:3000/surahs?name_like=^M")

req.headers({ "cache-control": "no-cache", })

req.end(function (res) { if (res.error) throw new Error(res.error);

console.log(res.body) })