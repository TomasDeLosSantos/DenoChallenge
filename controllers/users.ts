import { Context, helpers } from "../deps.ts";

export const getColors = async (ctx: Context) => {
    try{
        const text = await Deno.readTextFile("text.txt");
        const data = JSON.parse(text);
        ctx.response.body = data;
    } catch (err){
        ctx.response.status = 500;
        ctx.response.body = { error: err.message };
    }
}

export const postColor = async (ctx: Context) => {
    const { color } = helpers.getQuery(ctx, { mergeParams: true });
    try{
        const colorArray = JSON.parse(await Deno.readTextFile('text.txt'));
        colorArray.push(color);
        await Deno.writeTextFile("text.txt", JSON.stringify(colorArray));
        ctx.response.body = 'done';
    } catch (err){
        ctx.response.status = 500;
        ctx.response.body = { error: err.message };
    }
}

export const updateColor = async (ctx: Context) =>{
    const { color, newcolor } = helpers.getQuery(ctx, { mergeParams: true });
    try{
        const colorArray = JSON.parse(await Deno.readTextFile('text.txt'));
        for(let i = 0; i < colorArray.length; i++){           
            if(colorArray[i] == `${color}`) colorArray[i] = `${newcolor}`;
        }
        await Deno.writeTextFile("text.txt", JSON.stringify(colorArray));

    } catch (err){
        ctx.response.status = 500;
        ctx.response.body = { error: err.message };
    }
}

export const deleteColor = async (ctx: Context) =>{
    const { color } = helpers.getQuery(ctx, { mergeParams: true });
    try{
        let colorArray = JSON.parse(await Deno.readTextFile('text.txt'));
        colorArray = colorArray.filter((c: string) => c != color);
        await Deno.writeTextFile("text.txt", JSON.stringify(colorArray));
    } catch (err){
        ctx.response.status = 500;
        ctx.response.body = { error: err.message };
    }
}