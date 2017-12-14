FROM nginx:1.13.7-alpine

ADD ./app.conf /etc/nginx/conf.d/default.conf
WORKDIR /var/www
ADD ./index.html .
ADD ./the-app.js .

# docker build -t tdnx .
# docker run -it --rm -p 8080:80 tdnx