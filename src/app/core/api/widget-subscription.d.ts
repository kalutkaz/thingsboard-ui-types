import { IWidgetSubscription, SubscriptionEntityInfo, WidgetSubscriptionCallbacks, WidgetSubscriptionContext, WidgetSubscriptionOptions } from '../../../../../thingsboard/ui-ngx/src/app/core/api/widget-api.models';
import { DataSetHolder, Datasource, DatasourceData, LegendConfig, LegendData, widgetType } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { HttpErrorResponse } from '@angular/common/http';
import { ComparisonDuration, SubscriptionTimewindow, Timewindow, WidgetTimewindow } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/time/time.models';
import { Observable, Subject } from 'rxjs';
import { CancelAnimationFrame } from '../../../../../thingsboard/ui-ngx/src/app/core/services/raf.service';
import { PageData } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-data';
import { EntityDataListener } from '../../../../../thingsboard/ui-ngx/src/app/core/api/entity-data.service';
import { AlarmData, AlarmDataPageLink, EntityDataPageLink, KeyFilter } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/query/query.models';
import { AlarmDataListener } from '../../../../../thingsboard/ui-ngx/src/app/core/api/alarm-data.service';
import { EventEmitter } from '@angular/core';
export declare class WidgetSubscription implements IWidgetSubscription {
    options: WidgetSubscriptionOptions;
    id: string;
    ctx: WidgetSubscriptionContext;
    type: widgetType;
    callbacks: WidgetSubscriptionCallbacks;
    timeWindow: WidgetTimewindow;
    originalTimewindow: Timewindow;
    timeWindowConfig: Timewindow;
    timezone: string;
    subscriptionTimewindow: SubscriptionTimewindow;
    useDashboardTimewindow: boolean;
    useTimewindow: boolean;
    onTimewindowChangeFunction: (timewindow: Timewindow) => Timewindow;
    tsOffset: number;
    hasDataPageLink: boolean;
    singleEntity: boolean;
    pageSize: number;
    warnOnPageDataOverflow: boolean;
    ignoreDataUpdateOnIntervalTick: boolean;
    datasourcePages: PageData<Datasource>[];
    dataPages: PageData<Array<DatasourceData>>[];
    entityDataListeners: Array<EntityDataListener>;
    configuredDatasources: Array<Datasource>;
    data: Array<DatasourceData>;
    latestData: Array<DatasourceData>;
    datasources: Array<Datasource>;
    hiddenData: Array<DataSetHolder>;
    legendData: LegendData;
    legendConfig: LegendConfig;
    caulculateLegendData: boolean;
    displayLegend: boolean;
    stateData: boolean;
    datasourcesOptional: boolean;
    decimals: number;
    units: string;
    comparisonEnabled: boolean;
    timeForComparison: ComparisonDuration;
    comparisonCustomIntervalValue: number;
    comparisonTimeWindow: WidgetTimewindow;
    timewindowForComparison: SubscriptionTimewindow;
    alarms: PageData<AlarmData>;
    alarmSource: Datasource;
    alarmDataListener: AlarmDataListener;
    loadingData: boolean;
    targetDeviceAliasIds?: Array<string>;
    targetDeviceIds?: Array<string>;
    executingRpcRequest: boolean;
    rpcEnabled: boolean;
    rpcErrorText: string;
    rpcRejection: HttpErrorResponse;
    init$: Observable<IWidgetSubscription>;
    cafs: {
        [cafId: string]: CancelAnimationFrame;
    };
    hasResolvedData: boolean;
    targetDeviceAliasId: string;
    targetDeviceId: string;
    targetDeviceName: string;
    executingSubjects: Array<Subject<void>>;
    subscribed: boolean;
    hasLatestData: boolean;
    widgetTimewindowChangedSubject: Subject<WidgetTimewindow>;
    widgetTimewindowChanged$: Observable<WidgetTimewindow>;
    paginatedDataSubscriptionUpdated: EventEmitter<void>;
    constructor(subscriptionContext: WidgetSubscriptionContext, options: WidgetSubscriptionOptions);
    private initRpc;
    private initAlarmSubscription;
    private configureAlarmsData;
    private initDataSubscription;
    private prepareDataSubscriptions;
    private resetData;
    getFirstEntityInfo(): SubscriptionEntityInfo;
    onAliasesChanged(aliasIds: Array<string>): boolean;
    onFiltersChanged(filterIds: Array<string>): boolean;
    private onDataUpdated;
    private onLatestDataUpdated;
    private onSubscriptionMessage;
    onDashboardTimewindowChanged(newDashboardTimewindow: Timewindow): void;
    updateDataVisibility(index: number): void;
    updateTimewindowConfig(newTimewindow: Timewindow): void;
    onResetTimewindow(): void;
    onUpdateTimewindow(startTimeMs: number, endTimeMs: number, interval?: number): void;
    sendOneWayCommand(method: string, params?: any, timeout?: number, persistent?: boolean, persistentPollingInterval?: number, retries?: number, additionalInfo?: any, requestUUID?: string): Observable<any>;
    sendTwoWayCommand(method: string, params?: any, timeout?: number, persistent?: boolean, persistentPollingInterval?: number, retries?: number, additionalInfo?: any, requestUUID?: string): Observable<any>;
    clearRpcError(): void;
    completedCommand(): void;
    sendCommand(oneWayElseTwoWay: boolean, method: string, params?: any, timeout?: number, persistent?: boolean, persistentPollingInterval?: number, retries?: number, additionalInfo?: any, requestUUID?: string): Observable<any>;
    update(isTimewindowTypeChanged?: boolean): void;
    subscribe(): void;
    subscribeAllForPaginatedData(pageLink: EntityDataPageLink, keyFilters: KeyFilter[]): Observable<any>;
    stopSubscription(datasourceIndex: number): void;
    subscribeForPaginatedData(datasourceIndex: number, pageLink: EntityDataPageLink, keyFilters: KeyFilter[]): Observable<any>;
    subscribeForAlarms(pageLink: AlarmDataPageLink, keyFilters: KeyFilter[]): void;
    private doSubscribe;
    private updateDataTimewindow;
    private dataSubscribe;
    unsubscribe(): void;
    private alarmsUnsubscribe;
    private checkRpcTarget;
    private checkAlarmSource;
    private checkAlarmSourceFilters;
    private updateAlarmSubscription;
    private updateAlarmDataSubscription;
    private checkSubscriptions;
    private checkSubscriptionsFilters;
    private updateDataSubscriptions;
    private updatePaginatedDataSubscriptions;
    isDataResolved(): boolean;
    destroy(): void;
    private notifyDataLoading;
    private notifyDataLoaded;
    private updateTimewindow;
    private updateTsOffset;
    private updateRealtimeSubscription;
    private updateComparisonTimewindow;
    private updateSubscriptionForComparison;
    private initialPageDataChanged;
    private forceReInit;
    private dataLoaded;
    private configureLoadedData;
    private entityDataToDatasourceData;
    private entityDataToDatasource;
    private dataUpdated;
    private processDataUpdated;
    private processLatestDataUpdated;
    private alarmsLoaded;
    private alarmsUpdated;
    private updateLegend;
    private loadStDiff;
}
