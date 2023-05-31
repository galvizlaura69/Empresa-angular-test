import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceUsers } from 'src/services/serviceUsers';

@Component({
  selector: 'usersAll',
  templateUrl: './usersAll.component.html',
  styleUrls: ['./usersAll.component.css'],
})
export class UsersAllComponent implements OnInit{
  public initialUserList:any ;
  public users :any ;
  public filterInput: string = '';
  public p: any;

  constructor(
    private router: Router,
    private serviceUsers: ServiceUsers,
  ) {}

  ngOnInit() {
    this.serviceUsers.getUsers( ).subscribe((res) => {
      this.users = res;
      this.initialUserList = res;
    });

  }
  changeFilter(e:any){
    this.users = this.initialUserList.filter((user: any) => {
        user.id = user.id.toString();
        user.phone = null;
        return Object.keys(user).some(key => {
          return String(user[key]).toLowerCase().includes(this.filterInput.toLowerCase());
        });
      });
    }

    userSelected(id:any) {
    this.router.navigate(['/user', id]);
  }
}
