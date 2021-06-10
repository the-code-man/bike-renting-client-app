import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarModule } from '../top-bar/top-bar.module';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { RegisterComponent } from './register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
    { path: '', component: RegisterComponent }
];

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatRadioModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatStepperModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        TopBarModule,
        RouterModule.forChild(routes)
    ]
})
export class RegisterModule { }