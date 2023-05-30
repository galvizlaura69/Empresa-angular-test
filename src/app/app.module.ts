import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceUsers } from '../services/serviceUsers';
import { CardInfoComponent } from './components/cards/cardInfo/cardInfo.component';
import { CelsiusPipe } from '../pipes/celsius.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/products/product/product.component';
import { ProductsComponent } from './pages/products/products.component';


@NgModule({
  imports: [BrowserModule,AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    CardInfoComponent,
    CelsiusPipe,
    HomeComponent,
    ProductComponent,
    ProductsComponent],
  providers: [HttpClient, ServiceUsers],
  bootstrap: [AppComponent],
})
export class AppModule {}
