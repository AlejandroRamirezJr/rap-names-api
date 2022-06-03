const express = require('express')
const app = express();
const PORT = 8000

const rappers = {
    '21 savage': {
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29},
    'chance the rapper':{
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age': 29},
    'unknown':{
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0}
    }

app.get('/',(request, response)=>{

    response.sendFile(__dirname + '/index.html')


})

app.get('/api/:name',(request, response)=>{

   //request.params.name gives us the query after the colon in /api/ in the get
    const rapperName = request.params.name.toLowerCase()

    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }

})


app.listen(PORT, ()=>{

    console.log(`We are listening on Port ${PORT}`)
})