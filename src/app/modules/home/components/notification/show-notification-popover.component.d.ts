import { ChangeDetectorRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { TbPopoverComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Notification, NotificationRequest } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/notification.models';
import { NotificationWebsocketService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/ws/notification-websocket.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class ShowNotificationPopoverComponent extends PageComponent implements OnDestroy, OnInit {
    protected store: Store<AppState>;
    private notificationWsService;
    private zone;
    private cd;
    private router;
    onClose: () => void;
    counter: BehaviorSubject<number>;
    popoverComponent: TbPopoverComponent;
    private notificationSubscriber;
    private notificationCountSubscriber;
    notifications$: Observable<Notification[]>;
    constructor(store: Store<AppState>, notificationWsService: NotificationWebsocketService, zone: NgZone, cd: ChangeDetectorRef, router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    markAsRead(id: string): void;
    markAsAllRead($event: Event): void;
    viewAll($event: Event): void;
    trackById(index: number, item: NotificationRequest): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowNotificationPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShowNotificationPopoverComponent, "tb-show-notification-popover", never, { "onClose": "onClose"; "counter": "counter"; "popoverComponent": "popoverComponent"; }, {}, never, never, false, never>;
}
