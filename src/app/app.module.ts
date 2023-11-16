import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StarComponent } from './shared/components/star/star.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
