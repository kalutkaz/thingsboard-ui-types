import { widgetType } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { WidgetActionCallbacks, WidgetActionsData } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/action/manage-widget-actions.component.models';
import { OnInit } from '@angular/core';
import { DialogComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export interface ManageWidgetActionsDialogData {
    widgetTitle: string;
    actionsData: WidgetActionsData;
    callbacks: WidgetActionCallbacks;
    widgetType: widgetType;
}
export declare class ManageWidgetActionsDialogComponent extends DialogComponent<ManageWidgetActionsDialogComponent, WidgetActionsData> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ManageWidgetActionsDialogData;
    private fb;
    dialogRef: MatDialogRef<ManageWidgetActionsDialogComponent, WidgetActionsData>;
    actionSources: {
        [actionSourceId: string]: import("../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models").WidgetActionSource;
    };
    actionsSettings: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, data: ManageWidgetActionsDialogData, fb: UntypedFormBuilder, dialogRef: MatDialogRef<ManageWidgetActionsDialogComponent, WidgetActionsData>);
    ngOnInit(): void;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageWidgetActionsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageWidgetActionsDialogComponent, "tb-manage-widget-actions-dialog", never, {}, {}, never, never, false, never>;
}
