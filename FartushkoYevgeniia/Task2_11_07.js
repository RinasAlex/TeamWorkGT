db.users.deleteMany(
    { is_blocked: { $ne: true } },
    { country: { $in: ['China', 'Brazil'] } }
)