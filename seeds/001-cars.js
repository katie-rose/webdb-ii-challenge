exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { make: "McLaren", model: "GT", VIN: "8375874", MPG: 10 }
      ]);
    });
};
