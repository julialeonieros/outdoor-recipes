import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import recipes from './data/recipes.json'

// const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/recipesAPI"
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

const Recipe = mongoose.model('Recipe', {
  title: {
    type: String,
    lowercase: true
  },
  portions: Number,
  ingredients: {
    type: Array,
    lowercase: true
  },
  type: {
    type: String,
    lowercase: true,
    enum: ['breakfast', 'lunch/dinner', 'fika', 'beverage']
  },
  tags: {
    type: String,
    lowercase: true,
    enum: ['veg', 'gluten-free', 'quick', 'fire']
  },
  instructions: {
    type: Array,
    lowercase: true
  },
  createdBy: {
    type: String,
    lowercase: true
  },
  url: String,
  image: String,
  photographer: String
})


app.get('/', (req, res) => {
  res.send('Hello world!')
})

// get all recipes
app.get('/recipes', async (req, res) => {
  // const recipes = await Recipe.find()
  res.json({ length: recipes.length, data: recipes })
})

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})
