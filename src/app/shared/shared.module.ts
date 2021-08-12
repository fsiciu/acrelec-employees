import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './base/header/header.component';
import { ComponentsModule } from './components/components.module';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ComponentsModule,
    HeaderComponent,
    FilterPipe
  ]
})
export class SharedModule {
}
