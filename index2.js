var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
 
   if (err) throw err;
 
   console.log('Successfully connected');
 
});

var authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
            firstName: String,
        lastName: String
    },
    biography: String,
    twitter: String,
    facebook: String,
    linkedin: String,
    profilePicture: Buffer,
    created: { 
        type: Date,
        default: Date.now
    }
});

var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    summary: String,
    isbn: String,
    thumbnail: Buffer,
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author'
    },
    ratings: [
        {
            summary: String,
            detail: String,
            numberOfStars: Number,
            created: { 
                type: Date,
                default: Date.now
            }
        }
    ],
    created: { 
        type: Date,
        default: Date.now
    }
});

var Author = mongoose.model('Author', authorSchema);
var Book = mongoose.model('Book', bookSchema);


// //insert author & books
// var jamieAuthor = new Author ({
    // _id: new mongoose.Types.ObjectId(),
    // name: {
        // firstName: 'Jamie',
        // lastName: 'Munro'
    // },
    // biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
    // twitter: 'https://twitter.com/endyourif',
    // facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
// });
 
// jamieAuthor.save(function(err) {
    // if (err) throw err;
     
    // console.log('Author successfully saved.');
     
    // var mvcBook = new Book ({
            // _id: new mongoose.Types.ObjectId(),
            // title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
            // author: jamieAuthor._id,
            // ratings:[{
                // summary: 'Great read'
            // }]
    // });
     
    // mvcBook.save(function(err) {
        // if (err) throw err;
     
        // console.log('Book successfully saved.');
    // });
     
    // var knockoutBook = new Book ({
            // _id: new mongoose.Types.ObjectId(),
            // title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
            // author: jamieAuthor._id
    // });
     
    // knockoutBook.save(function(err) {
        // if (err) throw err;
     
        // console.log('Book successfully saved.');
    // });
// });

// //validasi data

// var authorSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // name: {
        // firstName: {
            // type: String,
            // required: true
        // },
        // lastName: String
    // },
    // biography: String,
    // twitter: {
        // type: String,
        // validate: {
            // validator: function(text) {
                // return text.indexOf('https://twitter.com/') === 0;
            // },
            // message: 'Twitter handle must start with https://twitter.com/'
        // }
    // },
    // facebook: {
        // type: String,
        // validate: {
            // validator: function(text) {
                // return text.indexOf('https://www.facebook.com/') === 0;
            // },
            // message: 'Facebook must start with https://www.facebook.com/'
        // }
    // },
    // linkedin: {
        // type: String,
        // validate: {
            // validator: function(text) {
                // return text.indexOf('https://www.linkedin.com/') === 0;
            // },
            // message: 'LinkedIn must start with https://www.linkedin.com/'
        // }
    // },
    // profilePicture: Buffer,
    // created: { 
        // type: Date,
        // default: Date.now
    // }
// });


/* Book.find({
    title: /mvc/i
}).exec(function(err, books) {
    if (err) throw err;
     
    console.log(books);
}); */

/* Author.findById('5bf2271fd2a58a17347c75b4', function(err, author) {
    if (err) throw err;
     
    console.log(author);
});
 */

/* Author.findById('5bf2271fd2a58a17347c75b4', function(err, author) {
    if (err) throw err;
     
    author.linkedin = 'https://www.linkedin.com/in/jamie-munro-8064ba1a/';
     
    author.save(function(err) {
        if (err) throw err;
         
        console.log('Author updated successfully');
    });
}); */

Author.findByIdAndUpdate('5bf2271fd2a58a17347c75b4', 
    { linkedin: 'https://www.linkedin.com/in/bosegading/' }, 
    function(err, author) {
        if (err) throw err;
     
        console.log(author);
});