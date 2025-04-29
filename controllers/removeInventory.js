const wixCMSService = require("../services/wixCMSService");

exports.removeInventory = async (req, res) => {
  try {
    const { Listing_Id, Rented_Out, Mandate_Lost } = req.body;

    if (Rented_Out || Mandate_Lost) {
      await wixCMSService.deleteInventory(Listing_Id);
      res.status(200).json({ message: "Inventory removed successfully" });
    } else {
      res.status(200).json({ message: "Inventory still active, no action taken" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error removing inventory", error: err.message });
  }
};
