import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { SignUp } from './auth/sign-up/sign-up';
import { Dashboard } from './modules/dashboard/dashboard';
import { NavBar } from './nav-bar/nav-bar';
import { Profile } from './modules/profile/profile/profile';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: Login
    },

    {
        path: 'sign-up',
        component: SignUp
    },

    {
        path: 'app',
        component: NavBar,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: Dashboard,
            },
            {
                path: 'profile',
                component: Profile
            }
        ]
    }

];
