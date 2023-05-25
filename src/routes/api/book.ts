import express from "express";
import Books from "../../schema/book";
const router = express.Router();


router.get("/show", (req, res) => {
  Books.find({})
    .then((books) => res.json(books))
    .catch((err) => {
      res.status(404).json({ error: "No Book can be found with that name" });
      console.error(err);
    });
});

router.get("/show/:id", (req, res) => {
  Books.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => {
      res.status(500).json({ error: "Internal server error" });
      console.error(err);
    });
});


router.post("/newbook", (req, res) => {
  Books.create(req.body)
    .then(() => res.json({ message: "Book successfully added" }))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.put("/edit/:id", (req, res) => {
  Books.findByIdAndUpdate(req.params.id, req.body)
    .then((book) =>
      res.status(200).json({ message: "Book successfully updated" })
    )
    .catch((err) => res.status(500).json({ error: "Internal server error" }));
});

router.delete("/delete/:id", (req, res) => {
  Books.findByIdAndDelete(req.params.id)
    .then((book) =>
      res.status(200).json({ message: "Book successfully deleted" })
    )
    .catch((err) => res.status(500).json({ error: "Internal server error" }));
});
export default router;
