const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specifiied."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Person = mongoose.model("Person", personSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Weird texture"
});

const peach = new Fruit({
    name: "Peach",
    rating: 10,
    review: "Peaches are Yummy!"
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great Fruit."    
})

const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});

pineapple.save();

person.save();

Fruit.insertMany([apple, kiwi, orange, banana, peach], (err) => {
    mongoose.connection.close();
    if(err){
        console.log(err);
    } else{
        console.log("Successfully inserted");
    }
});

Fruit.find((err, fruits) => {
    mongoose.connection.close();
    if(err){
        console.log(err);
    } else{         

        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
    }
});

Fruit.updateOne({_id: "628cb1335011ba375a7dcaec"}, {name: "Peach"}, (err) => {
    mongoose.connection.close();
    if(err){
        console.log(err);
    } else{
        console.log("Successfully updated");
    }
});

Fruit.deleteOne({_id: "628cb1335011ba375a7dcaec"}, (err) => {
    mongoose.connection.close();
    if(err){
        console.log(err);
    } else{
        console.log("Successfully deleted");
    }
});

Fruit.deleteMany({}, (err) => {
    mongoose.connection.close();
    if(err){
        console.log(err);
    } else{
        console.log("Successfully deleted");
    }    
});