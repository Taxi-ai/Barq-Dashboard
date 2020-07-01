export class Package {

    // tslint:disable-next-line: variable-name
    public _id?: string;
    public duration: number;
    public description: string;
    public category: 'gold' | 'silver' | 'bronze';
    public price: number;
    public numberOfRides: number;
    public limitedPricePerRide: number;
    public numberOfGiftCodes: number;

}
