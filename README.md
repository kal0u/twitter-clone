# twitter-clone

# Projet MicroBloggo - Coding Academy

Réalisation d'un clone twitter avec le stack MERN dans le cadre de la formation Code&Go d'Epitech.

## Prérequis et installation

Afin de pouvoir utiliser cette application web, il est nécessaire d'installer préalablement les éléments suivants :
* Node version v12.16.3 ou supérieur.
* MongoDB version v4.2.7 ou supérieur.
* Yarn (version 1.22.4 ou supérieur) 

Pour installer cette application web : 

* 1 - Cloner le repertoire.
* 2 - Installer les dépendances coté serveur :
    ```
    $ cd back
    $ yarn install
    ```
* 3 - Installer les dépendances coté client
    ```
    $ cd client
    $ yarn install
    ```

### Lancer l'application

* 1 - Lancer MongoDB :
    ```
    $ sudo mongod --port votrePort
    $ sudo mongo --port votrePort
    ```
* 2 - Lancer le server
    ```
    $ cd back
    $ yarn start 
    ```
* 3 - Lancer le client
    ```
    $ cd front
    $ yarn start
    ```
* 4 - Lancer le navigateur Web de votre choix et aller sur http://localhost:3000

## Front End

* React

## Back End

* API avec NodeJs et Express.
* Database avec MongoDB.