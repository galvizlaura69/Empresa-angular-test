import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceUsers } from '../services/serviceUsers';
import { CardInfoComponent } from './components/cards/cardInfo/cardInfo.component';
import { CelsiusPipe } from '../pipes/celsius.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routeFiles/home/home.component';
import { ProductsComponent } from './routeFiles/products/products.component';
import { ProductComponent } from './routeFiles/products/product/product.component';

@NgModule({
  imports: [BrowserModule,AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, CardInfoComponent, CelsiusPipe, HomeComponent, ProductsComponent, ProductComponent],
  providers: [HttpClient, ServiceUsers],
  bootstrap: [AppComponent],
})
export class AppModule {}
