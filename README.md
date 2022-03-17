# Alos_Act1

- L'API du Coran renvoie des chapitres, des versets, une recherche par audio, texte ou autre format en demandant une version spécifique qui correspond à un mot-clé dans une version ou une langue particulière, et les développeurs peuvent accéder aux options de récitation, de traduction, de juz, de tafsir et d'implémentation dans une application.

- Listing 2 pour a cher seulement les 10 premiers enregistrements

var unirest = require("unirest")

 var req = unirest("GET", "http://localhost:3004/chapters?_limit=10")


req.headers({
"cache-control": "no-cache",
})

 req.end(function (res) {
 if (res.error) throw new Error(res.error)
 console.log(res.body)
})

- une fonction qui permet de filtrer seulement les ressources de votre API dont le nom commence par la lettre M

var unirest = require("unirest")

 var req = unirest("GET", "http://localhost:3004/chapters?name_like=^M")


req.headers({
"cache-control": "no-cache",
})

 req.end(function (res) {
 if (res.error) throw new Error(res.error)
 console.log(res.body)
})

- L'en-tête HTTP Cache-Control contient des directives (ou instructions)  pour la mise en cache tant dans les requêtes que dans les réponses
Le fait de spécifier no-cache  indique que les clients peuvent mettre une ressource  en cache et doivent la revalider à chaque fois avant de l'utiliser. Cela signifie  que la requête HTTP se produit à chaque fois, mais qu'elle peut sauter le  téléchargement du corps HTTP si le contenu est valide.
