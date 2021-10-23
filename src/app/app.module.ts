import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import {createComponent} from "~/app/create/create.component";
import {readComponent} from "~/app/read/read.component";
import {deleteComponent} from "~/app/delete/delete.component";
import {updateComponent} from "~/app/update/update.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, createComponent,readComponent, deleteComponent, updateComponent ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
