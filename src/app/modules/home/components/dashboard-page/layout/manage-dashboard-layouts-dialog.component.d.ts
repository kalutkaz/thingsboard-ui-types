import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { UtilsService } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DashboardLayoutId, DashboardStateLayouts } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/dashboard.models';
import { DashboardUtilsService } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/services/dashboard-utils.service';
import { LayoutFixedSize, LayoutPercentageSize, LayoutWidthType } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/layout/layout.models';
import { MatTooltip } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
export interface ManageDashboardLayoutsDialogData {
    layouts: DashboardStateLayouts;
}
export declare class ManageDashboardLayoutsDialogComponent extends DialogComponent<ManageDashboardLayoutsDialogComponent, DashboardStateLayouts> implements ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    private data;
    private errorStateMatcher;
    protected dialogRef: MatDialogRef<ManageDashboardLayoutsDialogComponent, DashboardStateLayouts>;
    private fb;
    private utils;
    private dashboardUtils;
    private translate;
    private dialog;
    tooltip: MatTooltip;
    layoutsFormGroup: UntypedFormGroup;
    layoutWidthType: typeof LayoutWidthType;
    layoutPercentageSize: typeof LayoutPercentageSize;
    layoutFixedSize: typeof LayoutFixedSize;
    private readonly layouts;
    private subscriptions;
    private submitted;
    constructor(store: Store<AppState>, router: Router, data: ManageDashboardLayoutsDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<ManageDashboardLayoutsDialogComponent, DashboardStateLayouts>, fb: UntypedFormBuilder, utils: UtilsService, dashboardUtils: DashboardUtilsService, translate: TranslateService, dialog: MatDialog);
    ngOnDestroy(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    openLayoutSettings(layoutId: DashboardLayoutId): void;
    cancel(): void;
    save(): void;
    buttonFlexValue(): number;
    formatSliderTooltipLabel(value: number): string | number;
    private layoutControlChange;
    setFixedLayout(layout: string): void;
    private showTooltip;
    layoutButtonClass(side: DashboardLayoutId, border?: boolean): string;
    layoutButtonText(side: DashboardLayoutId): string;
    showPreviewInputs(side: DashboardLayoutId): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ManageDashboardLayoutsDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ManageDashboardLayoutsDialogComponent, "tb-manage-dashboard-layouts-dialog", never, {}, {}, never, never, false, never>;
}
