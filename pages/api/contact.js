import { MongoClient } from "mongodb";
require('dotenv').config();

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(email) ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    // console.log(newMessage);

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://mohitpal2621:${process.env.PASSWORD}@cluster0.l1h9v7x.mongodb.net/myblog?retryWrites=true&w=majority&appName=Cluster0`
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();

    try {
        const result = await db.collection("messages").insertOne(newMessage);
        newMessage.id = result.insertedId;
    } catch (error) {
        client.close();
        res.status(500).json({message: "Storing message failed"});
        return;
    }

    client.close();

    res.status(201).json({ message: "Successfully stored message" });
  }
}

export default handler;
