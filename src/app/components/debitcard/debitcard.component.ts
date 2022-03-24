import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.component.html',
  styleUrls: ['./debitcard.component.css']
})
export class DebitcardComponent implements OnInit {

  @Input() formDetails: any;

  constructor() { }

  ngOnInit(): void {
    console.log('finding', this.formDetails)
  }

}
