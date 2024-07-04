import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SharedModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule { }
