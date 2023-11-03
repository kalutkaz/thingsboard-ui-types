import { DataSetHolder, Datasource, widgetType } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { SubscriptionTimewindow } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/time/time.models';
import { EntityData, EntityDataPageLink, KeyFilter } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
import { PageData } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-data';
import { TelemetryWebsocketService } from '../../../../../thingsboard/ui-ngx/src/app/core/ws/telemetry-websocket.service';
import { UtilsService } from '../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import { EntityDataSubscription, EntityDataSubscriptionOptions } from '../../../../../thingsboard/ui-ngx/src/app/core/api/entity-data-subscription';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface EntityDataListener {
    subscriptionType: widgetType;
    useTimewindow?: boolean;
    subscriptionTimewindow?: SubscriptionTimewindow;
    latestTsOffset?: number;
    configDatasource: Datasource;
    configDatasourceIndex: number;
    dataLoaded: (pageData: PageData<EntityData>, data: Array<Array<DataSetHolder>>, datasourceIndex: number, pageLink: EntityDataPageLink) => void;
    dataUpdated: (data: DataSetHolder, datasourceIndex: number, dataIndex: number, dataKeyIndex: number, detectChanges: boolean, isLatest: boolean) => void;
    initialPageDataChanged?: (nextPageData: PageData<EntityData>) => void;
    forceReInit?: () => void;
    updateRealtimeSubscription?: () => SubscriptionTimewindow;
    setRealtimeSubscription?: (subscriptionTimewindow: SubscriptionTimewindow) => void;
    subscriptionOptions?: EntityDataSubscriptionOptions;
    subscription?: EntityDataSubscription;
}
export interface EntityDataLoadResult {
    pageData: PageData<EntityData>;
    data: Array<Array<DataSetHolder>>;
    datasourceIndex: number;
    pageLink: EntityDataPageLink;
}
export declare class EntityDataService {
    private telemetryService;
    private utils;
    constructor(telemetryService: TelemetryWebsocketService, utils: UtilsService);
    private static isUnresolvedDatasource;
    private static toSubscriptionDataKey;
    prepareSubscription(listener: EntityDataListener, ignoreDataUpdateOnIntervalTick?: boolean): Observable<EntityDataLoadResult>;
    startSubscription(listener: EntityDataListener): void;
    subscribeForPaginatedData(listener: EntityDataListener, pageLink: EntityDataPageLink, keyFilters: KeyFilter[], ignoreDataUpdateOnIntervalTick?: boolean): Observable<EntityDataLoadResult>;
    stopSubscription(listener: EntityDataListener): void;
    private createSubscriptionOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityDataService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityDataService>;
}
