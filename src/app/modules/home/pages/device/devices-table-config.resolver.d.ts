import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { CellActionDescriptor, EntityTableColumn, EntityTableConfig, GroupActionDescriptor, HeaderActionDescriptor } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entity-component.models';
import { Device, DeviceInfo, DeviceInfoQuery } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { DeviceService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/device.service';
import { CustomerService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/customer.service';
import { BroadcastService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/broadcast.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dialog.service';
import { DeviceId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/device-id';
import { HomeDialogsService } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/dialogs/home-dialogs.service';
import { EdgeService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/edge.service';
import { PageLink } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class DevicesTableConfigResolver implements Resolve<EntityTableConfig<DeviceInfo>> {
    private store;
    private broadcast;
    private deviceService;
    private customerService;
    private dialogService;
    private edgeService;
    private homeDialogs;
    private translate;
    private datePipe;
    private router;
    private dialog;
    private readonly config;
    private customerId;
    constructor(store: Store<AppState>, broadcast: BroadcastService, deviceService: DeviceService, customerService: CustomerService, dialogService: DialogService, edgeService: EdgeService, homeDialogs: HomeDialogsService, translate: TranslateService, datePipe: DatePipe, router: Router, dialog: MatDialog);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<DeviceInfo>>;
    onLoadAction(route: ActivatedRoute): void;
    configureColumns(deviceScope: string): Array<EntityTableColumn<DeviceInfo>>;
    private deviceState;
    private deviceStateStyle;
    configureEntityFunctions(deviceScope: string): void;
    prepareDeviceInfoQuery(pageLink: PageLink): DeviceInfoQuery;
    configureCellActions(deviceScope: string): Array<CellActionDescriptor<DeviceInfo>>;
    configureGroupActions(deviceScope: string): Array<GroupActionDescriptor<DeviceInfo>>;
    configureAddActions(deviceScope: string): Array<HeaderActionDescriptor>;
    private openDevice;
    importDevices($event: Event): void;
    deviceWizard($event: Event): void;
    addDevicesToCustomer($event: Event): void;
    makePublic($event: Event, device: Device): void;
    assignToCustomer($event: Event, deviceIds: Array<DeviceId>): void;
    unassignFromCustomer($event: Event, device: DeviceInfo): void;
    unassignDevicesFromCustomer($event: Event, devices: Array<DeviceInfo>): void;
    manageCredentials($event: Event, device: Device): void;
    onDeviceAction(action: EntityAction<DeviceInfo>, config: EntityTableConfig<DeviceInfo>): boolean;
    addDevicesToEdge($event: Event): void;
    unassignFromEdge($event: Event, device: DeviceInfo): void;
    unassignDevicesFromEdge($event: Event, devices: Array<DeviceInfo>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DevicesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DevicesTableConfigResolver>;
}
