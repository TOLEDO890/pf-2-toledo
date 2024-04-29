import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {UnirNombresPipe  } from './Pipes/unir-nombres.pipe';
import { DirectivesDirective } from './directives/directives.directive';
@NgModule({
  declarations: [
    UnirNombresPipe,
    DirectivesDirective
  ],
  imports: [CommonModule],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    UnirNombresPipe,
    DirectivesDirective
    
  ],
})
export class SharedModule {}