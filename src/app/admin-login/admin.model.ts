export class Admin {

    // TODO remove all '?' symbols when yousef send you admin data or admin ID


    constructor(
        // tslint:disable-next-line: variable-name
        private _jwtToken: string,
        // public email: string,
        // public id: string,
        // public image: string,
        // public username: string,
        // public phone: string


    ) { }



    public get jwtToken() {
        if (this._jwtToken) {
            return this._jwtToken;
        } else {
            return null;
        }
    }


    // public set token(value: string) {
    //     this._token = value;
    // }

}
