/**
 * Created by hkb on 20.06.17.
 */
import { Routes } from '@angular/router';
import {ProductListComponent} from './modules/product/product-list/product-list.component';
import {ProductDetailComponent} from './modules/product/product-detail/product-detail.component';
import {WelcomeComponent} from './modules/welcome/welcome.component';

export const APP_ROUTES: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', children: [
    {path: '', component: ProductListComponent },
    {path: ':id', component: ProductDetailComponent },
    {path: '**', redirectTo: '' }
    ]
  },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome' }
];
