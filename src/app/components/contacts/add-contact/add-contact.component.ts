import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  contactData: {} = {
    username: '',
    phone: '',
    email: ''
  }

  constructor( private contactService: ContactService ) {  // dependency injection

  }

  ngOnInit() {
  }

  addContactHandler( formData: NgForm) :void { //1. receive data from comp.html
    console.log(formData);
    //2. send the formData to service
    this.contactService.create(formData.value)
                      .subscribe( (resp) => {  // 3. receiving resp from service
                        console.log(resp);
                      })
    
  }
}
