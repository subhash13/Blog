const express = require('express');
const Article = require('../models/article')
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.get('/:id', async(req, res) => {
    const articles = await Article.findById(req.params.id)
    res.render('articles/show',{articles:articles})
    // res.render('articles/new')
})

router.post('/', async (req, res) => {
    let articles = new Article({
        title: req.body.title,
        description: req.body.description
    })
    try {
        articles = await articles.save()
        res.redirect(`articles/${articles.id}`)
    } catch (e) {
        res.render('articles/new',{articles})
    }
})

module.exports = router;