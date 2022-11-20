import { client } from "../index.js";

export async function editMovie(id, edit) {
    return await client
        .db("mydb")
        .collection("movies")
        .updateOne({ id: id }, { $set: edit });
}
export async function deleteMovie(id) {
    return await client
        .db("mydb")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function createMovie(data) {
    return await client
        .db("mydb")
        .collection("movies")
        .insertMany(data);
}
export async function getMovieById(id) {
    return await client
        .db("mydb")
        .collection("movies")
        .findOne({ id: id });
}
export async function getAllMovies(request) {
    return await client
        .db("mydb")
        .collection("movies")
        .find(request.query)
        .toArray();
}
