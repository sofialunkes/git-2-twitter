import { Routes, RouterModule } from "@angular/router";
import { LoginG2tComponent } from "src/app/login-g2t/login-g2t.component";
import { HomeComponent } from "src/app/home/home.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";

const routes:Routes = [
    {
        path: '',
        component: LoginG2tComponent
    },
    {
        path:'home',
        component: HomeComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);