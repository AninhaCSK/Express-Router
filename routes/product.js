import express from "express";

let router = express.Router();

//http://localhost:5000/product/toys

router
  .route("/toys")
  .get((req, res) => {
    res.send("This is GET request and url is /product/toys");
  })
  .post((req, res) => {
    res.send("Post request. Url /product/toys ...");
  });

router
  .route("/toys/:toyid")
  .get((req, res) => {
    res.send(`Toy id is: ${req.params.toyid}`);
  })
  .put((req, res) => {
    res.send(`Toy with id ${req.params.toyid} updated!`);
  })
  .delete((req,res)=>{
    res.send(`Got a DELETE request at${req.params.toyid}`)
  })

export default router;