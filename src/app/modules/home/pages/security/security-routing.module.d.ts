import { Resolve, Routes } from '@angular/router';
import { User } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UserService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/user.service';
import { Observable } from 'rxjs';
import { TwoFactorAuthProviderType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/two-factor-auth.models';
import { TwoFactorAuthenticationService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/two-factor-authentication.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class UserProfileResolver implements Resolve<User> {
    private store;
    private userService;
    constructor(store: Store<AppState>, userService: UserService);
    resolve(): Observable<User>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserProfileResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserProfileResolver>;
}
export declare class UserTwoFAProvidersResolver implements Resolve<Array<TwoFactorAuthProviderType>> {
    private twoFactorAuthService;
    constructor(twoFactorAuthService: TwoFactorAuthenticationService);
    resolve(): Observable<Array<TwoFactorAuthProviderType>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserTwoFAProvidersResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserTwoFAProvidersResolver>;
}
export declare const securityRoutes: Routes;
export declare class SecurityRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SecurityRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SecurityRoutingModule>;
}
