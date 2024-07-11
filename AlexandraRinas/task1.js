db.users.aggregate([
    {
        $match: { country: { $in: ["Germany", "France"] } }
    },
    {
        $count: 'total'
    }
])