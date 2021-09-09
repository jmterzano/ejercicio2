import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { ErrorComponent } from './page/error/error.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'bienvenido',component:BienvenidoComponent},
  {path:'login',component:LoginComponent},
  //{path:'casa',component:BienvenidoComponent},
  {path:'',redirectTo:'bienvenido',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
