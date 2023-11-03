import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { LoadState } from './interceptors/load.models';
import { AuthState } from './auth/auth.models';
import { SettingsState } from '../../../../thingsboard/ui-ngx/src/app/core/settings/settings.models';
import { Type } from '@angular/core';
import { NotificationState } from '../../../../thingsboard/ui-ngx/src/app/core/notification/notification.models';
export declare const reducers: ActionReducerMap<AppState>;
export declare const metaReducers: MetaReducer<AppState>[];
export declare const effects: Type<any>[];
export interface AppState {
    load: LoadState;
    auth: AuthState;
    settings: SettingsState;
    notification: NotificationState;
}
