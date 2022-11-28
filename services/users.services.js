import { client } from "../index.js";

export async function createUser(data) {
    return await client
        .db("mydb")
        .collection("users")
        .insertOne(data);
}

export async function getUserByName(username) {
    return await client
        .db("mydb")
        .collection("users")
        .findOne({ username: username });
}

export async function getAllUsers(request) {
    return await client
        .db("mydb")
        .collection("users")
        .find(request.query)
        .toArray();
}