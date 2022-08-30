import {Component, OnInit} from '@angular/core';
import {ConvertService} from "./convert.service";
import {parse} from "@angular/compiler-cli/linker/babel/src/babel_core";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
  providers: [ConvertService]
})
export class ConvertComponent implements OnInit {
  isBase64: string = '';
  isShow = false;
  isShowImage = false;
  result: string = "";
  resultImageString: string = '';
  imageSrc: string = '';
  imageString: string = '';
  selectedFile!: File;

  constructor(private convertService: ConvertService) {
  }

  ngOnInit(): void {

  }

  // onFileChange($event: Event) {
  //   const fileReader = new FileReader();
  //
  //   // if(event.target.files && event.target.files.length){}
  // }

  onSubmit(formConvert: any) {
    //console.log(formConvert);
    switch (formConvert.value.convertType) {
      case 'stringtobase64':
        this.stringToBase64(formConvert);
        break;
      case 'base64tostring':
        this.base64ToString(formConvert);
        break;
      case 'stringtohex':
        this.stringToHex(formConvert);
        break;
      case 'hextostring':
        this.hexToString(formConvert);
        break;
    }
  }

  stringToBase64(formConvert: any) {
    let headers = new HttpHeaders({
      'str': formConvert.value.inputString
    });
    this.convertService.stringToBase64(
      null, {headers: headers}
    ).subscribe(
      (res: any) => {
        this.result = res.result;
        console.log(`lần đầu call api -> result:  ${this.result}`);
      }
    )
  }

  base64ToString(formConvert: any) {
    let headers = new HttpHeaders({
      'base64String': formConvert.value.inputString
    });
    this.convertService.base64ToString(
      null, {headers: headers}
    ).subscribe(
      (res: any) => {
        this.result = res.result;
        console.log(`sau lần đầu call api -> result:  ${this.result}`);
      }
    )
  }

  hexToString(formConvert: any) {
    let headers = new HttpHeaders({
      'hexString': formConvert.value.inputString
    });
    this.convertService.hexToString(
      null, {headers: headers}
    ).subscribe(
      (res: any) => {
        this.result = res.result;
      }
    )
  }

  stringToHex(formConvert: any) {
    let headers = new HttpHeaders({
      'str': formConvert.value.inputString
    });
    this.convertService.stringToHex(
      null, {headers: headers}
    ).subscribe(
      (res: any) => {
        this.result = res.result;
      }
    )
  }

}
