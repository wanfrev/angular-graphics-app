import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../../app.component';
  import { GraphicComponent } from '../../components/graphic/graphic.component';
  // import { ChartFormComponent } from '../../chart-form/chart-form.component';

  @NgModule({
    declarations: [
      AppComponent,
      GraphicComponent,
      //  ChartFormComponent
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
