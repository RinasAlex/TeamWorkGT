db.users.countDocuments(
    { country: { $nin: ["Germany", "France"] }}
)