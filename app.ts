import { Application } from './deps.ts';
import { userRouter } from './routers/users.ts'
import { frontRouter } from './routers/frontend.ts';
const app = new Application();
const port = 8080;


app.use(userRouter.routes());
app.use(frontRouter.routes());


console.log(`Server running on port ${port}`);
await app.listen({ port: 8080 });