db.products.updateMany(
    {
        price: { $lt: 1000 },
        quantity: { $gte: 5 }
    },
    {
        $mul: { price: 0.85 }, 
        $inc: { quantity: -1 } 
    }
)