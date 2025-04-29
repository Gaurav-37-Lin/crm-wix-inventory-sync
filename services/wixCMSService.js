const axios = require("axios");

const WIX_API_URL = "https://www.wixapis.com/cms/v1/collections/Inventory/items";
const WIX_AUTH_TOKEN = process.env.WIX_AUTH_TOKEN;

exports.upsertInventory = async (data) => {
  const config = {
    headers: {
      Authorization: WIX_AUTH_TOKEN,
      "Content-Type": "application/json"
    }
  };

  const payload = {
    data: {
      listing_id: data.listing_id,
      project_name: data.project_name,
      wing_name: data.wing_name,
      society_name: data.society_name,
      configuration: data.configuration,
      monthly_rent: data.monthly_rent,
      security_deposit: data.security_deposit
    },
    options: {
      replaceAllFields: true
    }
  };

  await axios.post(WIX_API_URL, payload, config);
};

exports.deleteInventory = async (listing_id) => {
  const config = {
    headers: {
      Authorization: WIX_AUTH_TOKEN
    }
  };

  await axios.delete(`${WIX_API_URL}/${listing_id}`, config);
};
