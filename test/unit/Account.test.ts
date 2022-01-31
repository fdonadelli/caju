import Account from "../../src/domain/entity/Account";

test("Should create Account", function () {
    const account = new Account("123", "Fabio");
    
    expect(account.id).toBe("123");
    expect(account.holderName).toBe("Fabio");

});