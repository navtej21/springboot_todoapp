import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { CreatetodoComponent } from './createtodo/createtodo.component';

const routes: Routes = [
  {path:"",component:TodoComponent},
  {path:"todos",component:TodoComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"createtodo",component:CreatetodoComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
