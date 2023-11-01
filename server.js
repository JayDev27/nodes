// //importing express and storing it inside a variable called express
// const express = require('express')

// //initialize the express function and store in a variable of app
// const app = express()

// //create a variable called port and store your port
// const port = 8080

// app.get('/', (request, response) => {
//     response.status(200)
//     response.send('welcome to homepage')
// })

// app.get('/about', (request, response) => {
//     response.status(200)
//     response.send('welcome to about')
// })

// app.get('/services', (request, response) => {
//     response.status(200)
//     response.send('welcome to services')
// })

// app.get('/testimonial', (request, response) => {
//     response.status(200)
//     response.send('welcome to testimonial')
// })

// //server listening for request at port
// app.listen (port, () => console.log(`server started successfully at http://localhost:${port}`))

const express = require('express')

const app = express()
const port = 8080

app.get('/', (request, response) => {
    response.status(200)
    response.send('welcome to home')
})

app.get('/action', (request, response) => {
    response.status(200)
    response.send('welcome to action')
})

app.get('/state', (request, response) => {
    response.status(200)
    response.send('welcome to state')
})

app.listen (port, () => console.log(`server started succesfully at http://localhost:${port}`))