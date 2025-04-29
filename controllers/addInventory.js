const wixCMSService = require("../services/wixCMSService");

exports.addOrUpdateInventory = async (req, res) => {
  try {
    const {
      Listing_Id,
      Project_Name,
      Configuration,
      Monthly_Rent,
      If_Security_Deposit_is_lumpsum
    } = req.body;

    const inventoryData = {
      listingId: Listing_Id,
      projectName: Project_Name,
      apartmentConfiguration: Configuration,
      monthlyRent: Monthly_Rent,
      securityDeposit: If_Security_Deposit_is_lumpsum
    };

    await wixCMSService.upsertInventory(inventoryData);
    res.status(200).json({ message: "Inventory added/updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating inventory", error: err.message });
  }
};
