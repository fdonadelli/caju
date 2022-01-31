import Account from "../../../domain/entity/Account";
import AccountBenefits from "../../../domain/entity/AccountBenefits";
import AccountBenefitsRepository from "../../../domain/repository/AccountBenefitsRepository";

export default class AccountBenefitsRepositoryMemory implements AccountBenefitsRepository {
    
    benefits: AccountBenefits[];

    constructor () {
        this.benefits = [
            new AccountBenefits("1", "MEAL", 300 ),
            new AccountBenefits("2", "FOOD", 400),
            new AccountBenefits("3", "CULTURE", 100),
        ];
    }
    
    findAccountBenefits(account: Account, idBenefit: string): Promise<AccountBenefits | undefined> {
        return Promise.resolve(this.benefits.find(benefit => benefit.idAccount  === account.id && benefit.idBenefitType === idBenefit));
    }

    save(accountBenefit: AccountBenefits): Promise<AccountBenefits | undefined> {
        const account = this.benefits.find(benefit => benefit.idAccount  === accountBenefit.idAccount && benefit.idBenefitType === accountBenefit.idBenefitType);
        if(account){
            account.amount = accountBenefit.amount;
            return Promise.resolve(account);
        }
        return Promise.resolve(undefined);
    }
    

    
}