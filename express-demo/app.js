 const Joi = require('joi')
const express = require('express')
 const app = express();
 app.use(express.json());
 
const courses = [
{ id : 1, name: 'courses1'},
{ id : 1, name: 'courses2'},
{ id : 1, name: 'courses3'},

];
 app.get('/', (rer,res) =>{
     res.send('Hello World')
 });
 app.get('/api/courses',(req,res) => {
     res.send(courses);
 });
 app.post('/api/courses', (req, res)=> {
    const {error} = validateCourse(req.body)
//
if(error) {
    res.status(400).send(result.error.detaiLs[0].message)
    return;
}
   const course = {
       id: courses.length + 1,
       name: req.body.name
   }
   courses.push(course);
   res.send(course)
 })

//

 app.put('/api/courses/:id', (req, res) =>{
    let course =courses.find(c => c.id === parseInt(req.params,id ))
    if (!course) res.status(404).send('the course with the given id was not found')
   //result
   const {error} = validateCourse(req.body)
//
if(error) {
    return res.status(400).send(result.error.detaiLs[0].message)
    
}

//updTING THE NAME 
course.name = req.body.name;
     res.send(course)
});

//
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
            return joi.validate(course, schema);
}



 app,get('/api/courses/:id', (req,res) => {
let course =courses.find(c => c.id === parseInt(req.params,id ))
  if (!course) res.status(404).send('the course with the given id was not found')
  res.send(course);
 })
  const port = process.env.PORT || 3000;
 app.listen(3000, () => console.log(`Here is the post ${PORT}`)
 );
 
 //delete
 app.delete('/api/courses/:id',(req,res) =>{
// look up the course
let course =courses.find(c => c.id === parseInt(req.params,id ))
  if (!course) res.status(404).send('the course with the given id was not found')
//return 404
// delete
 const index = courses.indexOf(course)
 courses.splice(index, 1);
 // respond
 res.send(course);
 })