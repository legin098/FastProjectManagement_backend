import mongoose from "mongoose";

const conectarDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    const url = `${connection.connection.host}: ${connection.connection.port}`;
    console.log(`MongoDb conectado en: ${url}`);
  } catch (e) {
    console.log(`Error al conectar a la base de datos: ${e}`);
    process.exit(1);
  }
};

export default conectarDb;
