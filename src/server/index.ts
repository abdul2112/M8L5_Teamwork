import mongoose from "mongoose";
import server, {app} from "./server";
import dotenv from "dotenv";

dotenv.config();
const {ATLAS_URL, PORT} = process.env;

mongoose.connect(ATLAS_URL!, {useNewUrlParser: true}).then(() => {
	console.log("Connected to mongo");
	app.listen(PORT, () => {
		console.table({"Server listening on port ": PORT});
	});
});
