db.users.deleteMany(
 
    { is_blocked: true },
    { balance: { $lt: 0 } },
    { country: { $in: ["China", "Brazil"] } }
  
)