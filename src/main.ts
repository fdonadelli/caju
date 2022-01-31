import ExpressAdapter from "./infra/http/ExpressAdapter";
import RouteConfig from "./infra/http/RouteConfig";

const expressAdapter = new ExpressAdapter();
new RouteConfig(expressAdapter);
expressAdapter.listen(3000);

