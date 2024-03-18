use('zoo');

// db.animals.insertMany([
//     {kind: "tiger", weight: 300, name: "Alan", predatory: true},
//     {kind: "penguin", weight: 2, name: "Kovalsky", predatory: true},
//     {kind: "chicken", weight: 1, name: "Cipa", predatory: false},
//     {kind: "shark", weight: 400, name: "Sharp", predatory: false},
//     {kind: "shark", weight: 450, name: "John", predatory: false},
//     {kind: "panda", weight: 200, name: "Po", predatory: false},
//    ]);

// db.animals.updateMany({ kind: "shark"}, { $set : {predatory: true}});

// db.animals.updateMany({}, { $inc : {weight: 3}});

// db.animals.updateMany({}, { $rename : {weight: "kg"}});

// db.animals.updateMany(
//     { predatory: true },
//     { $set: { foods: ["fish", "squid"] } }
//    );

// db.animals.updateOne(
//     {kind: "tiger"},
//     {$push: {foods: "wolf"}}
//    );

//    db.animals.updateOne(
//     {kind: "tiger"},
//     {$pull: {foods: "squid"}}
//    );

//    db.animals.updateOne(
//     {kind: "chicken"},
//     {$unset: {predatory: ""}}
//    );

// SQL
// UPDATE animals
// SET predatory = predatory  -- No change, keeps existing value
// WHERE kind = 'chicken' AND predatory = '';


// const pinguin = db.animal.findOne({ kind: "pinguin"}, { _id: 1 });
// db.animals.updateOne(
//     {_id: ObjectId(pinguin._id)},
//     {$set: {name: "Kovalsky 2"}}
//    );

// db.animals.deleteOne({kind : "shark"});

// db.animals.deleteMany({kind : "shark"});




