const express = require('express');
const app = express();
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles')
const Article = require('./models/article')


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false}))
app.use('/articles',articleRouter)

const db = 'mongodb://localhost:27017/blog'

mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection successful");
})

app.get('/', async(req, res) => {
    const articles = await Article.find()
    res.render('articles/index',{articles});
})


app.listen(3000,()=>{
    console.log('listening on port 3000');
})