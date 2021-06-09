import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';

import { RegisterComponent } from './register.component';

const routes = [
    { path: '', component: RegisterComponent }
];

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatRadioModule,
        MatGridListModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class RegisterModule { }