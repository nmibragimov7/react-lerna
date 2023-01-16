FROM reg.1cb.kz/dockerhub/library/nginx:1.19-alpine
RUN ls builds/devops
COPY packages/main/nginx.conf /etc/nginx/conf.d/default.conf

#ARG BACKEND_URL
#RUN echo $BACKEND_URL
#RUN sed -i "s|%%BACKEND_URL%%|${BACKEND_URL}|g" /etc/nginx/conf.d/default.conf

COPY packages/main/build/ /var/www
