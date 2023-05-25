import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { DataKey, Widget, widgetType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { DataKeysCallbacks } from './data-keys.component.models';
import { DataKeyConfigComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/data-key-config.component';
import { Dashboard } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/dashboard.models';
import { IAliasController } from '../../../../../../../thingsboard/ui-ngx/src/app/core/api/widget-api.models';
import * as i0 from "@angular/core";
export interface DataKeyConfigDialogData {
    dataKey: DataKey;
    dataKeySettingsSchema: any;
    dataKeySettingsDirective: string;
    dashboard: Dashboard;
    aliasController: IAliasController;
    widget: Widget;
    widgetType: widgetType;
    entityAliasId?: string;
    showPostProcessing?: boolean;
    callbacks?: DataKeysCallbacks;
}
export declare class DataKeyConfigDialogComponent extends DialogComponent<DataKeyConfigDialogComponent, DataKey> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: DataKeyConfigDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<DataKeyConfigDialogComponent, DataKey>;
    fb: UntypedFormBuilder;
    dataKeyConfig: DataKeyConfigComponent;
    dataKeyFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: DataKeyConfigDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<DataKeyConfigDialogComponent, DataKey>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataKeyConfigDialogComponent, [null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataKeyConfigDialogComponent, "tb-data-key-config-dialog", never, {}, {}, never, never, false, never>;
}
