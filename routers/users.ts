import { Router } from "../deps.ts";
import { getColors, postColor, updateColor, deleteColor } from "../controllers/users.ts";

export const userRouter = new Router()
    .get('/colors', getColors)
    .post('/:color', postColor)
    .put('/:color/:newcolor', updateColor)
    .delete('/:color', deleteColor)
