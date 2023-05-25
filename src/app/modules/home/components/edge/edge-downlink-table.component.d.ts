import { OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { EntitiesTableComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/entity/entities-table.component';
import { EdgeDownlinkTableConfig } from './edge-downlink-table-config';
import { DialogService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dialog.service';
import { AttributeService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/attribute.service';
import { EdgeService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/edge.service';
import { EntityService } from "../../../../../../../thingsboard/ui-ngx/src/app/core/http/entity.service";
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import * as i0 from "@angular/core";
export declare class EdgeDownlinkTableComponent implements OnInit {
    private attributeService;
    private datePipe;
    private dialogService;
    private dialog;
    private edgeService;
    private entityService;
    private translate;
    protected store: Store<AppState>;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    entitiesTable: EntitiesTableComponent;
    edgeDownlinkTableConfig: EdgeDownlinkTableConfig;
    constructor(attributeService: AttributeService, datePipe: DatePipe, dialogService: DialogService, dialog: MatDialog, edgeService: EdgeService, entityService: EntityService, translate: TranslateService, store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeDownlinkTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeDownlinkTableComponent, "tb-edge-downlink-table", never, { "active": "active"; "entityId": "entityId"; }, {}, never, never, false, never>;
}
