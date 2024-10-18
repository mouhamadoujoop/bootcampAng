import { Component, Output, EventEmitter } from '@angular/core';
import { UserDto } from '../../models/userDto';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  users: Array<UserDto> = [];
  user: UserDto = {};
  /**
   * Le composant fils envoie une information (UserDto[]) au composant parent
   */
  @Output()
  seachEvent = new EventEmitter<UserDto[]>();

  get(valeur: number) {
    this.user.id = valeur;
    this.user.prenom = 'Ass';
    this.user.nom = 'FAYE';
    this.user.email = 'afaye@samanecorp.com';
    this.user.password = 'Passer@123';
    this.users.push(this.user);
    
    this.user = {};
    this.user.id = 2;
    this.user.prenom = 'Nguirane';
    this.user.nom = 'FALL';
    this.user.email = 'nguirane@samanecorp.com';
    this.user.password = 'Passer@123';
    this.users.push(this.user);

    this.seachEvent.emit(this.users);
  }

  protected readonly Number = Number;
}
