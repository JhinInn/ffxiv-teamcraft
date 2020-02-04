import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGearsets from './+state/gearsets.reducer';
import { GearsetsEffects } from './+state/gearsets.effects';
import { GearsetsFacade } from './+state/gearsets.facade';
import { NzAlertModule, NzButtonModule, NzDividerModule, NzFormModule, NzInputModule, NzModalServiceModule, NzSelectModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { GearsetCreationPopupComponent } from './gearset-creation-popup/gearset-creation-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { CoreModule } from '../../core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MateriaSlotIconComponent } from './materia-slot-icon/materia-slot-icon.component';
import { StatPipe } from './stat.pipe';
import { AriyalaImportPopupComponent } from './ariyala-import-popup/ariyala-import-popup.component';
import { LodestoneImportPopupComponent } from './lodestone-import-popup/lodestone-import-popup.component';
import { GearsetComparatorPopupComponent } from './gearset-comparator-popup/gearset-comparator-popup.component';
import { ItemIconModule } from '../item-icon/item-icon.module';
import { ImportFromPcapPopupComponent } from './import-from-pcap-popup/import-from-pcap-popup.component';

@NgModule({
  declarations: [GearsetCreationPopupComponent, MateriaSlotIconComponent, StatPipe, AriyalaImportPopupComponent, LodestoneImportPopupComponent, GearsetComparatorPopupComponent, ImportFromPcapPopupComponent],
  entryComponents: [GearsetCreationPopupComponent, AriyalaImportPopupComponent, LodestoneImportPopupComponent, GearsetComparatorPopupComponent, ImportFromPcapPopupComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzAlertModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    CoreModule,
    FlexLayoutModule,

    StoreModule.forFeature(
      fromGearsets.GEARSETS_FEATURE_KEY,
      fromGearsets.reducer
    ),
    EffectsModule.forFeature([GearsetsEffects]),

    NzModalServiceModule,
    TranslateModule,
    ItemIconModule,
    NzDividerModule
  ],
  exports: [MateriaSlotIconComponent, StatPipe],
  providers: [GearsetsFacade]
})
export class GearsetsModule {
}
