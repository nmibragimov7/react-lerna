FROM reg.1cb.kz/dockerhub/library/nginx:1.19-alpine
RUN ls -a
RUN ls builds/devops/public/demo-deploy
COPY packages/client/nginx.conf /etc/nginx/conf.d/default.conf

ARG BACKEND_URL
RUN echo $BACKEND_URL
RUN sed -i "s|%%BACKEND_URL%%|${BACKEND_URL}|g" /etc/nginx/conf.d/default.conf

COPY packages/client/dist/ /var/www
