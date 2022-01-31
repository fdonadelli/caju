import Benefits from "../../../domain/entity/Benefits";
import BenefitsRepository from "../../../domain/repository/BenefitsRepository";
import Connection from "../../database/Connection";

export default class BenefitsRepositoryDatabase implements BenefitsRepository{
    
    constructor(readonly connection: Connection) {}
    
    async findBenefitByMcc(mcc: string): Promise<Benefits | undefined> {
        const [benefit] = await this.connection.query("select * from benefits where mcc = $1", [mcc]);
        return benefit;
    }
    async findBenefitByMerchant(merchant: string): Promise<Benefits | undefined> {
        
        const [benefit] = await this.connection.query("select * from benefits where description like '%$1:value%'", [merchant]);
        console.log(benefit);
        return benefit;
    }

}