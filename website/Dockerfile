# Wybierz obraz Node.js
FROM node:18-alpine

# Ustaw katalog roboczy
WORKDIR /src/app

# Skopiuj pliki package.json i package-lock.json
COPY package.json yarn.lock ./

# Zainstaluj zależności
RUN yarn install --frozen-lockfile

# Skopiuj resztę plików projektu
COPY . .

# Zbuduj aplikację
RUN yarn build

# Ustawienie domyślnego polecenia uruchamiającego aplikację
CMD ["yarn", "start"]

# Exponuj port aplikacji
EXPOSE 3000