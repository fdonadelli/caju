export default class Benefits {
    id: string;
    idType: string;
    mcc: string;
    description: string;
    
    constructor (id: string, idType:string ,mcc: string, description: string) {
        this.id = id;
        this.idType = idType;
        this.mcc = mcc;
        this.description = description;
    }
}