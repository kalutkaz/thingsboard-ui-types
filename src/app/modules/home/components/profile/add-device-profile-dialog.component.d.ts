import { AfterViewInit, ComponentFactoryResolver, Injector } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DialogComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { Router } from '@angular/router';
import { DeviceProfile, DeviceProfileType, DeviceTransportType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models';
import { DeviceProfileService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/device-profile.service';
import { EntityType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { ServiceType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/queue.models';
import { RuleChainType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/rule-chain.models';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
export interface AddDeviceProfileDialogData {
    deviceProfileName: string;
    transportType: DeviceTransportType;
}
export declare class AddDeviceProfileDialogComponent extends DialogComponent<AddDeviceProfileDialogComponent, DeviceProfile> implements AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddDeviceProfileDialogData;
    dialogRef: MatDialogRef<AddDeviceProfileDialogComponent, DeviceProfile>;
    private componentFactoryResolver;
    private injector;
    private breakpointObserver;
    private errorStateMatcher;
    private deviceProfileService;
    private fb;
    addDeviceProfileStepper: MatStepper;
    stepperOrientation: Observable<StepperOrientation>;
    stepperLabelPosition: Observable<'bottom' | 'end'>;
    selectedIndex: number;
    showNext: boolean;
    entityType: typeof EntityType;
    deviceProfileTypes: DeviceProfileType[];
    deviceProfileTypeTranslations: Map<DeviceProfileType, string>;
    deviceTransportTypeHints: Map<import("../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models").TransportType, string>;
    deviceTransportTypes: DeviceTransportType[];
    deviceTransportTypeTranslations: Map<import("../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models").TransportType, string>;
    deviceProfileDetailsFormGroup: UntypedFormGroup;
    transportConfigFormGroup: UntypedFormGroup;
    alarmRulesFormGroup: UntypedFormGroup;
    provisionConfigFormGroup: UntypedFormGroup;
    serviceType: ServiceType;
    edgeRuleChainType: RuleChainType;
    constructor(store: Store<AppState>, router: Router, data: AddDeviceProfileDialogData, dialogRef: MatDialogRef<AddDeviceProfileDialogComponent, DeviceProfile>, componentFactoryResolver: ComponentFactoryResolver, injector: Injector, breakpointObserver: BreakpointObserver, errorStateMatcher: ErrorStateMatcher, deviceProfileService: DeviceProfileService, fb: UntypedFormBuilder);
    private deviceProfileTransportTypeChanged;
    ngAfterViewInit(): void;
    cancel(): void;
    previousStep(): void;
    nextStep(): void;
    selectedForm(): UntypedFormGroup;
    add(): void;
    getFormLabel(index: number): string;
    changeStep($event: StepperSelectionEvent): void;
    private get maxStepperIndex();
    allValid(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AddDeviceProfileDialogComponent, [null, null, null, null, null, null, null, { skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AddDeviceProfileDialogComponent, "tb-add-device-profile-dialog", never, {}, {}, never, never, false, never>;
}
