const express = require('express');
 const app = express();

 app.get('/', (rer,res) =>{
     res.send('Hello World')
 });
 app.listen(3000, () => console.log('Here is the post 3000..')
 );