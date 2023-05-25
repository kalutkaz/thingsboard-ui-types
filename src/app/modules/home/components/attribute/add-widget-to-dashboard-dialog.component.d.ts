import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { UtilsService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import { DashboardUtilsService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dashboard-utils.service';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { Widget } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { DashboardService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/dashboard.service';
import { ItemBufferService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/item-buffer.service';
import * as i0 from "@angular/core";
export interface AddWidgetToDashboardDialogData {
    entityId: EntityId;
    entityName: string;
    widget: Widget;
}
export declare class AddWidgetToDashboardDialogComponent extends DialogComponent<AddWidgetToDashboardDialogComponent, void> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddWidgetToDashboardDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<AddWidgetToDashboardDialogComponent, void>;
    private fb;
    private utils;
    private dashboardUtils;
    private dashboardService;
    private itembuffer;
    private dialog;
    addWidgetFormGroup: UntypedFormGroup;
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: AddWidgetToDashboardDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<AddWidgetToDashboardDialogComponent, void>, fb: UntypedFormBuilder, utils: UtilsService, dashboardUtils: DashboardUtilsService, dashboardService: DashboardService, itembuffer: ItemBufferService, dialog: MatDialog);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    add(): void;
    private selectTargetState;
    private selectTargetLayout;
    private addWidgetToDashboard;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddWidgetToDashboardDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddWidgetToDashboardDialogComponent, "tb-add-widget-to-dashboard-dialog", never, {}, {}, never, never, false, never>;
}
