FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt-get install -y git 
RUN apt-get install -y software-properties-common 
RUN apt-get install -y sudo 
RUN apt-add-repository --yes --update ppa:ansible/ansible  
RUN apt-get install -y ansible 
RUN apt-get install -y openssh-server
RUN apt-get install -y rsync
RUN apt-get clean;

RUN useradd -m -s /bin/bash ans_dep && \
    echo 'ans_dep ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN echo 'ans_dep:password' | chpasswd 

USER ans_dep