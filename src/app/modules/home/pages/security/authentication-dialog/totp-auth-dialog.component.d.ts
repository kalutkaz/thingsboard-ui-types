import { ElementRef } from '@angular/core';
import { DialogComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TwoFactorAuthenticationService } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/http/two-factor-authentication.service';
import { MatStepper } from '@angular/material/stepper';
import * as i0 from "@angular/core";
export declare class TotpAuthDialogComponent extends DialogComponent<TotpAuthDialogComponent> {
    protected store: Store<AppState>;
    protected router: Router;
    private twoFaService;
    dialogRef: MatDialogRef<TotpAuthDialogComponent>;
    fb: UntypedFormBuilder;
    private authAccountConfig;
    private config;
    totpConfigForm: UntypedFormGroup;
    totpAuthURL: string;
    stepper: MatStepper;
    canvasRef: ElementRef<HTMLCanvasElement>;
    constructor(store: Store<AppState>, router: Router, twoFaService: TwoFactorAuthenticationService, dialogRef: MatDialogRef<TotpAuthDialogComponent>, fb: UntypedFormBuilder);
    onSaveConfig(): void;
    closeDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TotpAuthDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TotpAuthDialogComponent, "tb-totp-auth-dialog", never, {}, {}, never, never, false, never>;
}
