export class User {
    public ID: number;
    public username: string;
    public email: string;
    public password: string;
    public country: string;
    public city: string;
    public dateOfBirth: string;
    public age: number;
    public wallet: number;
    public address: string;
    public phone: string;
    public creditCard: 'Visa' | 'Master Card';
    public cvv: number;
    public creditCardNumber: string;
    public expirationDate: string;
    public usedOffer: { offerCount: number, offers: string[] };
    public registered: { year: number, month: number, day: number };

    // tslint:disable-next-line: max-line-length
    constructor(username: string, email: string, country: string, city: string, dateOfBirth: string, age: number, wallet: number, address: string, phone: string, creditCard: 'Visa' | 'Master Card', cvv: number, expirationDate: string, usedOffer: { offerCount: number, offers: string[] }, registered: { year: number, month: number, day: number }) {

        this.ID = Math.floor(Math.random() * 10000000);
        this.username = username;
        this.email = email;
        this.country = country;
        this.city = city;
        this.dateOfBirth = dateOfBirth;
        this.age = age;
        this.wallet = wallet;
        this.address = address;
        this.phone = phone;
        this.creditCard = creditCard;
        this.cvv = cvv;
        this.usedOffer = usedOffer;
        this.expirationDate = expirationDate;
        this.registered = registered;

    }

}