
export class Admin {

  // we used ? as firstly admin may be creates as jwt and we decode all of its data
  constructor(
    // tslint:disable-next-line: variable-name
    private _jwtToken: string,
    public adminId?: string,
    public adminName?: string,
    public adminEmail?: string,
    // public image: string,
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
