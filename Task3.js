db.users.aggregate([
    {
        $lookup: {
            from: 'post_reactions',
            localField: '_id',
            foreignField: 'author_id',
            as: 'reactions'
        }
    },
    { $match: { reactions: { $ne: [] } } },
    { $project: { fullname: 1, _id: 0 } }
])