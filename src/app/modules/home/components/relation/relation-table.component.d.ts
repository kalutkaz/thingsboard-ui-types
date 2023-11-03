import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { PageLink } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-link';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/services/dialog.service';
import { EntityRelationService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/entity-relation.service';
import { EntityRelation, EntityRelationInfo, EntitySearchDirection } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/relation.models';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { RelationsDatasource } from '../../models/datasource/relation-datasource';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RelationTableComponent extends PageComponent implements AfterViewInit, OnInit, OnDestroy {
    protected store: Store<AppState>;
    private entityRelationService;
    translate: TranslateService;
    dialog: MatDialog;
    private dialogService;
    private cd;
    private elementRef;
    private fb;
    directions: typeof EntitySearchDirection;
    directionTypes: string[];
    directionTypeTranslations: Map<EntitySearchDirection, string>;
    displayedColumns: string[];
    direction: EntitySearchDirection;
    pageLink: PageLink;
    hidePageSize: boolean;
    textSearchMode: boolean;
    dataSource: RelationsDatasource;
    activeValue: boolean;
    dirtyValue: boolean;
    entityIdValue: EntityId;
    viewsInited: boolean;
    set active(active: boolean);
    set entityId(entityId: EntityId);
    searchInputField: ElementRef;
    paginator: MatPaginator;
    sort: MatSort;
    textSearch: import("@angular/forms").FormControl<string>;
    private widgetResize$;
    private destroy$;
    constructor(store: Store<AppState>, entityRelationService: EntityRelationService, translate: TranslateService, dialog: MatDialog, dialogService: DialogService, cd: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateColumns(): void;
    directionChanged(direction: EntitySearchDirection): void;
    ngAfterViewInit(): void;
    updateData(reload?: boolean): void;
    enterFilterMode(): void;
    exitFilterMode(): void;
    resetSortAndFilter(update?: boolean): void;
    reloadRelations(): void;
    addRelation($event: Event): void;
    editRelation($event: Event, relation: EntityRelationInfo): void;
    deleteRelation($event: Event, relation: EntityRelationInfo): void;
    deleteRelations($event: Event): void;
    openRelationDialog($event: Event, relation?: EntityRelation): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RelationTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RelationTableComponent, "tb-relation-table", never, { "active": "active"; "entityId": "entityId"; }, {}, never, never, false, never>;
}
