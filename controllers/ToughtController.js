const Tought = require("../models/tought");
const User = require("../models/user");

module.exports = class ToughtController {
  static async showToughts(request, response) {
    return response.render("toughts/home");
  }
};
