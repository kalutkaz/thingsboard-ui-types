import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { CellActionDescriptor, EntityTableColumn, EntityTableConfig, GroupActionDescriptor, HeaderActionDescriptor } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entity-component.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { CustomerService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/customer.service';
import { BroadcastService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/broadcast.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dialog.service';
import { Asset, AssetInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/asset.models';
import { AssetService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/asset.service';
import { AssetId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/asset-id';
import { HomeDialogsService } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/dialogs/home-dialogs.service';
import { EdgeService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/edge.service';
import * as i0 from "@angular/core";
export declare class AssetsTableConfigResolver implements Resolve<EntityTableConfig<AssetInfo>> {
    private store;
    private broadcast;
    private assetService;
    private customerService;
    private edgeService;
    private dialogService;
    private homeDialogs;
    private translate;
    private datePipe;
    private router;
    private dialog;
    private readonly config;
    private customerId;
    constructor(store: Store<AppState>, broadcast: BroadcastService, assetService: AssetService, customerService: CustomerService, edgeService: EdgeService, dialogService: DialogService, homeDialogs: HomeDialogsService, translate: TranslateService, datePipe: DatePipe, router: Router, dialog: MatDialog);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityTableConfig<AssetInfo>>;
    configureColumns(assetScope: string): Array<EntityTableColumn<AssetInfo>>;
    configureEntityFunctions(assetScope: string): void;
    configureCellActions(assetScope: string): Array<CellActionDescriptor<AssetInfo>>;
    configureGroupActions(assetScope: string): Array<GroupActionDescriptor<AssetInfo>>;
    configureAddActions(assetScope: string): Array<HeaderActionDescriptor>;
    importAssets($event: Event): void;
    private openAsset;
    addAssetsToCustomer($event: Event): void;
    makePublic($event: Event, asset: Asset): void;
    assignToCustomer($event: Event, assetIds: Array<AssetId>): void;
    unassignFromCustomer($event: Event, asset: AssetInfo): void;
    unassignAssetsFromCustomer($event: Event, assets: Array<AssetInfo>): void;
    onAssetAction(action: EntityAction<AssetInfo>, config: EntityTableConfig<AssetInfo>): boolean;
    addAssetsToEdge($event: Event): void;
    unassignFromEdge($event: Event, asset: AssetInfo): void;
    unassignAssetsFromEdge($event: Event, assets: Array<AssetInfo>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AssetsTableConfigResolver>;
}
