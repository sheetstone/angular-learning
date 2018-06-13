import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '../home/welcome.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';
import { ErrorpageComponent } from '../errorpage/errorpage.component';
import { ProductionListComponent } from '../products/product-list.component';
import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductService } from '../products/product.service';
import { ProductGuardService } from '../products/product-guard.service';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductionListComponent },
  {
    path: 'products/:id',
    canActivate: [ProductGuardService],
    component: ProductDetailComponent
  },
  /* Wild card defination */
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'error', component: ErrorpageComponent },
  { path: '**', component: PageNotFoundComponent },

];


export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes);

