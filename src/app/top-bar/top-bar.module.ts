import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from '@angular/material/toolbar';

import { TopBarComponent } from "./top-bar.component";

@NgModule({
    declarations: [
        TopBarComponent
    ],
    imports: [
        MatToolbarModule,
        FlexLayoutModule
    ],
    exports: [
        TopBarComponent
    ]
})
export class TopBarModule { }