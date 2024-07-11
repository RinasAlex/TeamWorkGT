db.users.deleteMany({
  $and: [
    { status: "blocked" },
    { balance: { $lt: 0 } },
    { $or: [{ country: "China" }, { country: "Brazil" }] },
  ],
});
