const mongoose = require('mongoose');

async function main() {
    const schema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            index: true,
        }
    });

    const Model = mongoose.model('Product', schema);

    await mongoose.connect('mongodb://127.0.0.1:27017', {
        dbName: 'nodejs_05_techer'
    });

    const products = await Model.find();
    console.log(products);

    await Model.create({ title: "apple" });
    await Model.create({ title: "peach" });

    const allProducts = await Model.find();
    console.log(allProducts);

    const apple = await Model.findOne({ title: "apple" });
    console.log(apple.id);
}

main();