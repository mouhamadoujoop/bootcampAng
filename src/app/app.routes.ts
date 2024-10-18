import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'login',
        component : LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
