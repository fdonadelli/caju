export default class AccountBenefits {
    idAccount: string;
    idBenefitType: string;
    amount: number;

    constructor (idAccount: string, idBenefitType: string, amount: number) {
        this.idAccount = idAccount;
        this.idBenefitType = idBenefitType;
        this.amount = amount;
    }

    debit(value: number): number {
        return this.amount = this.amount - value
    }

}