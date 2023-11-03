import { OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { UntypedFormBuilder } from '@angular/forms';
import { TwoFactorAuthenticationService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/two-factor-authentication.service';
import { TwoFactorAuthProviderType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/two-factor-auth.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class TwoFactorAuthLoginComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private twoFactorAuthService;
    private authService;
    private translate;
    private fb;
    private providersInfo;
    private prevProvider;
    private timer;
    private minVerificationPeriod;
    private timerID;
    showResendAction: boolean;
    selectedProvider: TwoFactorAuthProviderType;
    allowProviders: TwoFactorAuthProviderType[];
    providersData: Map<TwoFactorAuthProviderType, import("../../../../../../../thingsboard/ui-ngx/src/app/shared/models/two-factor-auth.models").TwoFactorAuthProviderLoginData>;
    providerDescription: string;
    hideResendButton: boolean;
    countDownTime: number;
    maxLengthInput: number;
    inputMode: string;
    pattern: string;
    verificationForm: import("@angular/forms").UntypedFormGroup;
    constructor(store: Store<AppState>, twoFactorAuthService: TwoFactorAuthenticationService, authService: AuthService, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    sendVerificationCode(): void;
    selectProvider(type: TwoFactorAuthProviderType): void;
    sendCode($event?: Event): void;
    cancelLogin(): void;
    private updatedTime;
    static ɵfac: i0.ɵɵFactoryDeclaration<TwoFactorAuthLoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TwoFactorAuthLoginComponent, "tb-two-factor-auth-login", never, {}, {}, never, never, false, never>;
}
