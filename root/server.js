// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const propertyRoutes = require("./routes/propertyRoutes");
// const visitorRoutes = require("./routes/visitorRoutes")

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// connectDB();

// app.use("/api/properties", propertyRoutes);
// app.use("/api/visitors", visitorRoutes);

// app.get("/", (req, res) => res.send("🏠 Property API is running..."));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const propertyRoutes = require("./routes/propertyRoutes");
const visitorRoutes = require("./routes/visitorRoutes");

dotenv.config();
const app = express();

// ✅ CORS Setup — Add your frontend URLs here
app.use(
  cors({
    origin: [
      "http://localhost:8080", // Local frontend (Vite)
      "https://realestate-company.onrender.com", // Render-deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies/auth headers if needed
  })
);

// ✅ Parse JSON
app.use(express.json());

// ✅ Connect Database
connectDB();

// ✅ Routes
app.use("/api/properties", propertyRoutes);
app.use("/api/visitors", visitorRoutes);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("🏠 Property API is running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


