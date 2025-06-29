// import express from "express";
// import Feedback from "../models/Feedback.js";

// const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const history = await Feedback.find().sort({ timestamp: -1 }).limit(20);
//     res.json(history);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch history" });
//   }
// });


// export default router;





import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const history = await Feedback.find().sort({ timestamp: -1 }).limit(20);
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
});


router.delete("/clear", async (req,res) =>{
  try {
    await History.deleteMany({});
    res.status(200).json({ message: "Histroy cleared "});
  } catch(err) {
    res.status(500).json({ error: "Failed to clear history"});
  }
  });



export default router;
