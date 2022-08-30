import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ConvertService {

  constructor(private httpClient: HttpClient) {
  }

  stringToBase64(value: any,header: any) {
    return this.httpClient.post(environment.apiUrl+"/convert/base64", value, header);
  }

  base64ToString(value: any,header: any) {
    return this.httpClient.post(environment.apiUrl + "/convert/base64/string", value, header);
  }

  stringToHex(value: any, header: any) {
    return this.httpClient.post(environment.apiUrl + "/convert/hex", value, header);
  }

  hexToString(value: any,header: any) {
    return this.httpClient.post(environment.apiUrl + "/convert/hex/string", value, header);
  }

}
