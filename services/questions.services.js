import { client } from "../index.js";

export async function getAllQuestions(request) {
    return await client
        .db("mydb")
        .collection("question")
        .find(request.query)
        .toArray();
}

export async function createQuestion(data) {
    return await client
        .db("mydb")
        .collection("question")
        .insertMany(data);
}

export async function getQuestionById(id) {
    return await client
        .db("mydb")
        .collection("question")
        .findOne({ id: id });
}