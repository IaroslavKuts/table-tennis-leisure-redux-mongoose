const controllers = require("../controllers");
const csrf = require("csurf");
const csrfDefence = csrf({ cookie: { httpOnly: true } });

//End-points for functions declared in personController.js
const personRoutes = (router) => {
  router.post(
    process.env.REACT_APP_UPDATE_PERSON,
    csrfDefence,
    controllers.updatePerson
  );
};

module.exports = personRoutes;
