import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {

  users: Array<String> = ["Senegal", "Mali", "Niger", ""];

  userList$ = of(this.users);

  constructor() {
  }

  ngOnInit(): void {

    //this.userList$.subscribe( value => console.log(value));
    this.test().subscribe({
      next(value) { console.log('Les valeurs: ' + value); },
      error(err)  { console.error('Error: ' + err); },
      complete()  { console.log('Observable emitted the complete notification'); }
    });
  }

  test(): Observable<String[]> {

    return this.userList$;
  }
}
