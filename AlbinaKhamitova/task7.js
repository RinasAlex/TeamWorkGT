db.posts.aggregate([
  
    {
        $lookup: {
            from: 'users',
            localField: 'author_id',
            foreignField: '_id',
            as: 'post_author'
        }
    },
      { $match: {is_blocked:{$ne: true}} },
    { $sample: { size: 3 } },
    { $project: { 
        fullname: '$post_author.fullname',
         _id: 0 } }
])