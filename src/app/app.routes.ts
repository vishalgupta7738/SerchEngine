import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ClickSearchComponent } from './click-search/click-search.component';
import { AdminComponent } from './admin/admin.component';
import { BikeCrudComponent } from './bike-crud/bike-crud.component';
import { UpdateBikeComponent } from './update-bike/update-bike.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './auth.guard';
import { UserDetailsManagmentComponent } from './user-details-managment/user-details-managment.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { PendingdetailscomComponent } from './pendingdetailscom/pendingdetailscom.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReportGenerateComponentComponent } from './report-generate-component/report-generate-component.component';
import { UserSearchHistoryComponent } from './user-search-history/user-search-history.component';
import { SeeAllHistoryComponent } from './see-all-history/see-all-history.component';
import { OperationButtonComponent } from './operation-button/operation-button.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import { CompareComponent } from './compare/compare.component';


export const routes: Routes = [

    {path : '', component:HomeComponent , pathMatch: 'full'},
    {path : 'Login', component:LoginComponent} ,
    {path : 'SingUp' , component:SingUpComponent},
    {path : 'Search' , component:ClickSearchComponent},
    // {path : 'Admin' , component :AdminComponent , canActivate : [AuthGuard],
    {path : 'Admin' , component:AdminComponent , canActivate: [AuthGuard], data: { expectedRole: 'Admin' }, 
        children:[
            {path : 'bikeOperation' , component:OperationButtonComponent},
            {path : 'User' , component: UserDetailsManagmentComponent},
            {path : 'userSearchHistory' , component:SeeAllHistoryComponent},
            {path: 'report' , component:ReportGenerateComponentComponent},
            {path : 'PendingRequest' , component:PendingdetailscomComponent},
          

        ]
     },
    {path : 'Admin' , component :AdminComponent},
    {path : '' , redirectTo: '/Login' , pathMatch : 'full'},
    {path : 'Add' , component:BikeCrudComponent},
    {path : 'Update' , component:UpdateBikeComponent},
    {path : 'BikeList' , component:BikeListComponent},
    {path : 'User' , component:UserDetailsManagmentComponent},
    {path : 'LogOut' , component : LoginComponent},
    {path : 'Request' , component: UserDetailsComponent},
    {path : 'UserUpdate' , component:UserUpdateComponent},
    {path : 'UserView' , component:UserDetailsComponent},
    {path : 'UserDelete' , component:UserDeleteComponent},
    {path : 'PendingRequest' , component:PendingdetailscomComponent},
    {path : 'singUp' , component:HomeComponent},
    {path : 'UserLogin' , component:HomeComponent},
     {path : 'profile' , component:UserProfileComponent, canActivate: [AuthGuard], data: { expectedRole: 'User' }},
    {path:'report',component:ReportGenerateComponentComponent},
    {path : 'ReportHome' , component:AdminComponent},
    {path : 'searchHistory' , component:UserSearchHistoryComponent, canActivate: [AuthGuard], data: { expectedRole: 'User' }},
    {path : 'userLogout' , component:HomeComponent},
    {path : 'userSearchHistory' ,component:SeeAllHistoryComponent},
    {path : 'UserHome' , component:HomeComponent},
    {path : 'bikeOperation' , component:OperationButtonComponent},
    {path: 'HomePage' , component:HomeComponent},
    {path : 'Homehistrory' , component:HomeComponent},
    {path : 'AddBikes' , component:BikeCrudComponent},
    {path : 'AllBikes' , component:OperationButtonComponent},
    {path : 'BackBtn' , component:HomeComponent},
    {path: 'singupHome', component: HomeComponent},
    { path: 'bike-details/:id', component: BikeDetailsComponent },
    { path: 'Compare', component: CompareComponent  ,canActivate: [AuthGuard], data: { expectedRole: 'User' }},

    
];


