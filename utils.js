import { cache } from "./app.js";

export const verifyCache = (req, res, next) => {
    const { id } = req.params;
    if (cache.has(id)) { 
        console.log('cached response');
        return res.status(200).json(cache.get(id));
    }
    console.log('not cached response');
    return next();
};
