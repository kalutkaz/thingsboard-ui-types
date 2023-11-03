import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UserSettingsService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/user-settings.service';
import { WidgetContext } from '../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { MatDialog } from '@angular/material/dialog';
import { GettingStarted } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/user-settings.models';
import { CdkStep, StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { Authority } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/authority.enum';
import * as i0 from "@angular/core";
export declare class GettingStartedWidgetComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private userSettingsService;
    private dialog;
    matStepper: MatStepper;
    ctx: WidgetContext;
    authority: typeof Authority;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    gettingStarted: GettingStarted;
    allCompleted: boolean;
    baseUrl: string;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, userSettingsService: UserSettingsService, dialog: MatDialog);
    ngOnInit(): void;
    ngOnDestroy(): void;
    isSelected(step: CdkStep): boolean;
    gettingStartedCompleted(): void;
    updateSelectedIndex(event: StepperSelectionEvent): void;
    updateCompletedSteps(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GettingStartedWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GettingStartedWidgetComponent, "tb-getting-started-widget", never, { "ctx": "ctx"; }, {}, never, never, false, never>;
}
