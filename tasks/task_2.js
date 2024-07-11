db.users.deleteMany([
    {
        is_blocked: true,
        country: { $in: ['China', 'Brasil'] },
        balance: { $lt: 0 }
    }
])