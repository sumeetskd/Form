import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  valueA:number=320;
  valueB:number=320;
  data=[
    {name:'A',price:200},
    {name:'B',price:300},
    {name:'C',price:400},
    {name:'D',price:500},
  ];
  log(x:any){
    console.log(x);
  }
  sum:number=0;
  calc(x:any){
    // let sum:number=0;
    // sum+=x;
    // console.log(x);
    // let k = document.getElementsByName(x.name);
    if(x.value){
        // let k = document.getElementsByName(x.name);
        // console.log(k);
        let d = this.data.find((item)=>item.name==x.name);
        this.sum += <number>d?.price;
    }else{
        let d = this.data.find((item)=>item.name==x.name);
        this.sum -= <number>d?.price;
    }
    console.log(x);
    console.log(x.viewModel) //true n false
    // console.log(k)
    console.log('Sum:',this.sum);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
