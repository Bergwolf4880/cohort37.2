use('cars');


// db.cars.insertMany([
//     {
//       _id: 1,
//       brand: "BMW",
//       price: 19000,
//       model: "X5",
//       year: 2015,
//       horsepower: 300,
//       owner_id: 1,
//     },
//     {
//       _id: 2,
//       brand: "Mercedes",
//       price: 18000,
//       model: "E-Class",
//       year: 2015,
//       horsepower: 250,
//       owner_id: 2,
//     },
//     {
//       _id: 3,
//       brand: "Audi",
//       price: 22000,
//       model: "A6",
//       year: 2016,
//       horsepower: 280,
//       owner_id: 2,
//     },
//     {
//       _id: 4,
//       brand: "BMW",
//       price: 23000,
//       model: "3 Series",
//       year: 2017,
//       horsepower: 260,
//       owner_id: 3,
//     },
//     {
//       _id: 5,
//       brand: "Mercedes",
//       price: 24000,
//       model: "C-Class",
//       year: 2018,
//       horsepower: 270,
//       owner_id: 4,
//     },
//     {
//       _id: 6,
//       brand: "Audi",
//       price: 21000,
//       model: "A4",
//       year: 2019,
//       horsepower: 290,
//       owner_id: 5,
//     },
//     {
//       _id: 7,
//       brand: "BMW",
//       price: 26000,
//       model: "5 Series",
//       year: 2020,
//       horsepower: 310,
//       owner_id: 6,
//     },
//     {
//       _id: 8,
//       brand: "Mercedes",
//       price: 27000,
//       model: "S-Class",
//       year: 2021,
//       horsepower: 320,
//       owner_id: 7,
//     },
//     {
//       _id: 9,
//       brand: "Audi",
//       price: 28000,
//       model: "A8",
//       year: 2022,
//       horsepower: 330,
//       owner_id: 7,
//     },
//     {
//       _id: 10,
//       brand: "BMW",
//       price: 29000,
//       model: "7 Series",
//       year: 2023,
//       horsepower: 340,
//       owner_id: 6,
//     }
//   ]);

//   db.owners.insertMany([
//     {
//         owner_id: 1,
//         name: "Ivanov Ivan",
//         phone: "1234567"
//     },
//     {
//         owner_id: 2 ,
//         name: "Petrov Petr",
//         phone: "9876543"
//     },
//     {
//         owner_id: 3,
//         name: "Sidorov Sidor",
//         phone: "5678912"
//     },
//     {
//         owner_id: 4,
//         name: "Kuznetsov Alex",
//         phone: "2345678"
//     },
//     {
//         owner_id: 5,
//         name: "Smirnov Maria",
//         phone: "8765432"
//     },
//     {
//         owner_id: 6,
//         name: "Volkov Elena",
//         phone: "3456789"
//     },
//     {
//         owner_id: 7 ,
//         name: "Fedorov Dmitry",
//         phone: "7654321"
//     }
// ]);



// // Выведите среднюю цену по брендам (задание на использование group).
// db.cars.aggregate([
//     { $group: {
//             _id: "$brand", 
//             averagePrice: { $avg: "$price" } } }
// ]);

// // Выведите среднюю цену по годам.
// db.cars.aggregate([
//     { $group: {
//             _id: "$year",
//             averagePrice: { $avg: "$price" } } }
// ]);

// // Выведите максимальную мощность по брендам.
// db.cars.aggregate([
//     { $group: {
//             _id: "$brand",
//             maxHP: { $max: "$horsepower" } } }
// ]);

// // Выведите 3 самых дешевые машины.
// db.cars.aggregate([
//     { $sort: { price: 1 } },
//     {$limit: 3}
// ]);

// // Выведите 3 самых дорогие машины определенного бренда.
// db.cars.aggregate([
//     { $match: { brand: "BMW" } },
//     { $sort: { price: -1 } },
//     { $limit: 3 }
// ]);

// // Выведите случайный автомобиль марки бмв (или другой на ваше усмотрение
// db.cars.aggregate([
//     { $match: { brand: "BMW" } },
//     { $sample: { size: 1 } }
// ]);

// // Выведите владельцев вместе с их автомобилями
// db.owners.aggregate([
//     { $lookup: {
//             from: "cars",
//             localField: "owner_id",
//             foreignField: "owner_id",
//             as: "cars"
//         }
//     }
// ]);

// Выведите тех кто владеет автомобилями дороже 20000

// db.owners.aggregate([
//     {
//         $lookup: {
//             from: "cars",
//             localField: "owner_id",
//             foreignField: "owner_id",
//             as: "cars"
//         }
//     },
//     {
//         $match: { 
//             "cars.price" : {$gt: 25000 }
//         }
//     }

// ]);

// Выведите среднюю цену машин у каждого владельца если эта цена больше 20000
// db.owners.aggregate([
//     {
//         $lookup: {
//             from: "cars",
//             localField: "owner_id",
//             foreignField: "owner_id",
//             as: "cars"
//         }
//     },
//     {
//         $unwind: "$cars"  // используется для раскрытия массива
//     },
//     {
//         $match: {
//             "cars.price": { $gt: 25000 }
//         }
//     },
//     {
//         $group: {
//             _id: "$owner_id",
//             averagePrice: { $avg: "$cars.price" }
//         }
//     }

// ]);

// Это синтаксис если добавлять владельцам _id машин.

// db.cars.aggregate([
//     {
//         $lookup: {
//             from: "owners",
//             localField: "_id",
//             foreignField: "cars",
//             as: "owner"
//         },
//     },
//     {
//         $group: {
//             _id: "$owner.owner",
//             averagePrice: {
//                 $avg: "$price",
//             },
//         },
//     },
//     {
//         $match: {
//             averagePrice: { $gt: 25000 },
//         },
//     },
// ]);





