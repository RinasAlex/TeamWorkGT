db.posts.aggregate([

    {
        $lookup: {
            from: 'users',
            localField: 'author_id',
            foreignField: '_id',
            as: 'authors'
        }
    },

    {
        $match: { is_blocked: { $ne: true } }
    },
    {
        $sample: { size: 3 }
    },
    {
        $project: {
            _id: 0, fullname: '$authors.fullname'
        }
    }
])
