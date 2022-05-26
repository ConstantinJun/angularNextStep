import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataRegistration:{name:string,age:string,email:string}[] = [];

  constructor(private form: FormBuilder) {
  }

  registration = this.form.group({
    name:[''],
    email:['', [Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$')]],
    age:['']
    }
  )

testFunc(){
    this.dataRegistration.push({
      name: this.registration.controls['name'].value,
      age: this.registration.controls['age'].value,
      email: this.registration.controls['email'].value
    })
  console.log(this.dataRegistration)
  console.log(this.registration)
}
}
