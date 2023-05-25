import { EntityTableConfig } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entities-table-config.models';
import { DatePipe } from '@angular/common';
import { Notification } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/notification.models';
import { NotificationService } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/http/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import * as i0 from "@angular/core";
export declare class InboxTableConfigResolver implements Resolve<EntityTableConfig<Notification>> {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<Notification>;
    private configureCellActions;
    private markAllRead;
    private markAsRead;
    private showNotification;
    static ɵfac: i0.ɵɵFactoryDeclaration<InboxTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InboxTableConfigResolver>;
}
