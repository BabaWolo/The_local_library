// const express = require("express");
// const router = express.Router();
// const Book = require("../models/book"),
//     Author = require("../models/author"),
//     Genre = require("../models/genre");

// // get route for serach
// router.get("/:key", async (req, res) => {
//     const regex = new RegExp(req.params.key, "i");
//     let data = await Promise.all([
//       Book.find({$or: [{title: regex}, {summary: regex}]}),
//       Author.find(
//         {$or: [
//           {first_name: regex},
//           {family_name: regex}]},
//       ),
//       Genre.find({name: regex}),
//     ]);
//     res.send(data);
//   });

// module.exports = router