export class Company {
    // tslint:disable-next-line: variable-name
    public _id?: string; // not to show in table --> uncomment this after connecting to database
    public name: string; // companyName
    public history?: [];
    public email: string;
    public phone: string;
    public numberOfEmployees: number;
    public address: {
        country: string,
        city: string,
        street: string
    };

}
