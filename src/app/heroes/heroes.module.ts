import {CommonModule} from "@angular/common"
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

// export los componentes que seran accesible externamente
// CommonModule nos permite utilizar directivas como ngid ngfor 

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule {

}