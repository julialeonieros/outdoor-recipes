import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// import recipes from './data/recipes.json'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/outdoorRecipes"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

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
    type: Array,
    lowercase: true
  },
  tags: {
    type: Array,
    lowercase: true
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

// Endpoint that returns one recipe if queried, otherwise returns all recipes in DB.
app.get('/recipes', async (req, res) => {
  const { recipe } = req.query

  if (recipe) {
    const recipeRegex = new RegExp(recipe, 'i')
    const recipes = await Recipe.find({ recipe: recipeRegex })
    res.json(recipes)
  } else {
    const recipes = await Recipe.find()
    res.json({ length: recipes.length, data: recipes })
  }
  
})

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})
