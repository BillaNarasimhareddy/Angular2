import{ModuleWithProviders}from '@angular/core'
import{Routes,RouterModule}from '@angular/router'

import {AppComponent} from './app.component'
import{AboutComponent}from './about/about.component'
import{FromsComponent}from'./froms/froms.component'
import{CurdComponent}from'./curd/curd.component'


export const router:Routes=[
    {path:'',redirectTo:'about',pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'froms',component:FromsComponent},
    {path:'inputoutput',component:CurdComponent}
];

export const routs:ModuleWithProviders=RouterModule.forRoot(router);