FROM reg.1cb.kz/dockerhub/library/nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf

ARG BACKEND_URL

RUN sed -i "s|%%BACKEND_URL%%|${BACKEND_URL}|g" /etc/nginx/conf.d/default.conf

COPY packages/shared/build/ /var/www/shared
COPY packages/main/build/ /var/www/main
COPY packages/client/dist/ /var/www/client
COPY packages/manager/dist/ /var/www/manager

