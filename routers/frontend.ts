import { Router } from "../deps.ts";
import { renderFront } from "../controllers/frontend.ts";

export const frontRouter = new Router()
    .get('/', renderFront)