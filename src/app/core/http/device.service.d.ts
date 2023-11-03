import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-link';
import { PageData } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-data';
import { ClaimRequest, ClaimResult, Device, DeviceCredentials, DeviceInfo, DeviceInfoQuery, DeviceSearchQuery, PublishLaunchCommand, PublishTelemetryCommand } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models';
import { EntitySubtype } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { BulkImportRequest, BulkImportResult } from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/import-export/import-export.models';
import { PersistentRpc, RpcStatus } from '../../../../../thingsboard/ui-ngx/src/app/shared/models/rpc.models';
import * as i0 from "@angular/core";
export declare class DeviceService {
    private http;
    constructor(http: HttpClient);
    getDeviceInfosByQuery(deviceInfoQuery: DeviceInfoQuery, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    getTenantDeviceInfos(pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    getTenantDeviceInfosByDeviceProfileId(pageLink: PageLink, deviceProfileId?: string, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    getCustomerDeviceInfos(customerId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    getCustomerDeviceInfosByDeviceProfileId(customerId: string, pageLink: PageLink, deviceProfileId?: string, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    getDevice(deviceId: string, config?: RequestConfig): Observable<Device>;
    getDevices(deviceIds: Array<string>, config?: RequestConfig): Observable<Array<Device>>;
    getDeviceInfo(deviceId: string, config?: RequestConfig): Observable<DeviceInfo>;
    saveDevice(device: Device, config?: RequestConfig): Observable<Device>;
    saveDeviceWithCredentials(device: Device, credentials: DeviceCredentials, config?: RequestConfig): Observable<Device>;
    deleteDevice(deviceId: string, config?: RequestConfig): Observable<Object>;
    getDeviceTypes(config?: RequestConfig): Observable<Array<EntitySubtype>>;
    getDeviceCredentials(deviceId: string, sync?: boolean, config?: RequestConfig): Observable<DeviceCredentials>;
    saveDeviceCredentials(deviceCredentials: DeviceCredentials, config?: RequestConfig): Observable<DeviceCredentials>;
    makeDevicePublic(deviceId: string, config?: RequestConfig): Observable<Device>;
    assignDeviceToCustomer(customerId: string, deviceId: string, config?: RequestConfig): Observable<Device>;
    unassignDeviceFromCustomer(deviceId: string, config?: RequestConfig): Observable<Object>;
    sendOneWayRpcCommand(deviceId: string, requestBody: any, config?: RequestConfig): Observable<any>;
    sendTwoWayRpcCommand(deviceId: string, requestBody: any, config?: RequestConfig): Observable<any>;
    getPersistedRpc(rpcId: string, fullResponse?: boolean, config?: RequestConfig): Observable<PersistentRpc>;
    deletePersistedRpc(rpcId: string, config?: RequestConfig): Observable<PersistentRpc>;
    getPersistedRpcRequests(deviceId: string, pageLink: PageLink, rpcStatus?: RpcStatus, config?: RequestConfig): Observable<PageData<PersistentRpc>>;
    findByQuery(query: DeviceSearchQuery, config?: RequestConfig): Observable<Array<Device>>;
    findByName(deviceName: string, config?: RequestConfig): Observable<Device>;
    claimDevice(deviceName: string, claimRequest: ClaimRequest, config?: RequestConfig): Observable<ClaimResult>;
    unclaimDevice(deviceName: string, config?: RequestConfig): Observable<Object>;
    assignDeviceToEdge(edgeId: string, deviceId: string, config?: RequestConfig): Observable<Device>;
    unassignDeviceFromEdge(edgeId: string, deviceId: string, config?: RequestConfig): Observable<Object>;
    getEdgeDevices(edgeId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<DeviceInfo>>;
    bulkImportDevices(entitiesData: BulkImportRequest, config?: RequestConfig): Observable<BulkImportResult>;
    getDevicePublishTelemetryCommands(deviceId: string, config?: RequestConfig): Observable<PublishTelemetryCommand>;
    getDevicePublishLaunchCommands(deviceId: string, config?: RequestConfig): Observable<PublishLaunchCommand>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeviceService>;
}
