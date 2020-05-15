export class Company {
    public id?: number; // not to show in table --> uncomment this after connecting to database
    public name: string; // companyName
    public email: string;
    public phone: string;
    public address: {
        country: string,
        city: string,
        street: string
    };

}
