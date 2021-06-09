import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

export const routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        RouterModule.forChild(routes)
    ]
})
export class LoginModule { }