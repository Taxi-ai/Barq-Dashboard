
export class ComponyHistory {

    // tslint:disable-next-line: variable-name
    public _id?: string;
    public companyId: string;
    public offerId: string;
    public moneyIncome: number;
    public startingDate: Date;
    public endingDate: Date;
    public feedback?: { adminId: string, body: string };

}


export class Company {
    // tslint:disable-next-line: variable-name
    public _id?: string; // not to show in table --> uncomment this after connecting to database
    public name: string; // companyName
    public history?: any;
    public email: string;
    public phone: string;
    public numberOfEmployees: number;
    public address: {
        country: string,
        city: string,
        street: string
    };

}

