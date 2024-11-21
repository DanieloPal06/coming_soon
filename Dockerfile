# Fase 1: Construcción (Build) con Node.js
FROM node:18 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de definición de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Ejecutar el comando de build para generar los archivos estáticos de producción en la carpeta 'dist'
RUN npm run build

# Fase 2: Producción con Nginx
FROM nginx:alpine

# Copiar los archivos generados en la fase de build a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 8080, ya que es el puerto utilizado por Cloud Run
EXPOSE 8080

# Comando para mantener Nginx corriendo en primer plano
CMD ["nginx", "-g", "daemon off;"]
