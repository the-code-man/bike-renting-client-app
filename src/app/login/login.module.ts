import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopBarModule } from '../top-bar/top-bar.module';

import { LoginComponent } from './login.component';

const routes: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        TopBarModule,
        RouterModule.forChild(routes)
    ]
})
export class LoginModule { }