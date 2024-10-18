import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from '../../models/userDto';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent implements OnInit {

  @Input()
  userResult?: UserDto[];
  
  //BehaviorSubject :c'est plus flexible que Observable car c'est modifiable (grace à la méthode next() et récupérable grace à la méthode getValue()) mais les observables ne le sont pas
  usersBeSubjec$ = new BehaviorSubject<UserDto[]>([]);
  
  //Subject: ils ne font que propager le flux, ne stock pas la valeur (pas de méthode getValue())
  //usersSubject$ = new Subject<UserDto[]>();
  
  //Ici nous avons un Observable : pas modifiables donc ne marche pas dans ce cas de figure
  // users$ = of(this.userResult)

  ngOnInit(): void {
    //this.usersSubject$.next(this.userResult?this.userResult:[]);
    this.usersBeSubjec$.next(this.userResult?this.userResult:[]);
  }
}
