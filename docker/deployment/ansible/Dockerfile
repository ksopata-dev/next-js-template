FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y software-properties-common  && \
    apt-add-repository --yes --update ppa:ansible/ansible  && \
    apt-get install -y ansible openssh-server  && \
    apt-get clean;

RUN useradd -r ans_dep
RUN echo 'ans_dep:password' | chpasswd 

USER ans_dep