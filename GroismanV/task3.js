db.products.updateMany(
    {
        price: { $lt: 1000 },
        quantity: { $gte: 5 }

    },
    {
        $inc: { quantity: -1 },
        $mul: { price: .85 }
    }
)