FROM reg.1cb.kz/dockerhub/library/nginx:1.19-alpine
RUN ls -a
RUN ls builds/devops/public/demo-deploy/packages/main
COPY packages/main/nginx.conf /etc/nginx/conf.d/default.conf

ARG BACKEND_URL
RUN echo $BACKEND_URL
ARG HOST_CLIENT
RUN echo $HOST_CLIENT
ENV REACT_APP_HOST_CLIENT $HOST_CLIENT

RUN sed -i "s|%%BACKEND_URL%%|${BACKEND_URL}|g" /etc/nginx/conf.d/default.conf

COPY packages/main/build/ /var/www
