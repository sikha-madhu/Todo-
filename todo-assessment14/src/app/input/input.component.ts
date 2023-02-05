import { Component,Input , EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() placeholderfromheader : string='';
  @Output() childToParent = new EventEmitter();
  handleInputEvent(event:Event){
    this.childToParent.emit(event);
  }
  
}
