import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongodb Connected Successfully");
    });

    connection.on("error", (err) => {
      console.log('mongodb connection error:',  + err);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong!", error);
  }
}
