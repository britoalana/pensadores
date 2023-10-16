const Tought = require("../models/tought");
const User = require("../models/user");

module.exports = class ToughtController {
  static async showToughts(request, response) {
    return response.render("toughts/home");
  }

  static async dashboard(request, response) {
    return response.render("toughts/dashboard");
  }

  static createTought(request, response) {
    return response.render("toughts/create");
  }

  static async createToughtSave(request, response) {
    const tought = {
      titulo: request.body.titulo,
      userId: request.session.userId,
    };

    try {
      await Tought.create(tought);
      request.flash("message", "Pensamento criado com sucesso!");

      request.session.save(() => {
        response.redirect("/toughts/dashboard");
      });
    } catch (error) {
      console.log(`Aconteceu um erro: ${error}`);
    }
  }
};
