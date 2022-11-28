import express from "express"; 
import { auth } from "../middleware/auth.js";
// import bcrypt from bcrypt;
import { getAllCompanies} from "../services/companies.services.js";

const router = express.Router() ;

//  /movies - list all movie data

router.get ("/", async function(request, response){
    
    const companies= await getAllCompanies(request);
    response.send(companies)
    console.log(request.query);
})


export default router ;


