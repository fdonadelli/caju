import Authorizer from "../../domain/entity/Authorizer";

export default interface Handler {
    handle(request: Authorizer): void;
}