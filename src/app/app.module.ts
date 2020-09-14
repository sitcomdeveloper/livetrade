import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import CanvasJS from 'canvasjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PopupsComponent } from './home/popups/popups.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PopupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,HttpClientModule,ModalModule.forRoot() 
  ],
  entryComponents: [PopupsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
