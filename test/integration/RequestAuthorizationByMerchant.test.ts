import RequestAuthorizationByMerchant from "../../src/application/usecase/chain/RequestAuthorizationByMerchant";
import RequestAuthorizationInput from "../../src/application/usecase/RequestAuthorizationInput";
import Account from "../../src/domain/entity/Account";
import AccountBenefitsRepositoryMemory from "../../src/infra/repository/memory/AccountBenefitsRepositoryMemory";
import BenefitsRepositoryMemory from "../../src/infra/repository/memory/BenefitsRepositoryMemory";

test("should request authorization", async function () {
    const benefitsRepository = new BenefitsRepositoryMemory();
    const accountBenefitsRepository = new AccountBenefitsRepositoryMemory(); 
    const input: RequestAuthorizationInput = {
        account: new Account("1", "Fabio Donadelli"),
        totalAmount: 100,
        mcc: "8115",
        merchant: "RESTAURANTE DO ZE               SAO PAULO BR"
    }
    const authorization = new RequestAuthorizationByMerchant(benefitsRepository, accountBenefitsRepository);
    const output = await authorization.handle(input);
    expect(output).toEqual({"code": "00"});
})