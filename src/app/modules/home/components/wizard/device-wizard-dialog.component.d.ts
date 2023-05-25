import { OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { DialogComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import { Router } from '@angular/router';
import { DeviceProfileInfo, DeviceTransportType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/device.models';
import { MatStepper } from '@angular/material/stepper';
import { AddEntityDialogData } from '../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/entity/entity-component.models';
import { BaseData } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/base-data';
import { EntityType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/entity-type.models';
import { DeviceProfileService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/device-profile.service';
import { EntityId } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/id/entity-id';
import { DeviceService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/device.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ServiceType } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/queue.models';
import * as i0 from "@angular/core";
export declare class DeviceWizardDialogComponent extends DialogComponent<DeviceWizardDialogComponent, boolean> implements OnDestroy, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: AddEntityDialogData<BaseData<EntityId>>;
    private errorStateMatcher;
    dialogRef: MatDialogRef<DeviceWizardDialogComponent, boolean>;
    private deviceProfileService;
    private deviceService;
    private breakpointObserver;
    private fb;
    addDeviceWizardStepper: MatStepper;
    selectedIndex: number;
    showNext: boolean;
    createProfile: boolean;
    entityType: typeof EntityType;
    deviceTransportTypes: DeviceTransportType[];
    deviceTransportTypeTranslations: Map<DeviceTransportType, string>;
    deviceTransportTypeHints: Map<DeviceTransportType, string>;
    deviceWizardFormGroup: UntypedFormGroup;
    transportConfigFormGroup: UntypedFormGroup;
    alarmRulesFormGroup: UntypedFormGroup;
    provisionConfigFormGroup: UntypedFormGroup;
    credentialsFormGroup: UntypedFormGroup;
    customerFormGroup: UntypedFormGroup;
    labelPosition: MatStepper['labelPosition'];
    serviceType: ServiceType;
    private subscriptions;
    private currentDeviceProfileTransportType;
    constructor(store: Store<AppState>, router: Router, data: AddEntityDialogData<BaseData<EntityId>>, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<DeviceWizardDialogComponent, boolean>, deviceProfileService: DeviceProfileService, deviceService: DeviceService, breakpointObserver: BreakpointObserver, fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    previousStep(): void;
    nextStep(): void;
    getFormLabel(index: number): string;
    get maxStepperIndex(): number;
    private deviceProfileTransportTypeChanged;
    add(): void;
    get deviceTransportType(): DeviceTransportType;
    deviceProfileChanged(deviceProfile: DeviceProfileInfo): void;
    private createDeviceProfile;
    private createDevice;
    private saveCredentials;
    allValid(): boolean;
    changeStep($event: StepperSelectionEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceWizardDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceWizardDialogComponent, "tb-device-wizard", never, {}, {}, never, never, false, never>;
}
