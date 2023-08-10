import { NgZone } from '@angular/core';
import { TelemetryPluginCmdsWrapper, TelemetrySubscriber, WebsocketDataMsg } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/telemetry/telemetry.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { AuthService } from '../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.service';
import { WebsocketService } from '../../../../../thingsboard/ui-ngx/src/app/core/ws/websocket.service';
import * as i0 from "@angular/core";
export declare class TelemetryWebsocketService extends WebsocketService<TelemetrySubscriber> {
    protected store: Store<AppState>;
    protected authService: AuthService;
    protected ngZone: NgZone;
    protected window: Window;
    cmdWrapper: TelemetryPluginCmdsWrapper;
    constructor(store: Store<AppState>, authService: AuthService, ngZone: NgZone, window: Window);
    subscribe(subscriber: TelemetrySubscriber): void;
    update(subscriber: TelemetrySubscriber): void;
    unsubscribe(subscriber: TelemetrySubscriber): void;
    processOnMessage(message: WebsocketDataMsg): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TelemetryWebsocketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TelemetryWebsocketService>;
}
