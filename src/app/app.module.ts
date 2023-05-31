import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
;
import { UserByIdComponent } from './pages/users/userById/userById.component';
import { UsersAllComponent } from './pages/users/usersAll/usersAll.component';
import { AlbumesComponent } from './pages/albumes/albumes.component';

import { PostListComponent } from './components/postList/post-list.component';
import { CommentListComponent } from './components/commentList/comment-list.component';
import { PopUpComponent } from './components/modal/pop-up.component';

import { ServiceUsers } from '../services/serviceUsers';
import { servicePost } from '../services/servicePost';
import { serviceAlbumes } from '../services/serviceAlbumes';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    UserByIdComponent,
    UsersAllComponent,
    PopUpComponent ,
    AlbumesComponent,
    PostListComponent,
    CommentListComponent,
  ],
  providers: [
    HttpClient,
    ServiceUsers,
    servicePost,
    serviceAlbumes
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
