import { App } from "@tinyhttp/app"
import { logger } from "@tinyhttp/logger"
import { json } from "milliparsec"
import NodeCache from "node-cache"
import { verifyCache } from "./utils.js"
const app = new App()
export const cache = new NodeCache({ stdTTL: 15 })
app.use(logger())

app.use(json())

app.post("/:id", verifyCache, async (req, res) => {
    const { id } = req.params;
    const data = { id, ...req.body };

    await cache.set(id, JSON.stringify(data), {
        expires: 12
    })
    return res.status(201).json(data);
});


app.listen(5000, () => {
    console.log(`server listen on port 5000`)
})

