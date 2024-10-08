import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {
  public myForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    inStorage: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  // public myForm: FormGroup = this.fb.group({
  //   name: [""],
  //   price: [0],
  //   inStorage: [0],
  // });
  // constructor (private fb: FormBuilder){}

  onSave(): void {
    if(this.myForm.invalid) return;
    console.log(this.myForm.value)
  }

}
