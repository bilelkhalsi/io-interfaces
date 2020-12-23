
FROM node:15.4.0-alpine3.10 As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.19.6-alpine

COPY --from=builder /usr/src/app/dist/admin/ /usr/share/nginx/html
