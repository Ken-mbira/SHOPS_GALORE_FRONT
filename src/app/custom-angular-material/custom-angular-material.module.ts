import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';





import { NgChartsModule } from 'ng2-charts'
import { MatTreeSelectInputModule } from 'mat-tree-select-input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatStepperModule,
    NgChartsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatTreeSelectInputModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatMenuModule,
    MatRadioModule,
    HttpClientModule,
    MatSnackBarModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSlideToggleModule
  ]
})
export class CustomAngularMaterialModule { }
