import {Component, OnInit} from '@angular/core';
import {ConvertService} from "./convert.service";

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
  convertElement: any;
  data: string = '';

  constructor(private convertService: ConvertService) {

  }

  ngOnInit(): void {
    this.convertService.getConvertList()
      .subscribe(res => {
        this.convertElement = res;
      });
  }

  onSubmit(formConvert: any) {
    const from = formConvert.value.convertType;
    const to = formConvert.value.convertType2;
    const suffixes = `/${from}/${to}`;

    this.convert(suffixes, this.data);
  }

  private convert(suffixes: string, data: string) {
    this.convertService.convert(
      {data: data}, suffixes
    ).subscribe((res: any) => {
        this.result = res.result;
      }
    )
  }
}
