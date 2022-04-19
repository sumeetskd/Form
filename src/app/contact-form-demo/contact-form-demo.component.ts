import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form-demo',
  templateUrl: './contact-form-demo.component.html',
  styleUrls: ['./contact-form-demo.component.css']
})
export class ContactFormDemoComponent implements OnInit {

  log(x:any){
    console.log(x);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
