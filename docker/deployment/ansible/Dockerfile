FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y software-properties-common sudo && \
    apt-add-repository --yes --update ppa:ansible/ansible  && \
    apt-get install -y ansible openssh-server  && \
    apt-get clean;

RUN useradd -m -s /bin/bash ans_dep && \
    echo 'ans_dep ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
RUN echo 'ans_dep:password' | chpasswd 

USER ans_dep