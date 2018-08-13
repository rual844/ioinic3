import { NgModule } from '@angular/core';
import { DetailComponent } from './detail/detail';
import { IonicModule } from "ionic-angular";
@NgModule({
	declarations: [DetailComponent],
	imports: [IonicModule],
	exports: [DetailComponent],
	entryComponents: [
		DetailComponent
	  ],
})
export class ComponentsModule {}
