import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUsers } from 'src/services/serviceUsers';

@Component({
  selector: 'usersAll',
  templateUrl: './usersAll.component.html',
  styleUrls: ['./usersAll.component.css'],
})
export class UsersAllComponent implements OnInit{
  public users :any ;
  public filterInput: string = '';

  constructor(
    private router: Router,
    private serviceUsers: ServiceUsers,
  ) {}

  ngOnInit() {
    this.serviceUsers.getUsers( ).subscribe((res) => {
      this.users = res;
    });

  }

    userSelected(id:any) {
    this.router.navigate(['/user', id]);
  }
}
