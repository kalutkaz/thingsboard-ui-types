import { OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { HasConfirmForm } from '../../../../../../../thingsboard/ui-ngx/src/app/core/guards/confirm-on-exit.guard';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormGroup } from '@angular/forms';
import { RepositorySettingsComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/vc/repository-settings.component';
import * as i0 from "@angular/core";
export declare class RepositoryAdminSettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    repositorySettingsComponent: RepositorySettingsComponent;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    confirmForm(): UntypedFormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<RepositoryAdminSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RepositoryAdminSettingsComponent, "tb-repository-admin-settings", never, {}, {}, never, never, false, never>;
}
