import Benefits from "../../../domain/entity/Benefits";
import BenefitsRepository from "../../../domain/repository/BenefitsRepository";

export default class BenefitsRepositoryMemory implements BenefitsRepository {
    
    benefits: Benefits[];

    constructor () {
        this.benefits = [
            new Benefits("1", "MEAL", "8115", "Restaurante, Bar"),
            new Benefits("2", "FOOD", "8125", "supermarkets"),
            new Benefits("3", "CULTURE", "8135", "books, streaming"),
        ];
    }
    
    findBenefitByMcc(mcc: string): Promise<Benefits | undefined> {
        return Promise.resolve(this.benefits.find(benefit => benefit.mcc  === mcc));
    }

    findBenefitByMerchant(merchant: string): Promise<Benefits | undefined> {
        return Promise.resolve(this.benefits.find(benefit => benefit.description.indexOf(merchant)));
    }
    
}