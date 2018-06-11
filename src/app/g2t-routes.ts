import { Routes, RouterModule } from "@angular/router";
import { G2tLoginComponent } from "src/app/g2t-login/g2t-login.component";
import { HomeComponent } from "src/app/home/home.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";

const routes:Routes = [
    {
        path: '',
        component: G2tLoginComponent
    },
    {
        path:'home',
        component: HomeComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);