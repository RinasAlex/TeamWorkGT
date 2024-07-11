db.products.find(
  {
    price: { $gte: 10, $lte: 100 },
    quantity: { $gte: 5 },
  },
  {
    title: 1,
    price: 1,
    _id: 0,
  }
);

