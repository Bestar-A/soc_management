import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.post("/data", (req, res) => {
	const receivedData = req.body;
	res.json({
		message: "Data received!",
		data: receivedData,
	});
});

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
