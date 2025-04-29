const wixCMSService = require("../services/wixCMSService");

exports.addOrUpdateInventory = async (req, res) => {
  try {
    const {
      Listing_Id,
      Project_Name,
      Wing_Name,
      Society_Sector_Name,
      Configuration,
      Monthly_Rent,
      If_Security_Deposit_is_lumpsum
    } = req.body;

    const inventoryData = {
      listing_id: Listing_Id,
      project_name: Project_Name,
      wing_name: Wing_Name,
      society_name: Society_Sector_Name,
      configuration: Configuration,
      monthly_rent: Monthly_Rent,
      security_deposit: If_Security_Deposit_is_lumpsum
    };

    await wixCMSService.upsertInventory(inventoryData);
    res.status(200).json({ message: "Inventory added or updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
