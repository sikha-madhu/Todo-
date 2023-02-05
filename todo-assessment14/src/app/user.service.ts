import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSource = new BehaviorSubject<any>(null);
  newSource = this.userSource.asObservable();

  constructor(){};
  func(x:any){
    this.userSource.next(x);
  }

}
