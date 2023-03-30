import { ElementRef, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { WidgetActionCallbacks, WidgetActionDescriptorInfo, WidgetActionsData } from '@home/components/widget/action/manage-widget-actions.component.models';
import { UtilsService } from '@core/services/utils.service';
import { WidgetActionSource, WidgetActionType } from '@shared/models/widget.models';
import { DashboardService } from '@core/http/dashboard.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { MobileActionEditorComponent } from '@home/components/widget/action/mobile-action-editor.component';
import { widgetType } from '@shared/models/widget.models';
import { WidgetService } from '@core/http/widget.service';
import { TranslateService } from '@ngx-translate/core';
import { PopoverPlacement } from '@shared/components/popover.models';
import * as i0 from "@angular/core";
export interface WidgetActionDialogData {
    isAdd: boolean;
    callbacks: WidgetActionCallbacks;
    actionsData: WidgetActionsData;
    action?: WidgetActionDescriptorInfo;
    widgetType: widgetType;
}
declare const stateDisplayTypes: readonly ["normal", "separateDialog", "popover"];
type stateDisplayTypeTuple = typeof stateDisplayTypes;
export type stateDisplayType = stateDisplayTypeTuple[number];
export declare class WidgetActionDialogComponent extends DialogComponent<WidgetActionDialogComponent, WidgetActionDescriptorInfo> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    private utils;
    private dashboardService;
    private dashboardUtils;
    private widgetService;
    private translate;
    data: WidgetActionDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<WidgetActionDialogComponent, WidgetActionDescriptorInfo>;
    fb: UntypedFormBuilder;
    dashboardStateInput: ElementRef;
    mobileActionEditor: MobileActionEditorComponent;
    widgetActionFormGroup: UntypedFormGroup;
    actionTypeFormGroup: UntypedFormGroup;
    actionTypeFormGroupSubscriptions: Subscription[];
    stateDisplayTypeFormGroup: UntypedFormGroup;
    isAdd: boolean;
    action: WidgetActionDescriptorInfo;
    widgetActionTypes: string[];
    widgetActionTypeTranslations: Map<WidgetActionType, string>;
    widgetActionType: typeof WidgetActionType;
    filteredDashboardStates: Observable<Array<string>>;
    targetDashboardStateSearchText: string;
    selectedDashboardStateIds: Observable<Array<string>>;
    customActionEditorCompleter: import("../../../../../shared/models/ace/completion.models").TbEditorCompleter;
    submitted: boolean;
    widgetType: typeof widgetType;
    functionScopeVariables: string[];
    allStateDisplayTypes: readonly ["normal", "separateDialog", "popover"];
    allPopoverPlacements: readonly ["top", "topLeft", "topRight", "right", "rightTop", "rightBottom", "bottom", "bottomLeft", "bottomRight", "left", "leftTop", "leftBottom"];
    constructor(store: Store<AppState>, router: Router, utils: UtilsService, dashboardService: DashboardService, dashboardUtils: DashboardUtilsService, widgetService: WidgetService, translate: TranslateService, data: WidgetActionDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<WidgetActionDialogComponent, WidgetActionDescriptorInfo>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    displayShowWidgetActionForm(): boolean;
    getWidgetActionFunctionHelpId(): string | undefined;
    private updateShowWidgetActionForm;
    private updateActionTypeFormGroup;
    private updateStateDisplayTypeFormGroup;
    private getStateDisplayType;
    private setupSelectedDashboardStateIds;
    private setupFilteredDashboardStates;
    private fetchDashboardStates;
    private createFilterForDashboardState;
    clearTargetDashboardState(value?: string): void;
    private validateActionName;
    private checkActionName;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    actionSourceName(actionSource: WidgetActionSource): string;
    stateDisplayTypeName(displayType: stateDisplayType): string;
    popoverPlacementName(placement: PopoverPlacement): string;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetActionDialogComponent, [null, null, null, null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetActionDialogComponent, "tb-widget-action-dialog", never, {}, {}, never, never, false, never>;
}
export {};
