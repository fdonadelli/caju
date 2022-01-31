import axios from "axios"
import Account from '../../src/domain/entity/Account'
import Authorizer from '../../src/domain/entity/Authorizer'

test("should be test API", async function () {
    const account = new Account("1", "Fabio Donadelli");
    const authorizer = new Authorizer(account, 110.00, "5811", "PADARIA DO ZE            SAO PAULO");
    const response = await axios({
        url: "http://localhost:3000/authorization",
        method: "GET",
        data: {
            "account": authorizer.account.id,
            "amount": authorizer.totalAmount,
            "mcc": authorizer.mcc,
            "merchant": authorizer.merchant
        }
    })

    
})