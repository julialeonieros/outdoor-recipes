import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cloudinaryFramework from 'cloudinary'
import multer from 'multer'
import cloudinaryStorage from 'multer-storage-cloudinary'
import listEndpoints from 'express-list-endpoints'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/outdoorRecipes"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Recipe = mongoose.model('Recipe', {
  title: {
    type: String,
    
  },
  portions: Number,
  ingredients: [{
    type: String,
    
  }],
  type: {
    type: String,
    
  },
  tags: [{
    type: String,
    
  }],
  instructions: {
    type: String,
    
  },
  createdBy: {
    type: String,
    
  },
  url: {
    type: String
  },
  imageName: {
    type: String
  },
  imageUrl: {
    type: String
  },
  photographer: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const cloudinary = cloudinaryFramework.v2; 
cloudinary.config({
  cloud_name: 'dtsyqfltv',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: 'recipeImages',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
})
const parser = multer({ storage })

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

// Endpoint that returns one recipe if queried, otherwise returns all recipes in DB.
app.get('/recipes', async (req, res) => {
  const { title, type, tags } = req.query
  const titleRegex = new RegExp(title, 'i')
  const typeRegex = new RegExp(type, 'i')
  const tagsRegex = new RegExp(tags, 'i')

  try {
    const recipes = await Recipe.find({
      title: titleRegex,
      type: typeRegex,
      tags: tagsRegex
    }).sort({ createdAt: -1 })
    res.json({ length: recipes.length, data: recipes})
  } catch (error) {
    res.status(400).json({ error: 'Something went wrong', details: error })
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

// post image that's later posted to new recipe in form
app.post('/recipes/img', parser.single('image'), async (req, res) => {
  res.json({ 
    imageUrl: req.file.path, 
    imageName: req.file.filename })
})

// endpoint to post new recipe
app.post('/recipes', async (req, res) => {

  try {
    const { title,  portions, ingredients, instructions, type, tags, createdBy, imageUrl, imageName } = req.body
    const newRecipe = await new Recipe({
      title, 
      portions,
      ingredients,
      instructions,
      type,
      tags, 
      createdBy,
      imageUrl,
      imageName
    }).save()
    res.json(newRecipe)
  } catch (error) {
    res.json(400).json({ error: "Couldn't post recipe", details: error })
  }
})

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})
