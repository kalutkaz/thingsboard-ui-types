import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HasConfirmForm } from '../../../../../../../thingsboard/ui-ngx/src/app/core/guards/confirm-on-exit.guard';
import { DashboardService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/dashboard.service';
import * as i0 from "@angular/core";
export declare class HomeSettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private router;
    private dashboardService;
    fb: UntypedFormBuilder;
    homeSettings: UntypedFormGroup;
    constructor(store: Store<AppState>, router: Router, dashboardService: DashboardService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    save(): void;
    confirmForm(): UntypedFormGroup;
    private setHomeDashboardInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeSettingsComponent, "tb-home-settings", never, {}, {}, never, never, false, never>;
}
