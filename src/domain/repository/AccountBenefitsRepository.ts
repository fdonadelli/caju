import Account from "../entity/Account";
import AccountBenefits from "../entity/AccountBenefits";

export default interface AccountBenefitsRepository {
    findAccountBenefits(account: Account, idBenefit: string ) : Promise<AccountBenefits | undefined>;
    save(accountBenefit : AccountBenefits) : Promise<AccountBenefits | undefined>;
}