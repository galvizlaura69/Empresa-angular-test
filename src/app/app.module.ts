import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CelsiusPipe } from '../pipes/celsius.pipe';
;
import { UserByIdComponent } from './pages/users/userById/userById.component';
import { UsersAllComponent } from './pages/users/usersAll/usersAll.component';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion.component';

import { ServiceUsers } from '../services/serviceUsers';
import { servicePost } from '../services/servicePost';
import { serviceAlbumes } from 'src/services/serviceAlbumes';
import { SeacherComponent } from './components/input/searcher.component';
import { AlbumesComponent } from './pages/albumes/albumesAll/albumes.component';
import { PostListComponent } from './components/postList/post-list.component';
import { CommentListComponent } from './components/commentList/comment-list.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  declarations: [
    AppComponent,
    CelsiusPipe,
    UserByIdComponent,
    UsersAllComponent,
    DialogoConfirmacionComponent,
    SeacherComponent,
    AlbumesComponent,
    PostListComponent,
    CommentListComponent
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
