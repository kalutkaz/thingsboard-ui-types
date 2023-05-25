import { OnDestroy } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { EntityKeyType, EntityKeyValueType, KeyFilterInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
import { DialogService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { DeviceProfileService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/device-profile.service';
import * as i0 from "@angular/core";
export interface KeyFilterDialogData {
    keyFilter: KeyFilterInfo;
    isAdd: boolean;
    displayUserParameters: boolean;
    allowUserDynamicSource: boolean;
    readonly: boolean;
    telemetryKeysOnly: boolean;
    entityId?: EntityId;
}
export declare class KeyFilterDialogComponent extends DialogComponent<KeyFilterDialogComponent, KeyFilterInfo> implements OnDestroy, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: KeyFilterDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<KeyFilterDialogComponent, KeyFilterInfo>;
    private deviceProfileService;
    private dialogs;
    private translate;
    private fb;
    private keyNameInput;
    private dirty;
    private entityKeysName;
    private destroy$;
    keyFilterFormGroup: UntypedFormGroup;
    entityKeyTypes: EntityKeyType[];
    entityKeyTypeTranslations: Map<EntityKeyType, string>;
    entityKeyValueTypesKeys: string[];
    entityKeyValueTypeEnum: typeof EntityKeyValueType;
    entityKeyValueTypes: Map<EntityKeyValueType, import("../../../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models").EntityKeyValueTypeData>;
    submitted: boolean;
    showAutocomplete: boolean;
    filteredKeysName: Observable<Array<string>>;
    searchText: string;
    constructor(store: Store<AppState>, router: Router, data: KeyFilterDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<KeyFilterDialogComponent, KeyFilterInfo>, deviceProfileService: DeviceProfileService, dialogs: DialogService, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    clear(): void;
    onFocus(): void;
    save(): void;
    get isConstantKeyType(): boolean;
    private fetchEntityName;
    private getEntityKeys;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeyFilterDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KeyFilterDialogComponent, "tb-key-filter-dialog", never, {}, {}, never, never, false, never>;
}
