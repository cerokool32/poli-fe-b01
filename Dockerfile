FROM nginx:alpine-slim

RUN apk update
RUN apk upgrade

EXPOSE 80/tcp

COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/poli-fe-b01/browser /usr/share/nginx/html
