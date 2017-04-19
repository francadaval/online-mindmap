import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }	 from '@angular/forms';

import { Modal } from './modal.component';

import { OmmComponent }  from './omm.component';
import { MainMenuComponent } from './main-menu.component';
import { MindMapComponent }  from './mindmap.component';
import { MindMapNodeComponent, MindMapNodeInput, SideFilterPipe }  from './mindmap-node.component';
import { MindMapBranchComponent, MindMapBranchCanvas } from './mindmap-branch.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		Modal,
		OmmComponent,
		MainMenuComponent,
		MindMapComponent,
		MindMapNodeComponent,
		MindMapBranchComponent,
		MindMapNodeInput,
		SideFilterPipe,
		MindMapBranchCanvas
	],
//	providers: [
//	],
	bootstrap: [
		OmmComponent
	]
})

export class OmmModule { }