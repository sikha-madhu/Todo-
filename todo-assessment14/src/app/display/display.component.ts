import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  data:any=[];
  constructor(private userservice:UserService){};

  ngOnInit() {
    this.userservice.newSource.subscribe(val =>this.data=val);
  }
 
}
