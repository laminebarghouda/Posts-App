import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {


  @Input() user: User;
  @Output() formSubmit: EventEmitter<User> = new EventEmitter<User>();
  userExists: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.user = new User();
  }


  onFormSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.formSubmit.emit(form.value);
    }
  }

}
