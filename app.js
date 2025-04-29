const express = require("express");
const inventoryRoutes = require("./routes/inventoryRoutes");
const validateRequest = require("./utils/validateRequest");

const app = express();
app.use(express.json());
app.use(validateRequest);
app.use("/inventory", inventoryRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
