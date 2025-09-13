const mongoose = require('mongoose');

async function connectDB() {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://mongo:27017/bytebank'; // Fallback se não for definido

    await mongoose.connect(mongoUri);

    console.log(`✅ Conectado ao MongoDB em ${mongoUri}`);
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
  }
}

module.exports = connectDB;
  