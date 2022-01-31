import Benefits from "../entity/Benefits";

export default interface BenefitsRepository {
    findBenefitByMcc(mcc: string) : Promise<Benefits | undefined>;
    findBenefitByMerchant(merchant: string) : Promise<Benefits | undefined>;
}