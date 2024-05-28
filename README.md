# Kasa

Projet réalisé dans le cadre de la formation de Développeur d'application Javascript React chez [Openclassrooms](https://openclassrooms.com).

> Développer une application de location immobilière entre particuliers avec React et React Router. Réaliser le front-end en respectant les maquettes Figma envoyer par la CTO.

lien Figma :  [Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=0-1)

-------

### Contraintes techniques:

* Outils: 

   * Create React App
   * React Router 
   * CSS par défaut ou SASS ( optionnelle )
   * Pas de librairie React externe.



* React: 
  * Découpage en composants modulaires et réutilisables ;
  * Un composant par fichier ;
  * Structure logique des différents fichiers ;
  * Utilisation des props entre les composants ;
  * Utilisation du state dans les composants quand c'est nécessaire ;
  * Gestion des événements ;
  * Utiliser les listes autant que possible en itérant dessus (par exemple avec map).



* React Router: 
  * Logique du routeur réunie dans un seul fichier.
  * Une page par route.
  * Une page 404  est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
  * Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
  * Général : Le code ne doit pas produire d'erreur ou de warning dans la console.


### Contraintes fonctionnelles

* Pour le défilement des photos dans la galerie (composant Gallery) : 

  * Si l'utilisateur se trouve à la première image et qu'il clique sur "précédent", la galerie affiche la dernière image.
  * Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "suivant", la galerie affiche la première image.
  * S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
  * La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

* Collapse: 
  
  * Par défaut, les Collapse sont fermés à l'initialisation de la page.
  * Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  * Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.


------
## Installation:
---
1. Cloner le repository: 
   * [git clone](https://github.com/Souleymane7800/P11-Kasa)

2. Installer toutes les dépendances pour le front-end:
   * npm install

3. Lancer le front-end:
   * npm run start


---
## Développé avec: 
---
* Visual Studio Code
* React 18
* Create React App
* React Router V6
* Github


![Kasa](https://github.com/Souleymane7800/P11-Kasa/assets/94050676/557ea96a-22fb-40d0-af9e-553653a915b9)