import express from "express"; 
import { getAllMovies, getMovieById, createMovie, deleteMovie, editMovie } from "../services/movies.services.js";

const router = express.Router() ;

//  /movies - list all movie data

router.get ("/", async function(request, response){
    
    const movies= await getAllMovies(request);
    response.send(movies)
    console.log(request.query);
})

//  USING FIND - get movie by id
router.get ("/:id", async function(request, response){
    const {id} = request.params
    // db.movies.findOne({id:101})
    console.log(id);
    // const movie = movies.find (n=> n.id ==id)
    const movie = await getMovieById(id); // left id =>key in object , right id is the destructured element got from the url params
        // console.log(movie)
    movie
    ? response.send (movie) : response.status(404).send({msg :"Movie not found"})
})

router.post("/", async function(request, response){
    const data = request.body;
    console.log(data);
    const result = await createMovie(data);
    response.send(result);
})

router.delete ("/:id", async function(request, response){
    const {id} = request.params
    // db.movies.findOne({id:101})
    console.log(id);
    // const movie = movies.find (n=> n.id ==id)
    const movie = await deleteMovie(id); // left id =>key in object , right id is the destructured element got from the url params
        // console.log(movie)
    movie.deletedCount > 0
    ? response.send (movie) 
    : response.status(404).send({msg :"Movie not found"})
})

router.put("/:id", async function(request, response){
    const {id} = request.params
    const edit = request.body
    // db.movies.findOne({id:101})
    console.log(id, edit);
    // const movie = movies.find (n=> n.id ==id)
    const movie = await editMovie(id, edit);
        // await client
        // .db("mydb")
        // .collection("movies")
        // .updateOne({id : id }, {$set: edit }); // left id =>key in object , right id is the destructured element got from the url params
        // console.log(movie)
    movie
    ? response.send (movie) : response.status(404).send({msg :"Movie not found"})
})

export default router ;


