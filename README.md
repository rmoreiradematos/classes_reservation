# NestJS Project with Prisma, PostgreSQL, and RabbitMQ

## Descrição

Este projeto é um exemplo de uma aplicação NestJS integrada com Prisma ORM, um banco de dados PostgreSQL e RabbitMQ para mensageria. Ele inclui um CRUD básico de usuários e configuração para desenvolvimento e produção.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- Docker
- Docker Compose

## Configuração do Projeto
npm install

DATABASE_URL=postgresql://user:password@localhost:5432/mydb
PORT=3005

iniciar docker

docker compose up --build


executar migration do prisma:

npx prisma migrate dev --name init

(se precisar instalar e startar o prisma na mão)
npm install @prisma/client
npm install -D prisma
npx prisma init


executar o projeto:

npm run start:dev


