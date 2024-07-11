db.products.find(
    {
        price: { $gte: 10, $lte: 100 },
        stock: { $gte: 5 }
    },
    {
        name: 1,
        price: 1,
        _id: 0
    }
)
