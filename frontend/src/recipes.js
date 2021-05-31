const Recipe = mongoose.model('Recipe', 
{
  title: {
    type: String,
    lowercase: true
  },
  portions: Number,
  ingredients: {
    type: String,
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

[
  {
    "title": "Kolbullar",
    "portions": 4,
    "ingredients": [
      "400 g. rimmat fläsk eller bacon",
      "6 dl vatten",
      "4 dl vetemjöl",
      "1 tsk salt",
      "Olja att steka i",
      "Lingonsylt till servering"
    ],
    "type": "lunch/dinner",
    "tags": "fire",
    "instructions": "Elda med lövved för bästa eld. Blanda smeten dagen innan och häll upp i en PET-flaska för enkel hantering. Använd en rejäl gjutjärnspanna med sluttande kanter, låt gärna lågorna slå upp runt pannan. Låt fläsket bryna tills det är knaperstekt och slå sedan på smeten. Stek på båda sidor.",
    "createdBy": "Okänd",
    "url": "https://adventuresweden.com/kolbulle-pa-traditionellt-vis/?lang=sv",
    "image": "",
    "photographer": "Agnes Ros"
  },
  {
    "title": "Kokkaffe",
    "portions": null,
    "ingredients": [
      "Kokmalet kaffe",
      "Vatten"
    ],
    "type": "beverage",
    "tags": "fire",
    "instructions": "Slå i kallt vatten i en kaffepanna. Koka gärna upp innan du tillsätter kaffet, en skopa per kopp vatten och en extra skopa för pannan. Lyft kaffepannan 3-4 gånger precis när det kokar upp. Ta från elden och häll en skvätt kallt vatten i pipen för att eventuell sump ska rinna ner. Låt dra några minuter.",
    "createdBy": "Okänd",
    "url": null,
    "image": "",
    "photographer": "Agnes Ros"
  },
  {
    "title": "Kanelbullar på stormkök",
    "portions": 6,
    "ingredients": [
      "1 paket färdig pizzadeg",
      "250 g smör (spara lite till stekning)",
      "1 tsk kanel",
      "0,5 dl kokossocker",
      "100 g pekannötter",
      "Lönnsirap"
    ],
    "type": "fika",
    "tags": "fire",
    "instructions": "Blanda kanel, kokossocker, och smör. Rulla ut degen och bred ett lager av kanelblandningen. Rulla ihop och dela i ca 12 bullar. Stek i smör och ringla över lönnsirap, toppa med pekannötter. Ät och njut av din dag utomhus!",
    "createdBy": "Nathalie Spjälle",
    "url": "https://www.foodbynatta.com/blog/kanelbullartrangia",
    "image": "",
    "photographer": "Julia Ros"
  },
  {
    "title": "Efterrättstortilla på stormkök",
    "portions": 2,
    "ingredients": [
      "2 tortillabröd",
      "2 bananer",
      "5 st skivade jordgubbar",
      "2 dl nutella"
    ],
    "type": "fika",
    "tags": "fire",
    "instructions": "Bred nutella på halva tortillan och toppa med bananskivor. Vik ihop tortillan och stek några minuter på varje sida. Ät med färska jordgubbar.",
    "createdBy": "Nathalie Spjälle",
    "url": "https://www.foodbynatta.com/blog/nutella-tortilla-trangia",
    "image": "",
    "photographer": "Julia Ros"
  },
  {
    "title": "Krämig citronpasta",
    "portions": null,
    "ingredients": [
      "Schalottenlök",
      "Vitlök",
      "Smör",
      "Vitt vin",
      "Grädde",
      "Parmesan (mycket!)",
      "Citronzest",
      "Citronjuice",
      "Valfri pasta",
      "Salt och peppar"
    ],
    "type": "lunch/dinner",
    "tags": "fire",
    "instructions": "",
    "createdBy": "Agnes Ros",
    "url": "https://www.instagram.com/p/CO48g9fpl0R/",
    "image": "",
    "photographer": "Agnes Ros"
  },
  {
    "title": "Macka med hummus och avokado",
    "portions": 1,
    "ingredients": [
      "Valfritt bröd, gärna grovt",
      "Avokado",
      "Hummus, färdigköpt eller hemgjord",
      "Fetaost",
      "Babyspenat"
    ],
    "type": [
      "Fika",
      "Breakfast"
    ],
    "tags": "Quick",
    "instructions": "Bred hummus på brödet och toppa med mosad eller skivad avokado, smulad fetaost samt babyspenat. Njut av utsikten.",
    "createdBy": "Agnes Ros",
    "url": null,
    "image": "",
    "photographer": "Agnes Ros"
  }
  // {
  //   "title": "",
  //   "portions": ,
  //   "ingredients": [
  //     "",
  //     ""
  //   ],
  //   "type": "",
  //   "tags": "",
  //   "instructions": "",
  //   "createdBy": "",
  //   "url": "",
  //   "image": "",
  // "photographer": ""
  // }
]
