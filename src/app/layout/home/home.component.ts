import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { UserDto } from '../../models/userDto';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SearchResultComponent } from "../search-result/search-result.component";

@Component({
  selector: 'app-home',
  standalone: true,
  //providers: [ActivatedRoute],
  imports: [SearchComponent, CommonModule, RouterOutlet, RouterLink, SearchResultComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usersList?: Array<UserDto>;

  seachUser(users: UserDto[]) {
    // console.log(users);
    this.usersList = users;
  }
}
