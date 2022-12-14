const mongoose = require('mongoose');
const marked = require('marked');
const slugify = require('slugify');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    slug:{
        type: String,
        required: true,
        unique: true
    }
})
articleSchema.pre('validate',()=>{
    if(this.title){
        this.slug = slugify(this.title,{lower:true,strict:true});
    }
})

module.exports = mongoose.model('Article',articleSchema)