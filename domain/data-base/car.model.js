const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CarsSchema = new Schema({
    marque: {type: String, required: true},
    annee: {type: String, required: true},
    kilometrage: {type: String, required: true},
    prix: {type: String, required: true},
    devise: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Cars', CarsSchema);
