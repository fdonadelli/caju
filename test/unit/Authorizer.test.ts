import Account from "../../src/domain/entity/Account";
import Authorizer from "../../src/domain/entity/Authorizer";

test("Should create a Authorizer instance", function () {
    const account = new Account("1", "Fabio Donadelli");
    const authorizer = new Authorizer(account, 110.00, "5811", "PADARIA DO ZE            SAO PAULO");
    
    expect(authorizer.account).toBe(account);
    expect(authorizer.totalAmount).toBe(110.00);
    expect(authorizer.mcc).toBe("5811");
    expect(authorizer.merchant).toBe("PADARIA DO ZE            SAO PAULO");

});