db.products.updateMany(
  {
    quantity: { $gte: 5 },
    price: { $lt: 1000 },
  },
  {
    $mul: {
      balance: 0.85,
    },
    $inc: {
      quantity: -1,
    },
  }
);
