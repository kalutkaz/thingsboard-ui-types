import { OnInit } from '@angular/core';
import { UserService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/user.service';
import { User } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/user.model';
import { Authority } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/authority.enum';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HasConfirmForm } from '../../../../../../../thingsboard/ui-ngx/src/app/core/guards/confirm-on-exit.guard';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.service';
import * as i0 from "@angular/core";
export declare class ProfileComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private route;
    private userService;
    private authService;
    private translate;
    fb: UntypedFormBuilder;
    authorities: typeof Authority;
    profile: UntypedFormGroup;
    user: User;
    languageList: any;
    private readonly authUser;
    constructor(store: Store<AppState>, route: ActivatedRoute, userService: UserService, authService: AuthService, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    private buildProfileForm;
    save(): void;
    private userLoaded;
    confirmForm(): UntypedFormGroup;
    isSysAdmin(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileComponent, "tb-profile", never, {}, {}, never, never, false, never>;
}
