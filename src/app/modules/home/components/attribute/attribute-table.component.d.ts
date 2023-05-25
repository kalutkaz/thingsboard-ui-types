import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { PageLink } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-link';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dialog.service';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { AttributeData, LatestTelemetry, TelemetryType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/telemetry/telemetry.models';
import { AttributeDatasource } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/datasource/attribute-datasource';
import { AttributeService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/attribute.service';
import { Overlay } from '@angular/cdk/overlay';
import { TelemetryWebsocketService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/ws/telemetry-websocket.service';
import { WidgetsBundle } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widgets-bundle.model';
import { Widget } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { IAliasController } from '../../../../../../../thingsboard/ui-ngx/src/app/core/api/widget-api.models';
import { UtilsService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import { DashboardUtilsService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dashboard-utils.service';
import { WidgetService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/widget.service';
import { EntityService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/entity.service';
import * as i0 from "@angular/core";
export declare class AttributeTableComponent extends PageComponent implements AfterViewInit, OnInit {
    protected store: Store<AppState>;
    private attributeService;
    private telemetryWsService;
    translate: TranslateService;
    dialog: MatDialog;
    private overlay;
    private viewContainerRef;
    private dialogService;
    private entityService;
    private utils;
    private dashboardUtils;
    private widgetService;
    private zone;
    private cd;
    private elementRef;
    telemetryTypeTranslationsMap: Map<TelemetryType, string>;
    isClientSideTelemetryTypeMap: Map<TelemetryType, boolean>;
    latestTelemetryTypes: typeof LatestTelemetry;
    mode: 'default' | 'widget';
    attributeScopes: Array<string>;
    attributeScope: TelemetryType;
    toTelemetryTypeFunc: (val: string) => TelemetryType;
    displayedColumns: string[];
    pageLink: PageLink;
    textSearchMode: boolean;
    dataSource: AttributeDatasource;
    hidePageSize: boolean;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    attributeScopeSelectionReadonly: boolean;
    viewsInited: boolean;
    selectedWidgetsBundleAlias: string;
    widgetBundleSet: boolean;
    widgetsLoaded: boolean;
    widgetsCarouselIndex: number;
    widgetsList: Array<Array<Widget>>;
    widgetsListCache: Array<Array<Widget>>;
    aliasController: IAliasController;
    private widgetDatasource;
    private widgetResize$;
    private disableAttributeScopeSelectionValue;
    get disableAttributeScopeSelection(): boolean;
    set disableAttributeScopeSelection(value: boolean);
    defaultAttributeScope: TelemetryType;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    entityName: string;
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    constructor(store: Store<AppState>, attributeService: AttributeService, telemetryWsService: TelemetryWebsocketService, translate: TranslateService, dialog: MatDialog, overlay: Overlay, viewContainerRef: ViewContainerRef, dialogService: DialogService, entityService: EntityService, utils: UtilsService, dashboardUtils: DashboardUtilsService, widgetService: WidgetService, zone: NgZone, cd: ChangeDetectorRef, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    attributeScopeChanged(attributeScope: TelemetryType): void;
    ngAfterViewInit(): void;
    updateData(reload?: boolean): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    resetSortAndFilter(update?: boolean): void;
    reloadAttributes(): void;
    addAttribute($event: Event): void;
    editAttribute($event: Event, attribute: AttributeData): void;
    deleteAttributes($event: Event): void;
    enterWidgetMode(): void;
    onWidgetsCarouselIndexChanged(): void;
    onWidgetsBundleChanged(widgetsBundle: WidgetsBundle): void;
    addWidgetToDashboard(): void;
    exitWidgetMode(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AttributeTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AttributeTableComponent, "tb-attribute-table", never, { "disableAttributeScopeSelection": "disableAttributeScopeSelection"; "defaultAttributeScope": "defaultAttributeScope"; "active": "active"; "entityId": "entityId"; "entityName": "entityName"; }, {}, never, never, false, never>;
}
