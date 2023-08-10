import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AdminSettings, GeneralSettings } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/settings.models';
import { AdminService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/admin.service';
import { HasConfirmForm } from '../../../../../../../thingsboard/ui-ngx/src/app/core/guards/confirm-on-exit.guard';
import * as i0 from "@angular/core";
export declare class GeneralSettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private router;
    private adminService;
    fb: UntypedFormBuilder;
    generalSettings: UntypedFormGroup;
    adminSettings: AdminSettings<GeneralSettings>;
    constructor(store: Store<AppState>, router: Router, adminService: AdminService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    buildGeneralServerSettingsForm(): void;
    save(): void;
    confirmForm(): UntypedFormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<GeneralSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GeneralSettingsComponent, "tb-general-settings", never, {}, {}, never, never, false, never>;
}
