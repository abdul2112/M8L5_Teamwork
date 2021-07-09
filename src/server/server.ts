import express from "express";
import accommodationsRoute from "../services/accommodation/index";
import {createServer} from "http";

const app = express();
app.use(express.json());
app.use("/acc", accommodationsRoute);


const server = createServer(app);

export {app};
export default server;
