export class User {
    public userID: number; // not to show in table
    // tslint:disable-next-line: max-line-length
    public state: 'none' | 'active' | 'panned'; // new property for userState true (in ride)/false (not in ride) and pannedState -> true/false
    public username: string; // will get it as first and last name and show as one name
    public email: string; // will show
    public password: string; // will not get
    public country: string; // will show
    public city: string; // will show
    public dateOfBirth: string; // will not get
    public age: number; // will get age
    public wallet: number; // will get and show
    public address: string; // will not get
    public phone: string; // will get
    public creditCard: 'Visa' | 'Master Card'; // will not get
    public cvv: number; // will not get
    public creditCardNumber: string; // will not get
    public expirationDate: string; // will not get
    // tslint:disable-next-line: max-line-length
    public usedOffer: { offerCount: number, offers: string[] }; // will get just number of offers to table // will get and see all user offers in user page show offers
    public registered: { year: number, month: number, day: number }; // get as date() and show
    // will get also numberOfRides - numberOfIssue

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

export class UserْX {
    public userID?: number; // not to show in table --> uncomment this after connecting to database
    public userState: boolean; // true (in ride)/false (not in ride)
    public pannedState: boolean; // true (user is panned)/false (user isn't panned)
    public firstName: string; // will get it as first and last name and show as one name
    public lastName: string; // will get it as first and last name and show as one name
    public email: string; // will show
    public country: string; // will show
    public city: string; // will show
    public age: number; // will get age
    public wallet: number; // will get and show
    public phone: number; // will get
    public numberOfOffers: number; // will get just number of offers to table // will get and see all user offers in user page show offers
    public registered: Date; // get as date() and show
    public numberOfRides: number;
    public numberOfIssue: number;
}
