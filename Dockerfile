FROM mhart/alpine-node:7

WORKDIR /src
ADD . /src

EXPOSE 1337

CMD ["npm", "run", "dev"]

