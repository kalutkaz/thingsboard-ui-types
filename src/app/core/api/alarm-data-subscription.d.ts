import { DataKeyType } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/telemetry/telemetry.models';
import { DatasourceType } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { AlarmDataPageLink, EntityFilter, KeyFilter } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
import { SubscriptionTimewindow } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/time/time.models';
import { AlarmDataListener } from '../../../../../thingsboard/ui-ngx/src/app/core/api/alarm-data.service';
import { TelemetryWebsocketService } from '../../../../../thingsboard/ui-ngx/src/app/core/ws/telemetry-websocket.service';
export interface AlarmSubscriptionDataKey {
    name: string;
    type: DataKeyType;
}
export interface AlarmDataSubscriptionOptions {
    datasourceType: DatasourceType;
    dataKeys: Array<AlarmSubscriptionDataKey>;
    entityFilter?: EntityFilter;
    pageLink?: AlarmDataPageLink;
    keyFilters?: Array<KeyFilter>;
    additionalKeyFilters?: Array<KeyFilter>;
    subscriptionTimewindow?: SubscriptionTimewindow;
}
export declare class AlarmDataSubscription {
    private listener;
    private telemetryService;
    private alarmDataSubscriptionOptions;
    private datasourceType;
    private history;
    private realtime;
    private subscriber;
    private alarmDataCommand;
    private pageData;
    private prematureUpdates;
    private alarmIdToDataIndex;
    private subsTw;
    constructor(listener: AlarmDataListener, telemetryService: TelemetryWebsocketService);
    unsubscribe(): void;
    subscribe(): void;
    private resetData;
    private onPageData;
    private onDataUpdate;
}
