import express from "express"; 
import { auth } from "../middleware/auth.js";
// import bcrypt from bcrypt;
import { getAllQuestions, getQuestionById, createQuestion } from "../services/questions.services.js";

const router = express.Router() ;

//  /questions - list all question data

router.get ("/", async function(request, response){
    
    const questions= await getAllQuestions(request);
    response.send(questions)
    console.log(request.query);
})

//  USING FIND - get question by id
router.get ("/:id", async function(request, response){
    const {id} = request.params
    // db.questions.findOne({id:101})
    console.log(id);
    // const question = questions.find (n=> n.id ==id)
    const question = await getQuestionById(id); // left id =>key in object , right id is the destructured element got from the url params
        // console.log(question)
        question
    ? response.send (question) : response.status(404).send({msg :"Question not found"})
})

router.post("/",auth, async function(request, response){
    const data = request.body;
    console.log(data);
    const result = await createQuestion(data);
    response.send(result);
})





export default router ;


