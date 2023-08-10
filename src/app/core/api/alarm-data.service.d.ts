import { SubscriptionTimewindow } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/time/time.models';
import { Datasource } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { PageData } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-data';
import { AlarmData, AlarmDataPageLink, KeyFilter } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
import { TelemetryWebsocketService } from '../../../../../thingsboard/ui-ngx/src/app/core/ws/telemetry-websocket.service';
import { AlarmDataSubscription, AlarmDataSubscriptionOptions } from '../../../../../thingsboard/ui-ngx/src/app/core/api/alarm-data-subscription';
import * as i0 from "@angular/core";
export interface AlarmDataListener {
    subscriptionTimewindow?: SubscriptionTimewindow;
    alarmSource: Datasource;
    alarmsLoaded: (pageData: PageData<AlarmData>, allowedEntities: number, totalEntities: number) => void;
    alarmsUpdated: (update: Array<AlarmData>, pageData: PageData<AlarmData>) => void;
    alarmDataSubscriptionOptions?: AlarmDataSubscriptionOptions;
    subscription?: AlarmDataSubscription;
}
export declare class AlarmDataService {
    private telemetryService;
    constructor(telemetryService: TelemetryWebsocketService);
    subscribeForAlarms(listener: AlarmDataListener, pageLink: AlarmDataPageLink, keyFilters: KeyFilter[]): void;
    stopSubscription(listener: AlarmDataListener): void;
    private createAlarmSubscriptionOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlarmDataService>;
}
