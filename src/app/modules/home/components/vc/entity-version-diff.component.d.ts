import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { EntitiesVersionControlService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/entities-version-control.service';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { TbPopoverComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.component';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class EntityVersionDiffComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private entitiesVersionControlService;
    private cd;
    private renderer;
    private elementRef;
    private viewContainerRef;
    private popoverService;
    diffViewerElmRef: ElementRef<HTMLElement>;
    versionName: string;
    versionId: string;
    entityId: EntityId;
    externalEntityId: EntityId;
    versionRestored: EventEmitter<void>;
    onClose: () => void;
    popoverComponent: TbPopoverComponent;
    differ: AceDiff;
    contentReady: boolean;
    preferredDiffHeight: string;
    isFullscreen: boolean;
    hasNext: boolean;
    hasPrevious: boolean;
    diffCount: number;
    constructor(store: Store<AppState>, entitiesVersionControlService: EntitiesVersionControlService, cd: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef, viewContainerRef: ViewContainerRef, popoverService: TbPopoverService);
    ngOnInit(): void;
    versionIdContent(): string;
    prevDifference($event: Event): void;
    nextDifference($event: Event): void;
    private moveToDiff;
    onFullscreenChanged(fullscreen: boolean): void;
    private getDiffs;
    private getCurrentRow;
    private nextDiff;
    private prevDiff;
    private findNextLine;
    private findPrevLine;
    private updateHasNextAndPrevious;
    private resizeEditors;
    ngOnDestroy(): void;
    close(): void;
    toggleRestoreEntityVersion($event: Event, restoreVersionButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityVersionDiffComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityVersionDiffComponent, "tb-entity-version-diff", never, { "versionName": "versionName"; "versionId": "versionId"; "entityId": "entityId"; "externalEntityId": "externalEntityId"; "onClose": "onClose"; "popoverComponent": "popoverComponent"; }, { "versionRestored": "versionRestored"; }, never, never, false, never>;
}
