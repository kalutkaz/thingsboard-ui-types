import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { BingingMode, ServerSecurityConfig } from './lwm2m-profile-config.models';
import { DeviceProfileService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/device-profile.service';
import { Lwm2mSecurityType } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/lwm2m-security-config.models';
import * as i0 from "@angular/core";
export declare class Lwm2mDeviceConfigServerComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {
    fb: UntypedFormBuilder;
    private deviceProfileService;
    disabled: boolean;
    private destroy$;
    private isDataLoadedIntoCache;
    serverFormGroup: UntypedFormGroup;
    bindingModeTypes: BingingMode[];
    bindingModeTypeNamesMap: Map<BingingMode, string>;
    securityConfigLwM2MType: typeof Lwm2mSecurityType;
    securityConfigLwM2MTypes: string[];
    credentialTypeLwM2MNamesMap: Map<Lwm2mSecurityType, string>;
    publicKeyOrIdTooltipNamesMap: Map<Lwm2mSecurityType, string>;
    currentSecurityMode: any;
    bootstrapDisabled: boolean;
    removeServer: EventEmitter<any>;
    isTransportWasRunWithBootstrapChange: EventEmitter<boolean>;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, deviceProfileService: DeviceProfileService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(serverData: ServerSecurityConfig): void;
    registerOnChange(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnTouched(fn: any): void;
    private updateValidate;
    private clearValidators;
    private setValidators;
    private propagateChangeState;
    private getLwm2mBootstrapSecurityInfo;
    private changeSecurityHostPortFields;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mDeviceConfigServerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mDeviceConfigServerComponent, "tb-profile-lwm2m-device-config-server", never, {}, { "removeServer": "removeServer"; "isTransportWasRunWithBootstrapChange": "isTransportWasRunWithBootstrapChange"; }, never, never, false, never>;
}
