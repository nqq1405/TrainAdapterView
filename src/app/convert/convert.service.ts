import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private httpClient: HttpClient) {
  }

  testCallApi(value: any) {
    return this.httpClient.post(environment.apiUrl + "/convert/hex", value,
      {

      }
    );
  }
}
