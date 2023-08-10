import { ChangeDetectorRef, OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { AdminService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/admin.service';
import { UpdateMessage } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/settings.models';
import * as i0 from "@angular/core";
export declare class VersionInfoComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private cd;
    private adminService;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    updateMessage: UpdateMessage;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, adminService: AdminService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VersionInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VersionInfoComponent, "tb-version-info", never, {}, {}, never, never, false, never>;
}
