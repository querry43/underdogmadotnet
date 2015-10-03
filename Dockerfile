FROM nginx:latest

RUN apt-get update -y
RUN apt-get install -y git
RUN rm -rf /usr/share/nginx/html
RUN git clone https://github.com/querry43/underdogmadotnet.git /usr/share/nginx/html

EXPOSE 80
