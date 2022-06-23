import express from "express";
import "./db/mongoose.js";
import indexRouter from "./routers/indexRoute.js";
import userRoute from "./routers/usersRoute.js";
import taskRoute from "./routers/tasksRoute.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// opening route just for looking
app.use(indexRouter);
app.use(userRoute);
app.use(taskRoute);

app.listen(port, () => {
  console.log(`the server up in port ${port} `);
});
