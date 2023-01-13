FROM reg.1cb.kz/dockerhub/library/nginx:latest
RUN ls builds/abis/demo-deploy/packages/main
RUN ls builds/abis/demo-deploy/packages/client
COPY nginx.conf /etc/nginx/conf.d/default.conf

ARG BACKEND_URL
ARG HOST_CLIENT
ARG PACKAGE
ARG BUILD
RUN echo $BACKEND_URL
RUN echo $HOST_CLIENT
RUN echo $PACKAGE
RUN echo BUILD

RUN sed -i "s|%%BACKEND_URL%%|${BACKEND_URL}|g" /etc/nginx/conf.d/default.conf

#COPY packages/$PACKAGE/$BUILD/ /var/www/$PACKAGE
