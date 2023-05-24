//importo o mongoose
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

//crio uma string de conexao cujo database se chama project
mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//com base nos dados de conexao, peço para efetivamente realizar a conexao
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o banco de dados:'));
db.once('open', function() {
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
});

export default db;
