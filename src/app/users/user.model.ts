export class UserX {
    // tslint:disable-next-line: variable-name
    public _id?: string;
    public username: string;
    public email: string;
    public dateOfBirth: Date;
    public address: { country: string, street: string, city: string };
    public image: string;
    public phone: string;
    public password?: string;
    public notifications?: { notificationId: string, _id: string, read: boolean }[];
    public favoriteLocation?: [];
    public usedPackage?: { endingDate: Date, startingDate: Date, packageId: {} };
    public appRate?: { rate: number, suggestions: string };
    public usedOffer?: any;

}
