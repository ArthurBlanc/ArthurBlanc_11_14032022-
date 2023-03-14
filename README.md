![Kasa](/src/assets/logo.svg)

# Kasa 🏠🏢

[![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Farthurblanc.github.io%2FKasa%2F)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Farthurblanc.github.io%2FKasa%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=fr)
![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/ArthurBlanc)
[![React](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logocolor=61dafb)](https://reactjs.org/)

[Site live](https://arthurblanc.github.io/Kasa/) - <a href="#description-fr-">README en Français</a> - <a href="#en-description">English README</a>

## Description FR :

Ceci est un projet réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez [OpenClassrooms](https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react)

> Implémentez le front end d'une application de location de logements.
> Mettez en place des composants avec React et les routes de l'application avec React Router.
>
> #### Compétences évaluées :
>
> -   Créer des composants avec React ⚛️
> -   Développer les routes d'une application web avec React Router 🛣️
> -   Initialiser une application web avec un framework 🚀

### Situation (fictive) du projet :

Développeur freelance, missionné en tant que Développeur Front-end, une entreprise spécialisée dans la location d’appartements entre particuliers depuis près de 10 ans. .

L’entreprise souhaite faire une refonte totale de leur site pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end.

Mon rôle a été de développer le front-end de l’application, en utilisant les composants React, les routes React Router et en respectant les maquettes Figma.

### Contraintes techniques :

-   Outils :
    -   Create React App.
    -   React Router.
    -   L’utilisation de Sass est optionnelle. CSS est à utiliser par défaut.
    -   Pas de librairie React externe.
-   React :
    -   Structure logique des différents fichiers.
    -   Découpage en composants modulaires et réutilisables (Un composant par fichier).
    -   Il est recommandé d’utiliser des composants fonctionnels au lieu des composants classes.
    -   Utilisation des props entre les composants.
    -   Utilisation du state dans les composants quand c'est nécessaire.
    -   Gestion des événements.
    -   Utiliser les listes autant que possible en itérant dessus (par exemple avec map).
-   React Router :
    -   La logique du routeur est réunie dans un seul fichier.
    -   Il existe une page par route.
    -   Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
    -   La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
    -   Général : Le code ne doit pas produire d'erreur ou de warning dans la console.

### Contraintes fonctionnelles :

-   Pour le défilement des photos dans la galerie (composant Gallery) :
    -   Si l'utilisateur se trouve à la première image et qu'il clique sur "précédent", la galerie affiche la dernière image.
    -   Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "suivant", la galerie affiche la première image.
    -   S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
    -   La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
-   Collapse :
    -   Par défaut, les Collapse sont fermés à l'initialisation de la page.
    -   Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    -   Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Installation :

1. Cloner le repository:

-   `git clone https://github.com/ArthurBlanc/Kasa`

2. Installer toutes les dépendances pour le front-end:

-   `npm install` ou `yarn`

3. Lancer le front-end:

-   `npm start` ou `yarn start`

Le front-end sera lancé à l'URL:
`http://localhost:3000/Kasa/`.

## Développé avec :

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
-   [Sass](https://sass-lang.com/) - Préprocesseur CSS
-   [React 18](https://fr.reactjs.org/) - Bibliothèque JavaScript libre développée par Facebook
-   [Create React App](https://create-react-app.dev/) - Boîte à outils créée par Facebook, qui est la référence pour initier un projet React
-   [React Router V6](https://reactrouter.com/) - Bibliothèque de routage pour React
-   [GitHub](https://github.com/) - Outil de gestion de versions
-   [GitHub Pages](https://pages.github.com/) - Outil d’hébergement

## Auteur :

**Arthur Blanc** : [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/portfolio)

## Maquettes :

Lien des maquettes : https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1

---

## EN Description:

This is a project carried out as part of the Front-End JavaScript React Developer training program at [OpenClassrooms](https://openclassrooms.com/en/paths/517-javascript-react-developer).

> Implement the front-end of a housing rental application.
> Set up components with React and application routes with React Router.
>
> #### Skills evaluated:
>
> -   Create components with React ⚛️
> -   Develop web application routes with React Router 🛣️
> -   Initialize a web application with a framework 🚀

### Project (fictional) situation:

Freelance developer, commissioned as a front-end developer by a company specialized in apartment rentals between individuals for nearly 10 years.

The company wants to completely revamp their website to move to a full JavaScript stack with NodeJS on the back-end and React on the front-end.

My role was to develop the front-end of the application, using React components, React Router routes, and following Figma mockups.

### Technical constraints:

-   Tools:
    -   Create React App.
    -   React Router.
    -   The use of Sass is optional. CSS is to be used by default.
    -   No external React library.
-   React:
    -   Logical structure of different files.
    -   Modular and reusable component breakdown (one component per file).
    -   It is recommended to use functional components instead of class components.
    -   Use of props between components.
    -   Use of state in components when necessary.
    -   Event handling.
    -   Use lists as much as possible by iterating over them (for example with map).
-   React Router:
    -   Router logic is consolidated into a single file.
    -   There is one page per route.
    -   Route parameters are managed by React Router in the URL to retrieve information for each lodging.
    -   The 404 page is returned for each non-existent route, or if a value in the URL is not part of the data provided.
    -   General: The code should not produce any errors or warnings in the console.

### Functional constraints:

-   For scrolling through photos in the gallery (Gallery component):
    -   If the user is on the first image and clicks "previous", the gallery displays the last image.
    -   Conversely, when the displayed image is the last in the gallery, if the user clicks "next", the gallery displays the first image.
    -   If there is only one image, the "next" and "previous" buttons do not appear.
    -   The gallery must always remain the same height, as indicated in the Figma mockup. The images will therefore be cropped and centered within the image frame.
-   Collapse:
    -   By default, the Collapses are closed when the page is initialized.
    -   If the Collapse is open, the user's click should close it.
    -   Conversely, if the Collapse is closed, a click should open it.

## Installation:

1. Clone the repository :

-   `git clone https://github.com/ArthurBlanc/Kasa`

2. Install all dependencies for Front-end:

-   `npm install` or `yarn`

3. Launch front-end:

-   `npm start` or `yarn start`

Front-end will launch at URL:
`http://localhost:3000/Kasa/`.

## Built With:

-   [Visual Studio Code](https://code.visualstudio.com/) - Text editor
-   [Sass](https://sass-lang.com/) - CSS preprocessor
-   [React 18](https://reactjs.org/) - Free and open-source JavaScript library developed by Facebook
-   [Create React App](https://create-react-app.dev/) - Toolkit created by Facebook, which is the reference for initiating a React project
-   [React Router V6](https://reactrouter.com/) - Routing library for React
-   [GitHub](https://github.com/) - Version control tool
-   [GitHub Pages](https://pages.github.com/) - Hosting tool

## Author:

**Arthur Blanc**: [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/portfolio)

## Mockups:

Link to mockups: https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A1
