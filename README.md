# Alos_Act1
-------
**Ce projet concerne l&#39;interface Holy Quran, qui contient les fichiers suivants :**
- db.json : ce fichier contient nos données de projet, qui sont les suivantes:
      - 114 Surahs
      - 6236 ayahs
      - 15 sajdas
      - 556 rukus
      - 604 pages
      - 7 manzils
      - 240 maqras
      - 30 juz
1. Dans chaque surah on a le nom (name) et sa translation en anglais et arabe (englishename,arabicname) sa revelution(mecca,madina).
 
2. Dans chaque ayah on a sa line,sa juz,sa manzil,sa page,ruku,maqra et est-ce-qu&#39;il existe sajda ou non.
 
3. Ensuite,pour chaque sajda on a le nombre du surahs et ayahs et est-ce-qu&#39;il est recommender ou non ,obligatoire ou non.
 
4. Enfin,pour rukus,pages,manzils,maqras et juzs on a le surah et ayah avec lequel elle commence et se termine .

- Listing_10.js: ce fichie pour afficher seulement les 10 premiers enregistrements(question1) on a utilisé la commande ((&quot;GET&quot;, &quot;http://localhost:3000/surahs?_limit=10&quot;).

- Listing_M.js: ce fichier contient une fonction qui permet de filtrer seulement les ressources de votre API dont le nom commence par la lettre M avec la commande (&quot;GET&quot;, &quot;http://localhost:3000/surahs?name_like=^M&quot;)

- L&#39;en-tête HTTP Cache-Control contient des directives (ou instructions) pour la mise en cache tant dans les requêtes que dans les réponses Le fait de spécifier no cache indique que les clients peuvent mettre une ressource en cache et doivent la revalider à chaque fois avant de l&#39;utiliser. Cela signifie que la requête HTTP se produit à chaque fois, mais qu&#39;elle peut sauter le téléchargement du corps HTTP si le contenu est valide.
