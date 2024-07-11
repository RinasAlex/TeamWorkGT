db.posts.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "author_id",
      foreignField: "_id",
      as: "author",
    },
  },
  { $unwind: "$author" },
  {
    $match: {
      "author.is_blocked": { $ne: true },
    },
  },
  {
    $sample: { size: 3 },
  },
  {
    $project: {
    _id: 0,
      author_name: "$author.fullname"

    },
  },
])
