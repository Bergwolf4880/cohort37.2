use('hw');

// db.drinks.insertMany([
//     {
//       name: 'Мартини',
//       price: 12,
//       alcohol: 15,
//       tags: ['крепкий']
//     },
//     {
//       name: 'Мохито',
//       price: 8,
//       alcohol: 10,
//       tags: ['холодный']
//     },
//     {
//       name: 'Белый Русский',
//       price: 11,
//       alcohol: 18,
//       tags: ['крепкий', 'дессертный']
//     },
//     {
//       name: 'Виски с колой',
//       price: 9,
//       alcohol: 20,
//       tags: ['крепкий']
//     },
//     {
//       name: 'Пина Колада',
//       price: 10,
//       alcohol: 13,
//       tags: ['холодный', 'дессертный']
//     }
//   ])

// db.drinks.drop(); // deletes the collection

// db.drinks.find();

// db.drinks.find().sort({price : -1}).limit(1);

// db.drinks.find().sort({price : 1}).limit(3);

db.drinks.find({}, {name: 1, _id:0}).sort({alcohol : -1}).limit(1);
