import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {


  subject :string = "Enter your Subject";
  description : string ="Enter description";
  SubjectValue :string ='';
  descValue :string ='';
  listOfValues :object[]=[];
  subarr :string[]=[]
  SubjectEvent :any;
  descEvent :any;
  constructor(private userservice:UserService){};
  handleSubject(event:Event){
      this.SubjectValue = (<HTMLInputElement>event.target).value;
      this.SubjectEvent = (<HTMLInputElement>event.target)
  }
  handleDesc(event : Event){
    this.descValue = (<HTMLInputElement>event.target).value;
    this.descEvent = (<HTMLInputElement>event.target)

  }
  handleClick(){
    if (this.SubjectValue !='' && this.descValue !=''){
      this.listOfValues.push([this.SubjectValue,this.descValue])
    }
    this.userservice.func(this.listOfValues);
    this.descValue='';
    this.SubjectValue='';
    this.descEvent.value=null;
    this.SubjectEvent.value=null;
    console.log(this.listOfValues);
  }

}
