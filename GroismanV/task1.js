db.users.deleteMany({
    $and: [
        { isBlocked: true },
        { country: { $in: ["China", "Brazil"] } },
        { balance: { $lt: 0 } }
    ]
});