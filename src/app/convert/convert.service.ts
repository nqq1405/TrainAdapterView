import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ConvertService {

  constructor(private httpClient: HttpClient) {
  }

  convert(value: any, suffixes: any) {
    return this.httpClient.post(environment.apiUrl + "/convert" + suffixes, value);
  }

  getConvertList() {
    return this.httpClient.get(environment.apiUrl + "/convert/list");
  }
}
