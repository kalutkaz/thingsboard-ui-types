import { OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { HasConfirmForm } from '../../../../../../../thingsboard/ui-ngx/src/app/core/guards/confirm-on-exit.guard';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormGroup } from '@angular/forms';
import { AutoCommitSettingsComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/vc/auto-commit-settings.component';
import { RepositorySettingsComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/vc/repository-settings.component';
import * as i0 from "@angular/core";
export declare class AutoCommitAdminSettingsComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    repositorySettingsComponent: RepositorySettingsComponent;
    autoCommitSettingsComponent: AutoCommitSettingsComponent;
    hasRepository$: import("rxjs").Observable<boolean>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    confirmForm(): UntypedFormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutoCommitAdminSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutoCommitAdminSettingsComponent, "tb-auto-commit-admin-settings", never, {}, {}, never, never, false, never>;
}
