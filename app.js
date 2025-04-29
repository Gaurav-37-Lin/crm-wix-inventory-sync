const express = require("express");
const inventoryRoutes = require("./routes/inventoryRoutes");
const validateRequest = require("./utils/validateRequest");

const app = express();
app.use(express.json());

// Middleware for API key validation
app.use(validateRequest);

// Routes
app.use("/inventory", inventoryRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
