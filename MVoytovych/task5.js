db.products.aggregate([
    {
        $match: {
            price: { $gte: 10, $lte: 100 },
            quantity: { $gte: 5 }
        }
    },
    {
        $project: {
            _id: 0,
            title: 1,
            price: 1
        }
    }
])