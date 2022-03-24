import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cardForm!: FormGroup;

  formDetails: any[] = [];
  numberInput: any;
  cvvInput: any;
  dateInput: any;
  nameInput: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      number: new FormControl(''),
      name: new FormControl(''),
      date: new FormControl(''),
      cvv: new FormControl(''),
    })

    }

    getNumber(): void{
      this.numberInput = this.cardForm.value.number;
      const number = this.numberInput;
    }
    getName():  void{
      this.nameInput = this.cardForm.value.name;
      const name = this.nameInput
    }
    getDate(): void{
      this.dateInput = this.cardForm.value.date;
      const date = this.dateInput
    }
    getCvv(): void{
      this.cvvInput = this.cardForm.value.cvv;
      const cvv = this.cvvInput
    }

    getDetails(): void{
      this.formDetails.push({
        'number' : this.numberInput,
        'name' : this.nameInput,
        'date' : this.dateInput,
        'cvv' : this.cvvInput
      })
      console.log('me', this.formDetails)
    }

  }
