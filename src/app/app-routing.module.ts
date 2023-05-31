import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersAllComponent } from './pages/users/usersAll/usersAll.component';
import { UserByIdComponent } from './pages/users/userById/userById.component';
import { AlbumesComponent } from './pages/albumes/albumesAll/albumes.component';

const routes: Routes = [
  { path: '', component: UsersAllComponent },
  { path: 'users', component: UsersAllComponent },
  { path: 'user/:id', component: UserByIdComponent},
  { path: 'albumes', component: AlbumesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
