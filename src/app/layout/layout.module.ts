import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CopyRightComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
})
export class LayoutModule { }
