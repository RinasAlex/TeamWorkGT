db.users.aggregate([
    {
        $lookup: {
            from: 'posts',
            localField: '_id',
            foreignField: 'author_id',
            as: 'post'
        }
    }, { $unwind: '$post' },
    {
        $group: {
            _id: '$post',
            total: { $count: {} }
        }
    },
    { $limit: 1 }
])
