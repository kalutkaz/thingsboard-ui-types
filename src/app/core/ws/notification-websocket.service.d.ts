import { NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { AuthService } from '../../../../../thingsboard/ui-ngx/src/app/core/auth/auth.service';
import { NotificationPluginCmdWrapper, NotificationSubscriber, WebsocketNotificationMsg } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/websocket/notification-ws.models';
import { WebsocketService } from '../../../../../thingsboard/ui-ngx/src/app/core/ws/websocket.service';
import * as i0 from "@angular/core";
export declare class NotificationWebsocketService extends WebsocketService<NotificationSubscriber> {
    protected store: Store<AppState>;
    protected authService: AuthService;
    protected ngZone: NgZone;
    protected window: Window;
    cmdWrapper: NotificationPluginCmdWrapper;
    constructor(store: Store<AppState>, authService: AuthService, ngZone: NgZone, window: Window);
    subscribe(subscriber: NotificationSubscriber): void;
    update(subscriber: NotificationSubscriber): void;
    unsubscribe(subscriber: NotificationSubscriber): void;
    processOnMessage(message: WebsocketNotificationMsg): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationWebsocketService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationWebsocketService>;
}
