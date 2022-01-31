import AuthorizerController from "../controller/AuthorizerController";
import Http from "./Http";

export default class RouteConfig {
    constructor(http: Http) {
        http.on("/authorization", "get", function(body: any) {
            const authorizerController = new AuthorizerController()
            return authorizerController.execute(body)
        })
    }
}