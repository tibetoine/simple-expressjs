# Utiliser l'image de base Node.js
FROM node:14

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers source de l'application
COPY . .

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Démarrer l'application lorsque le conteneur démarre
CMD [ "node", "app.js" ]
