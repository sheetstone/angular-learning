import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';
import { ErrorpageComponent } from '../errorpage/errorpage.component';
import { ProductionListComponent } from '../products/product-list.component';
import { ProductDetailComponent } from '../products/product-detail.component';

import { ProductGuardService } from '../products/product-guard.service';
import { CustomersComponent } from '../customers/customers.component';
import { ProductEditComponent } from '../products/product-edit.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductionListComponent },
  {
    path: 'product/:id',
    canActivate: [ProductGuardService],
    component: ProductDetailComponent
  },
  {
    path: 'productEdit/:id',
    component: ProductEditComponent
  },
  { path: 'customers', component: CustomersComponent },
  /* Wild card defination */
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'error', component: ErrorpageComponent },
  { path: '**', component: PageNotFoundComponent },

];


export const AppRouterModule: ModuleWithProviders = RouterModule.forRoot(routes);

