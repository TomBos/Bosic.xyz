// Import .env variables
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// SSL
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));

// CORS
app.use(cors());

// Parse JSON
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));


// Home route
app.get("*", (req, res) => {
	if (req.protocol == 'http') {
            res.send('terminal');
	} else {
	    res.sendFile(path.join(__dirname, "dist", "index.html"));
	}
});

app.listen(PORT, HOST, () => {
		console.log(`Server is running on http://${HOST}:${PORT}`);
});



