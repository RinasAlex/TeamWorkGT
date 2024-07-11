db.users.countDocuments(
    {country: {$in: ['Germany', 'France']}}
)