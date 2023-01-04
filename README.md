# P11

![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/ArthurBlanc)

[Live demo](https://arthurblanc.github.io/Kasa/)

## Description :

> Implémentez le front end d'une application de location de logements.
> Mettez en place des composants avec React et les routes de l'application avec React Router.
> #### Compétences évaluées
>
> -   Créer des composants avec React
> -   Développer les routes d'une application web avec React Router
> -   Initialiser une application web avec un framework
>
### Situation (fictive) du projet :

Développeur freelance, missionné en tant que Développeur Front-end, une entreprise spécialisée dans la location d’appartements entre particuliers depuis près de 10 ans. .

L’entreprise souhaite faire une refonte totale de leur site pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end.

Mon rôle a été de développer le front-end de l’application, en utilisant les composants React, les routes React Router et en respectant les maquettes Figma.

### Contraintes techniques :

- Outils :
  - Create React App.
  - React Router.
  - L’utilisation de Sass est optionnelle. CSS est à utiliser par défaut.
  - Pas de librairie React externe.
- React :
  - Structure logique des différents fichiers.
  - Découpage en composants modulaires et réutilisables (Un composant par fichier).
  - Il est recommandé d’utiliser des composants fonctionnels au lieu des composants classes.
  - Utilisation des props entre les composants.
  - Utilisation du state dans les composants quand c'est nécessaire.
  - Gestion des événements.
  - Utiliser les listes autant que possible en itérant dessus (par exemple avec map).
- React Router :
  - La logique du routeur est réunie dans un seul fichier.
  - Il existe une page par route.
  - Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
  - La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
  - Général : Le code ne doit pas produire d'erreur ou de warning dans la console.

### Contraintes fonctionnelles :

- Pour le défilement des photos dans la galerie (composant Gallery) :
  - Si l'utilisateur se trouve à la première image et qu'il clique sur "précédent", la galerie affiche la dernière image.
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "suivant", la galerie affiche la première image.
  - S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
  - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse :
  - Par défaut, les Collapse sont fermés à l'initialisation de la page.
  - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
  - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Installation

-   **Exécutez Git bash**
-   **git clone https://github.com/ArthurBlanc/ArthurBlanc_11_14032022**
    -   Exécutez la commande ***npm install***, une fois l'installation terminée, démarrez avec la commande ***npm start*** puis rendez-vous sur http://localhost:3000/.

## Développé avec

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte et son intégration de GitHub
-   [React 18](https://fr.reactjs.org/) - Bibliothèque JavaScript libre développée par Facebook depuis 2013
-   [Create React App](https://create-react-app.dev/) - Boîte à outils créée par Facebook, qui est la référence pour initier un projet React
-   [React Router V6](https://reactrouter.com/) - Bibliothèque de routage pour React
-   [Sass](https://sass-lang.com/) - Langage de script préprocesseur qui est compilé ou interprété en CSS
-   [GitHub](https://github.com/) - Outil de gestion de versions

## Auteur

**Arthur Blanc** : [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
