import { ChangeDetectorRef } from '@angular/core';
import { EntityType } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/entity/entity.component';
import { QueueInfo } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/queue.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class QueueComponent extends EntityComponent<QueueInfo> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: QueueInfo;
    protected entitiesTableConfigValue: EntityTableConfig<QueueInfo>;
    protected cd: ChangeDetectorRef;
    fb: UntypedFormBuilder;
    entityForm: UntypedFormGroup;
    entityType: typeof EntityType;
    submitStrategies: string[];
    processingStrategies: string[];
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: QueueInfo, entitiesTableConfigValue: EntityTableConfig<QueueInfo>, cd: ChangeDetectorRef, fb: UntypedFormBuilder);
    ngOnInit(): void;
    buildForm(entity: QueueInfo): UntypedFormGroup;
    hideDelete(): boolean;
    updateForm(entity: QueueInfo): void;
    prepareFormValue(formValue: any): any;
    onQueueIdCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QueueComponent, "tb-queue", never, {}, {}, never, never, false, never>;
}
