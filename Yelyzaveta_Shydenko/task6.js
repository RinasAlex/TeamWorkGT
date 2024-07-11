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
      author_name: "$author.fullname",
      _id: 0,
    },
  },
]);
