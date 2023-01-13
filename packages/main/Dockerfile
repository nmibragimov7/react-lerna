FROM reg.1cb.kz/dockerhub/library/nginx:1.19-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

ARG BACKEND_URL
ARG HOST_CLIENT
RUN echo $BACKEND_URL
RUN echo $HOST_CLIENT

RUN sed -i "s|%%BACKEND_URL%%|${BACKEND_URL}|g" /etc/nginx/conf.d/default.conf

COPY build/ /var/www
RUN ls -a
