db.products.find(
    {
        price: { $gte: 10, $lte: 100 },
        quantity: { $gte: 5 }
    },

    {
        $project: {
            title: 1,
            balance: 1,
            _id: 0
        }
    })