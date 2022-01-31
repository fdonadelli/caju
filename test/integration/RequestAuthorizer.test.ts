import Account from '../../src/domain/entity/Account';
import Authorizer from '../../src/domain/entity/Authorizer';

import RequestAuthorizer from '../../src/application/usecase/chain/RequestAuthorizer';

test("should request authorization with correct mcc", async function () {
    
    const authorizer = new RequestAuthorizer();
    
    const input: Authorizer = {
        account: new Account("1", "Fabio Donadelli"),
        totalAmount: 100,
        mcc: "8115",
        merchant: "RESTAURANTE DO ZE               SAO PAULO BR"
    }
    
    const output = await authorizer.chain1.handle(input)
    expect(output).toEqual({ "code": "00" });
})


test("should request authorization withuot correct mcc", async function () {
    const authorizer = new RequestAuthorizer()
    
    const input: Authorizer = {
        account: new Account("1", "Fabio Donadelli"),
        totalAmount: 100,
        mcc: "81115",
        merchant: "RESTAURANTE DO ZE               SAO PAULO BR"
    }
    
    const output = await authorizer.chain1.handle(input)
    expect(output).toEqual({ "code": "00" });
})