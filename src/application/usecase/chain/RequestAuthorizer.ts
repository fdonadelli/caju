import PgPromiseConnectionAdapter from '../../../infra/database/PgPromiseConnectonAdapter'
import AccountBenefitsRepositoryDatabase from '../../../infra/repository/database/AccountBenefitsRepositoryDatabase'
import BenefitsRepositoryDatabase from '../../../infra/repository/database/BenefitsRepositoryDatabase'
import RequestAuthorizationByMcc from './RequestAuthorizationByMcc'
import RequestAuthorizationByMerchant from './RequestAuthorizationByMerchant'

export default class RequestAuthorizer {
    chain1: RequestAuthorizationByMcc
    chain2: RequestAuthorizationByMerchant

    constructor() {
        const connection = new PgPromiseConnectionAdapter()
        const benefitsRepository = new BenefitsRepositoryDatabase(connection);
        const accountBenefitsRepository = new AccountBenefitsRepositoryDatabase(connection);
        this.chain1 = new RequestAuthorizationByMcc(benefitsRepository, accountBenefitsRepository)
        this.chain2 = new RequestAuthorizationByMerchant(benefitsRepository, accountBenefitsRepository)

        this.chain1.nextSuccessor(this.chain2)
    }
}