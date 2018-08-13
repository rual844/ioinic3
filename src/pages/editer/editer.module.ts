import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditerPage } from './editer';

@NgModule({
  declarations: [
    EditerPage,
  ],
  imports: [
    IonicPageModule.forChild(EditerPage),
  ],
})
export class EditerPageModule {}
