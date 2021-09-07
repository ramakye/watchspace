const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require('cors')



mongoose.connect('mongose database connection goes here', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useCreateIndex:true
})


.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Error', err))



app.use(cors())

// setting graphQL
app.use('/graphql', graphqlHTTP({
    schema:movieSchema,
    graphiql: true,
    rootValue: resolvers
}))

app.get('/', (req,res) =>{
    res.send('Hello from backend app.js')
})

app.listen(4000, () =>{
    console.log('Server on port 4000')
})
