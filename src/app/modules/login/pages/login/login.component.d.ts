import { OnInit } from '@angular/core';
import { AuthService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { OAuth2ClientInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/oauth2.models';
import * as i0 from "@angular/core";
export declare class LoginComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    private authService;
    fb: UntypedFormBuilder;
    private router;
    loginFormGroup: import("@angular/forms").UntypedFormGroup;
    oauth2Clients: Array<OAuth2ClientInfo>;
    constructor(store: Store<AppState>, authService: AuthService, fb: UntypedFormBuilder, router: Router);
    ngOnInit(): void;
    login(): void;
    getOAuth2Uri(oauth2Client: OAuth2ClientInfo): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoginComponent, "tb-login", never, {}, {}, never, never, false, never>;
}
