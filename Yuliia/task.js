db.users.aggregate([
  { $match: { country: { $in: ["Germany", "France"] } } },
  { $group: { _id: null, total: { $sum: 1 } } },
  { $project: { _id: 0, total: 1 } },
]);
