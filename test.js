const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/ourDatabase', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))


// model and its schema
const Cat = mongoose.model('Cat',
  {
    name: { type: String, required: true },
    color: String,
    age: { type: Number }
  }
);

let array = []

array.push(new Cat({ name: "Garfield 1", color: "orange", age: 9 }))
array.push(new Cat({ name: "Garfield 2", color: "red", age: 1 }))
array.push(new Cat({ name: "Garfield 3", color: "blue", age: 2 }))
array.push(new Cat({ name: "Garfield 4", color: "green", age: 3 }))


// console.log(myFirstCat)

let query = { age: { $gte: 2 } }

Cat.deleteMany().then(() => {

  // Cat ---> cats
  // myFirstCat.save()
  Cat.insertMany(array).then(() => {

    Cat.find(query).then(arrayOfCats => {

      arrayOfCats.forEach((cat) => {
        console.log(cat)
      })

      // console.log(arrayOfCats)
      mongoose.disconnect()

    })


  })


})





// Sheep --> sheeps
// Fish ---> fish