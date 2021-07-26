const express = require('express')
//const bodyParser = require('body-parser')
const { request } = require('express')
const {WebhookClient} = require('dialogflow-fulfillment');

const app = express()
//app.use(bodyParser.json())
const port = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.post('/dialogflow-fullfillment', (request, response)=>{
    dialogflowFullfillment(request, response)
})

app.listen(port,() =>{
    console.log(`Listening on port ${port}`)
})

const dialogflowFullfillment =(request, response) => {
    const agent = new WebhookClient({request, response})
    var soma = request.body.queryResult.parameters['number'] + request.body.queryResult.parameters['number1']

    function Soma(agent){
        agent.add("O resultado é: "+ soma)
    } 
    let intentMap = new Map();
    intentMap.set("Soma", Soma)
    agent.handleRequest(intentMap)
}