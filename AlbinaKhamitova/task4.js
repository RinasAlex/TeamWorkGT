db.users.deleteMany({
    country: { $in: ['China', 'Brazil'] },
    is_blocked:true,
    balance:{$lt:0}
})