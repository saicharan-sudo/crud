import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    {path:'',redirectTo:'/table',pathMatch:'full'},
    {path:'form',component:FormComponent},
    {path:'table',component:TableComponent},
    {path:'payment',component:PaymentComponent},
];
