FROM node:22.4.1

RUN apt-get update
RUN apt-get install -y openssh-server 
RUN apt-get install sudo
RUN apt-get install systemd
RUN mkdir /var/run/sshd 
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/ssh_config

RUN useradd -m -s /bin/bash ans_dep && \
    echo 'ans_dep ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN echo 'ans_dep:password' | chpasswd 

RUN mkdir /home/ans_dep/next-js-template
RUN mkdir /home/ans_dep/next-js-template/web-app
RUN mkdir /var/www
RUN mkdir /var/www/nextjs_app

RUN service ssh start

EXPOSE 22
EXPOSE 3000

CMD ["/usr/sbin/sshd", "-D"]