db.products.find({
  price: { $gte: 10, $lte: 100 },
  quantity: { $gte: 5 },
});

