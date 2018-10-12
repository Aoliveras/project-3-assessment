const
    express = require('express'),
    app = express(),
    ejs = require('ejs'),
    axios = require('axios')

const apiClient = axios.create();

app.use(express.json());


// ejs configuration
app.set('view engine', 'ejs')


//routes
app.get('/', (req, res) =>{
    res.render('index')
})
app.get('/posts', (req, res) =>{
    console.log("Request recieved, constacting api...");
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    apiClient({ method: "get", url: apiUrl })
    .then(response => {
        console.log(response.data)
        let data = response.data
        res.render('showPosts', { payload: data })
    })
})

app.listen( process.env.PORT, err  => {
                console.log(err || `Server listening on ${process.env.PORT}`)
            })