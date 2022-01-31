import Account from "../../src/domain/entity/Account";
import AccountBenefits from "../../src/domain/entity/AccountBenefits";
import Benefits from "../../src/domain/entity/Benefits";

test("Should return total amount of benefit", function () {
    const account = new Account("1", "Fabio");
    const benefits = new Benefits("1", "MEAL", "8155", "Restaurants");
    const accountBenefits = new AccountBenefits("1", "MEAL", 200);
    const totalAmount = accountBenefits.debit(100);
    expect(totalAmount).toBe(100);
})