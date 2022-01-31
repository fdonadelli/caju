import Account from "./Account";

export default class Authorizer {
    account: Account;
    totalAmount: number;
    mcc: string;
    merchant: string;

   constructor (account: Account, totalAmount: number, mcc: string, merchant: string) {
       this.account = account;
       this.totalAmount = totalAmount;
       this.mcc = mcc;
       this.merchant = merchant;
   }


}
