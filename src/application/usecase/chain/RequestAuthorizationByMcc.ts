import Authorizer from "../../../domain/entity/Authorizer";
import AccountBenefitsRepository from "../../../domain/repository/AccountBenefitsRepository";
import BenefitsRepository from "../../../domain/repository/BenefitsRepository";
import RequestAuthorization from "./RequestAuthorization";
import RequestAuthorizationOutput from "../RequestAuthorizationOutput";

export default class RequestAuthorizationByMcc implements RequestAuthorization {
    #successor: RequestAuthorization | undefined

    constructor (readonly benefitsRepository: BenefitsRepository, readonly accountBenefitsRepository: AccountBenefitsRepository) {

    }

    nextSuccessor(successor: RequestAuthorization): void {
        this.#successor = successor
    }
    
    async handle(input: Authorizer): Promise<RequestAuthorizationOutput | void> {
        const benefit = await this.benefitsRepository.findBenefitByMcc(input.mcc);
        
        if(benefit) {
            const accountBenefit = await this.accountBenefitsRepository.findAccountBenefits(input.account, benefit.idType);
            if(!accountBenefit) return new RequestAuthorizationOutput("07");
            if(accountBenefit.amount < input.totalAmount) return new RequestAuthorizationOutput("51");
            accountBenefit.amount = accountBenefit.amount - input.totalAmount;
            this.accountBenefitsRepository.save(accountBenefit);
            return new RequestAuthorizationOutput("00");
        } else {
            ;(this.#successor as RequestAuthorization).handle(input)
        }
    }
}