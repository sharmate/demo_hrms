import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-r-form-array',
  templateUrl: './r-form-array.component.html',
  styleUrls: ['./r-form-array.component.scss']
})
export class RFormArrayComponent implements OnInit {

  header = "Reactive Form Example";
  // profileForm = new FormGroup({
  //   name : new FormControl(''),
  //   contact : new FormControl(''),
  //   email : new FormControl(''),
  //   address : new FormGroup({
  //     street : new FormControl(''),
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     pincode : new FormControl('')
  //   })
  // })

  constructor(private fb: FormBuilder) { }
  profileForm : FormGroup;

  ngOnInit() {
    this.profileForm = this.fb.group({
      name : ['', Validators.required],
      contact : ['', Validators.required],
      email : [''],
      address: this.fb.array([
        this.fb.group({
          street : [''],
          city : [''],
          state : [''],
          pincode : [''] 
        })
      ])
    })
  }

  
  onSubmit(){
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      name : "Ravi",
      conatct : 8510831461,
      address : {
        street : "Btm Layout",
        city : 'Bangalore'
      }
    })
  }

  get address() {
    return this.profileForm.get('address') as FormArray;
  }

  addAddress() {
    this.address.push(this.fb.group({}));
  }
}
