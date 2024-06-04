import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoserviecService } from './todoserviec.service';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { CreatetodoComponent } from './createtodo/createtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    UpdateComponent,
    ErrorComponent,
    CreatetodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
