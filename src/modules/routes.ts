import jsonwebtokenSecurity from "./middleware";
import { Express } from "express";
import UserController from "./controller/UserController";
class Routes {
  private routeparent: string;
  constructor(routeparent: string, app: Express) {
    this.routeparent = routeparent;
    this.configureRoutes(app);
  }
  private configureRoutes(app: Express) {
    //**--USER ROUTES--------------------------------------------------------------------------------------- */
    const userController = new UserController();
    app
      .route(`${this.routeparent}/users`)
      .post(userController.create);
    app
      .route(`${this.routeparent}/users`)
      .get(userController.list);
    app
      .route(`${this.routeparent}/users/login`)
      .post(userController.login);
    app
      .route(`${this.routeparent}/users/:id`)
      .get(userController.get);
    app
      .route(`${this.routeparent}/users/:id`)
      .put(userController.update);
    app
      .route(`${this.routeparent}/users/:id`)
      .delete(userController.remove);
  }
}
export default Routes;
