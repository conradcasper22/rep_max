mongoose.connect("mongodb://localhost/rep-max").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;