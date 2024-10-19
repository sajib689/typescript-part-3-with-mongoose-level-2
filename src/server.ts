import mongoose from 'mongoose';
import app from './app';


const port:number = 3000;

async function bootstrap() {
  try {
    await mongoose.connect(
      "mongodb+srv://simple-crud:simple-crud@cluster0.2m0rny5.mongodb.net/test2"
    );
    console.log(`Database connected`);
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to database', err);
  }
}

bootstrap();

