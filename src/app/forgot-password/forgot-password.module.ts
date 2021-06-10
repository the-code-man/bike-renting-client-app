import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TopBarModule } from "../top-bar/top-bar.module";

import { ForgotPasswordComponent } from "./forgot-password.component";

const routes: Routes = [
    { path: '', component: ForgotPasswordComponent }
];

@NgModule({
    declarations: [
        ForgotPasswordComponent
    ],
    imports: [
        TopBarModule,
        RouterModule.forChild(routes)
    ]
})
export class ForgotPasswordModule { }