import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityId } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { AttributeService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/attribute.service';
import { TranslateService } from '@ngx-translate/core';
import { AttributeData } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/telemetry/telemetry.models';
import { PageComponent } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { PageLink } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-link';
import { MatSort } from '@angular/material/sort';
import { TelemetryWebsocketService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/ws/telemetry-websocket.service';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/services/dialog.service';
import { WidgetContext } from '../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { UtilsService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import { GatewayLogLevel } from './gateway-widget.models';
import * as i0 from "@angular/core";
export declare class GatewayConnectorComponent extends PageComponent implements AfterViewInit {
    protected store: Store<AppState>;
    private fb;
    private translate;
    private attributeService;
    private dialogService;
    private telemetryWsService;
    private zone;
    private utils;
    private cd;
    pageLink: PageLink;
    dataSource: MatTableDataSource<AttributeData>;
    displayedColumns: string[];
    gatewayConnectorDefaultTypes: Map<string, string>;
    ctx: WidgetContext;
    device: EntityId;
    nameInput: ElementRef;
    sort: MatSort;
    connectorForm: FormGroup;
    textSearchMode: boolean;
    activeConnectors: Array<string>;
    gatewayLogLevel: GatewayLogLevel[];
    private inactiveConnectors;
    private attributeDataSource;
    private inactiveConnectorsDataSource;
    private serverDataSource;
    private activeData;
    private inactiveData;
    private sharedAttributeData;
    private initialConnector;
    private subscriptionOptions;
    private subscription;
    constructor(store: Store<AppState>, fb: FormBuilder, translate: TranslateService, attributeService: AttributeService, dialogService: DialogService, telemetryWsService: TelemetryWebsocketService, zone: NgZone, utils: UtilsService, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    private uniqNameRequired;
    saveConnector(): void;
    private updateData;
    isConnectorSynced(attribute: AttributeData): boolean;
    private combineData;
    addAttribute(): void;
    private clearOutConnectorForm;
    selectConnector(attribute: AttributeData): void;
    isSameConnector(attribute: AttributeData): boolean;
    showToast(message: string): void;
    returnType(attribute: AttributeData): string;
    deleteConnector(attribute: AttributeData, $event: Event): void;
    connectorLogs(attribute: AttributeData, $event: Event): void;
    connectorRpc(attribute: AttributeData, $event: Event): void;
    enableConnector(attribute: AttributeData): void;
    private onDataUpdateError;
    private onDataUpdated;
    private generateSubscription;
    getErrorsCount(attribute: AttributeData): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayConnectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayConnectorComponent, "tb-gateway-connector", never, { "ctx": "ctx"; "device": "device"; }, {}, never, never, false, never>;
}