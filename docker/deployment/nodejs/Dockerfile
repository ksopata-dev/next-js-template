FROM node:22.4.1

RUN apt-get update && \
    apt-get install -y sudo openssh-server && \
    mkdir /var/run/sshd && \
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/ssh_config

RUN useradd -m -s /bin/bash ans_dep && \
    echo 'ans_dep ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN echo 'ans_dep:password' | chpasswd 

RUN service ssh start

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]