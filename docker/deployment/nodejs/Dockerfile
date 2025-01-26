FROM node:22.4.1

RUN useradd -r ans_dep
RUN echo 'ans_dep:password' | chpasswd 
RUN mkdir '/home/ans_dep'
RUN mkdir '/home/ans_dep/.ssh'

RUN apt-get update && \
    apt-get install -y openssh-server && \
    mkdir /var/run/sshd && \
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/ssh_config
    
RUN service ssh start

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]