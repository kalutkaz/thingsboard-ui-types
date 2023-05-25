import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UserSettingsService } from '../../../../../thingsboard/ui-ngx/src/app/core/http/user-settings.service';
import { AuthActions } from '../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.actions';
import * as i0 from "@angular/core";
export declare class AuthEffects {
    private actions$;
    private store;
    private userSettingsService;
    constructor(actions$: Actions<AuthActions>, store: Store<AppState>, userSettingsService: UserSettingsService);
    persistOpenedMenuSections: import("rxjs").Observable<void> & import("@ngrx/effects").CreateEffectMetadata;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthEffects>;
}
