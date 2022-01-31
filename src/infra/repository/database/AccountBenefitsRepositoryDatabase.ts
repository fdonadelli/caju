import Account from "../../../domain/entity/Account";
import AccountBenefits from "../../../domain/entity/AccountBenefits";
import AccountBenefitsRepository from "../../../domain/repository/AccountBenefitsRepository";
import Connection from "../../database/Connection";

export default class AccountBenefitsRepositoryDatabase implements AccountBenefitsRepository{
    
    constructor(readonly connection: Connection) {}
    async findAccountBenefits(account: Account, idBenefit: string): Promise<AccountBenefits | undefined> {
        console.log(account)
        console.log(idBenefit)
        const [accountBenefit] = await this.connection.query("select * from accountbenefits where id_account = $1 and id_benefit_type = $2", [account, idBenefit])
        console.log(accountBenefit)
        return accountBenefit;
    }
    async save(accountBenefit: any): Promise<AccountBenefits | undefined> {
        console.log(accountBenefit);
        console.log('save');
        const [result] = await this.connection.query("update accountbenefits  set amount = $1 where id_account = $2 and id_benefit_type = $3", [accountBenefit.amount, accountBenefit.id_account, accountBenefit.id_benefit_type])
        return result
    }
    

}