import { NgZone, OnDestroy, OnInit } from '@angular/core';
import { StateObject, StateParams } from '@core/api/widget-api.models';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardState } from '@shared/models/dashboard.models';
import { StateControllerComponent } from './state-controller.component';
import { StatesControllerService } from '@home/components/dashboard-page/states/states-controller.service';
import { EntityId } from '@app/shared/models/id/entity-id';
import { UtilsService } from '@core/services/utils.service';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { EntityService } from '@core/http/entity.service';
import { MobileService } from '@core/services/mobile.service';
import * as i0 from "@angular/core";
export declare class DefaultStateControllerComponent extends StateControllerComponent implements OnInit, OnDestroy {
    protected router: Router;
    protected route: ActivatedRoute;
    protected ngZone: NgZone;
    protected statesControllerService: StatesControllerService;
    private utils;
    private entityService;
    private mobileService;
    private dashboardUtils;
    constructor(router: Router, route: ActivatedRoute, ngZone: NgZone, statesControllerService: StatesControllerService, utils: UtilsService, entityService: EntityService, mobileService: MobileService, dashboardUtils: DashboardUtilsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    init(): void;
    protected onMobileChanged(): void;
    protected onStateIdChanged(): void;
    protected onStatesChanged(): void;
    protected onStateChanged(): void;
    protected stateControllerId(): string;
    getStateParams(): StateParams;
    openState(id: string, params?: StateParams, openRightLayout?: boolean): void;
    pushAndOpenState(states: Array<StateObject>, openRightLayout?: boolean): void;
    updateState(id: string, params?: StateParams, openRightLayout?: boolean): void;
    getEntityId(entityParamName: string): EntityId;
    getStateId(): string;
    getStateIdAtIndex(index: number): string;
    getStateIndex(): number;
    getStateParamsByStateId(stateId: string): StateParams;
    navigatePrevState(index: number, params?: StateParams): void;
    resetState(): void;
    getStateName(id: string, state: DashboardState): string;
    getCurrentStateName(): string;
    displayStateSelection(): boolean;
    selectedStateIdChanged(): void;
    private parseState;
    private gotoState;
    private updateLocation;
    private getStateObjById;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultStateControllerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DefaultStateControllerComponent, "tb-default-state-controller", never, {}, {}, never, never, false, never>;
}
