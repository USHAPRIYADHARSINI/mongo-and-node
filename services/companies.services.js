import { client } from "../index.js";

export async function getAllCompanies(request) {
    return await client
        .db("mydb")
        .collection("companies")
        .find(request.query)
        .toArray();
}