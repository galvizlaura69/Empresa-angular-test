import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CelsiusPipe } from '../pipes/celsius.pipe';

import { CardInfoComponent } from './components/cards/cardInfo/cardInfo.component';
import { HomeComponent } from './pages/home/home.component';
import { UserByIdComponent } from './pages/users/userById/userById.component';
import { UsersAllComponent } from './pages/users/usersAll/usersAll.component';
import { DialogoConfirmacionComponent } from './components/dialogo-confirmacion/dialogo-confirmacion.component';

import { ServiceUsers } from '../services/serviceUsers';
import { servicePost } from '../services/servicePost';


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
    CardInfoComponent,
    CelsiusPipe,
    HomeComponent,
    UserByIdComponent,
    UsersAllComponent,
    DialogoConfirmacionComponent],
  providers: [HttpClient, ServiceUsers, servicePost],
  bootstrap: [AppComponent],
})
export class AppModule {}
