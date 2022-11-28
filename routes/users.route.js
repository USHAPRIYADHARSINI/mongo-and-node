import express from "express"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { getAllMovies, getMovieById, createMovie, deleteMovie, editMovie } from "../services/movies.services.js";
import { createUser, getUserByName, getAllUsers } from "../services/users.services.js";

const router = express.Router() ;


async function genHashedPassword(password){
    const no_of_rounds = 10;
    const salt = await bcrypt.genSalt(no_of_rounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(salt, hashedPassword);
    return(hashedPassword);
}

//signup users

router.post("/signup", async function(request, response){
    const { name , password , place, tags, profilePic, email } = request.body;

    const userFromDb = await getUserByName(name);

    console.log(userFromDb);

    if(userFromDb){
        response.send({message: "username already exists"})
    }else{
        const hashedPassword= await genHashedPassword(password);
    console.log(password, hashedPassword);

    const result = await createUser({
        username : name,
        password : hashedPassword,
        place : place,
        tags : tags,
        profilePic : profilePic,
        email : email
    });
    response.send(result);
    }
})

// login user

router.post("/login", async function(request, response){
    const { username , password } = request.body;

    const userFromDb = await getUserByName(username);

    console.log(userFromDb);

    if(!userFromDb){
        response.send({message: "invalid credintials"})
    }else {
        const storedPassword= userFromDb.password;
        const isPasswordMatch = await bcrypt.compare(password, storedPassword);
        if (isPasswordMatch){
            const token = jwt.sign({id : userFromDb._id}, process.env.SECRET_KEY);
            response.send({message : "successfull login", token: token})
        }else{
            response.status(400).send({message: "invalid credintials"})
        }
    }
   
});


//  /users - list all users data

router.get ("/",  async function(request, response){
    
    const users= await getAllUsers(request);
    response.send(users)
    console.log(request.query);
})


export default router ;