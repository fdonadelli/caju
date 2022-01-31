import Authorizer from "../../../domain/entity/Authorizer";

export default interface RequestAuthorization {
    nextSuccessor(successor: RequestAuthorization): void
    handle(input: Authorizer): void
}