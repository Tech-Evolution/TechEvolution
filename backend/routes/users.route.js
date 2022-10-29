import { Router } from "express";

const router = Router()

router.get("/usertest", (req, res) => {
    res.send("User test is successfully")
})


export default router