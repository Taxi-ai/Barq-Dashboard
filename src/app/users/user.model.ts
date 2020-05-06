export class User {
    public userID: number;
    public state: 'none' | 'active' | 'panned';
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
    constructor(userID: number, username: string, state: 'none' | 'active' | 'panned', email: string, country: string, city: string, dateOfBirth: string, age: number, wallet: number, address: string, phone: string, creditCard: 'Visa' | 'Master Card', cvv: number, expirationDate: string, usedOffer: { offerCount: number, offers: string[] }, registered: { year: number, month: number, day: number }) {

        this.userID = userID;
        this.username = username;
        this.state = state;
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
