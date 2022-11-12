import { send } from "https://deno.land/x/oak@v11.1.0/send.ts";
import { Context } from "../deps.ts";

export const renderFront = async (ctx: Context) => {
    await send(ctx, ctx.request.url.pathname, {
        root: `${Deno.cwd()}/static`,
        index: 'index.html'
    });
}