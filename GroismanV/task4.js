db.posts.aggregate([

    { $match: { is_blocked: { $ne: true } } },
    { $sample: { size: 3 } },
    { $project: { _id: 0, author_id: 1 } }
]);