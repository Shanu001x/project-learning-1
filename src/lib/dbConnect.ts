import mongoose, { mongo } from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export default async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
  }

  try {
    const db = await mongoose.connect(process.env.DB_URI || "", {});
    console.log(db);
    connection.isConnected = db.connections[0].readyState;
    console.log("db connnected successfully");
    console.log(db.connections)
  } catch (e) {
    console.log(e, "Error while connecting Database");
    process.exit(1);
  }
}
