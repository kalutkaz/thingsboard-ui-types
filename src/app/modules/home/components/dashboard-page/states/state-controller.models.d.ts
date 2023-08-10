import { IStateController, StateObject } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/api/widget-api.models';
import { DashboardState } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/dashboard.models';
export declare type StateControllerState = StateObject[];
export interface IStateControllerComponent extends IStateController {
    stateControllerInstanceId: string;
    state: string;
    currentState: string;
    syncStateWithQueryParam: boolean;
    isMobile: boolean;
    states: {
        [id: string]: DashboardState;
    };
    dashboardId: string;
    preservedState: any;
    reInit(): void;
    init(): void;
}
