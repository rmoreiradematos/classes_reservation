import express from 'express';
import sequelize from './config/sequelize';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch((err: any) => console.error('Não foi possível conectar ao banco de dados:', err));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync({ force: true })
  .then(() => {
      console.log('Tabelas criadas com sucesso.');
      app.listen(PORT, () => {
          console.log(`Servidor rodando na porta ${PORT}`);
      });
  })
  .catch(err => console.error('Erro ao sincronizar os modelos:', err));
