const mongoose = require('mongoose');
//const beautifyUnique = require('mongoose-beautiful-unique-validation');

//mongoose.plugin(beautifyUnique);

mongoose.connect('mongodb://127.0.0.1:27017', {
        dbName: 'nodejs_05_techer'
    });

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

const Author = mongoose.model('Author', authorSchema);

(async function() {
  await Book.deleteMany({});
  await Author.deleteMany({});

  const warAndPeace = await Book.create({title: 'War And Peace'});
  const annaKarenina = await Book.create({title: 'Anna Karenina'});
  const hadjiMurad = await Book.create({title: 'Hadji Murad'});

  const leo = await Author.create({
    name: 'Leo Tolstoy',
    books: [warAndPeace, annaKarenina, hadjiMurad]
  });

  // const book = await Book.find({ title: 'War And Peace' }).populate('author');
  // console.log(book);

  const author = await Author.findOne({name: "Leo Tolstoy"}).populate('books');
  console.log(author);

})().catch(console.error).then(() => mongoose.disconnect());