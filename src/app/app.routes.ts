import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ClickSearchComponent } from './click-search/click-search.component';
import { AdminComponent } from './admin/admin.component';
import { BikeCrudComponent } from './bike-crud/bike-crud.component';
import { OperationButtonComponent } from './operation-button/operation-button.component';
import { UpdateBikeComponent } from './update-bike/update-bike.component';
import { DeleteBikeComponent } from './delete-bike/delete-bike.component';
import { BikeListComponent } from './bike-list/bike-list.component';

export const routes: Routes = [

    {path : '', component:HomeComponent},
    {path : 'Login', component:LoginComponent} ,
    {path : 'SingUp' , component:SingUpComponent},
    {path : 'Search' , component:ClickSearchComponent},
    {path : 'Admin' , component :AdminComponent },
    {path : 'Bike' , component:OperationButtonComponent},
    {path : 'Add' , component:BikeCrudComponent},
    {path : 'Update' , component:UpdateBikeComponent},
    {path : 'Delete' , component:DeleteBikeComponent},
    {path : 'BikeList' , component:BikeListComponent}

    
];


