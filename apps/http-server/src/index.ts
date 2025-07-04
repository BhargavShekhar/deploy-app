import { client } from "@repo/db/client";
import express from "express"

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({ msg: "Server is Working" });
})

app.get("/signup", async (req, res) => {
    const { username, password } = req.body;

    try {
        const createdUser = await client.user.create({
            data: {
                username,
                password
            }
        })

        res.json({ msg: "Create user successfully", userId: createdUser.id })
    } catch (error) {
        console.log("Cound not create User", error);
        res.json({ msg: "Cound not create user" });
    }
})

app.listen(PORT, () => {
    console.log(`---- Server is running on port ${PORT} ----`)
})