import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// import recipes from './data/recipes.json'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/outdoorRecipes"
//const mongoUrl = "mongodb://localhost/outdoorRecipes"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8081
const app = express()

app.use(cors())
app.use(express.json())

const Recipe = mongoose.model('Recipe', {
  title: {
    type: String,
    lowercase: true
  },
  portions: Number,
  ingredients: [{
    type: String,
    lowercase: true
  }],
  type: [{
    type: String,
    lowercase: true
  }],
  tags: [{
    type: String,
    lowercase: true
  }],
  instructions: {
    type: String,
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
// localhost:8080/recipes?title='title'
// http://localhost:51796/recipes?title=kolbulle

app.get('/recipes', async (req, res) => {
  const { recipe, title, tags, type } = req.query
  const titleRegex = new RegExp(title, 'i')
  const tagsRegex = new RegExp(tags, 'i')
  const typeRegex = new RegExp(type, 'i')

  try {
    const recipes = await Recipe.find({
      title: titleRegex,
      tags: tagsRegex,
      type: typeRegex
    })
    res.json({ length: recipes.length, data: recipes})
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong', details: error })
  }
})

app.post('/recipes', async (req, res) => {
  try {
    const { title,  portions, ingredients, instructions, type, tags, createdBy } = req.body
    const newRecipe = await new Recipe({
      title, 
      portions,
      ingredients,
      instructions, 
      type, 
      tags, 
      createdBy
    }).save()
    res.json(newRecipe)
  } catch (error) {
    res.json(400).json(error)
  }
})

// Endpoint to link to a single recipe by its id. Use this endpoint to link to SingleRecipePage
app.get('/recipes/:id', async (req, res) => {
  const { id } = req.params
  try {
    const findRecipe = await Recipe.findOne({ _id: id })
    if (findRecipe) {
      res.json(findRecipe)
    } else {
      res.status(404).json({ error: 'id not found' })
    }
  } catch (error) {
    res.status(400).json({ error: 'request not valid' })
  }
})

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})
