# README

## Application Angular avec Backend Node.js et Conteneurisation Docker

Ce projet est une application web composée d'un frontend développé avec Angular et d'un backend mock en Node.js. L'application utilise NgRx pour la gestion de l'état et est conteneurisée à l'aide de Docker et Docker Compose pour faciliter le déploiement et le développement.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** (version 18 ou supérieure)
- **npm** (version 10 ou supérieure)
- **Angular CLI** (version 15 ou supérieure)
- **Docker** et **Docker Compose**

## Structure du Projet

La structure du projet est organisée comme suit :

```
project-root/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   ├── proxy.conf.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

- **backend/** : Contient le code du backend Node.js mock.
- **frontend/** : Contient le code du frontend Angular.
- **docker-compose.yml** : Fichier de configuration pour Docker Compose.
- **README.md** : Documentation du projet (ce fichier).

## Installation

Clonez le dépôt du projet et naviguez dans le répertoire du projet :

```bash
git clone https://github.com/votre-utilisateur/votre-projet.git
cd votre-projet
```

## Configuration du Backend

### Installation des Dépendances

Naviguez dans le répertoire `backend` et installez les dépendances :

```bash
cd backend
npm install
```

Le backend est un serveur Express simple qui sert de mock pour l'API. Il expose des endpoints pour récupérer et ajouter des items.

## Configuration du Frontend

### Installation des Dépendances

Depuis le répertoire racine du projet, naviguez dans le répertoire `frontend` et installez les dépendances :

```bash
cd ../frontend
npm install
```

Le frontend est une application Angular qui utilise NgRx pour la gestion de l'état. Elle interagit avec le backend pour récupérer et ajouter des items.

## Utilisation de Docker

Le projet est configuré pour être exécuté à l'aide de Docker et Docker Compose, ce qui facilite le déploiement et l'orchestration des services backend et frontend.

### Fichier `docker-compose.yml`

Le fichier `docker-compose.yml` définit deux services :

- **backend** : Le serveur Node.js mock.
- **frontend** : L'application Angular.

## Démarrage de l'Application avec Docker Compose

Depuis le répertoire racine du projet, exécutez les commandes suivantes pour construire et démarrer les conteneurs :

```bash
docker-compose up --build
```

Cette commande va :

- Construire les images Docker pour le backend et le frontend.
- Démarrer les conteneurs Docker pour chaque service.

### Accéder à l'Application

- **Frontend** : Ouvrez votre navigateur et accédez à `http://localhost`. Votre application Angular devrait s'afficher.
- **Backend** : L'API backend est accessible à `http://localhost:3000/api/items`.