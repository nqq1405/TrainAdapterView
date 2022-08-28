import { Component, OnInit } from '@angular/core';
import {ConvertService} from "./convert.service";

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss'],
  providers: [ConvertService]
})
export class ConvertComponent implements OnInit {
  public result = "";

  constructor(private convertService: ConvertService) { }

  ngOnInit(): void {

  }


}
