import supertest from "supertest";
import mongoose from "mongoose";
import server from "../src/server/server";
import dotenv from "dotenv";
dotenv.config();

const request = supertest(server);

const { ATLAS_TEST_URL } = process.env;
if (!ATLAS_TEST_URL) throw new Error("No Atlas URL specified");

describe("Testing suite #1", () => {
	beforeAll((done) => {
		mongoose.connect(ATLAS_TEST_URL, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			}).then(() => {
				console.log("Connected to Atlas");
				done()
			})
	});

	it("Test the testing environment", function () {
		expect(true).toBe(true)
	});

	afterAll((done) => {
		mongoose.connection.dropDatabase().then(() => {
			mongoose.connection.close().then(done);
		});
	});
});
