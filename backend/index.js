const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern');

app.post('/register', (req, res)=>{
    // To post / insert data into database
    console.log("-------")
    console.log(req.body);
    const email = req.body.values.email;
    
    FormDataModel.findOne({email: email})
    .then(user => {
            if(user){
            res.json("Already registered")
        }
        else{
            console.log('|||')
            console.log(req.body.values)
            FormDataModel.create(req.body.values)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})


app.post('/login', (req, res)=>{
    // To find record from the database
    const [email, password] = [req.body.email,req.body.password];
    console.log("----")
    console.log(password)
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            console.log(user)
            if(user.password === password) {
                //res.json("Success");
                console.log('kkkk')
                res.json(user);
            }
            else{
                console.log('oooo')
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.get('/login/:email', (req,res)=>{
    // To find record from the database
    const email = req.params.email;
    console.log(email)
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
           res.json(user)
        }
        // If user not found then 
        else{
            res.json("No records found for email... ");
        }
    })
})

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});