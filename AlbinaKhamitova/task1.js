db.users.aggregate([
    {$match:{country:{$in:['Germany','France']}}},
    
       { $group: {
                _id: '$country',
                total: { $count: {} }}},
    ])