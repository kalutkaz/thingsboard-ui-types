import { WidgetSettings, WidgetSettingsComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { AbstractControl, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { ContentType } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/constants';
import * as i0 from "@angular/core";
export declare class GpioControlWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    gpioControlWidgetSettingsForm: UntypedFormGroup;
    contentTypes: typeof ContentType;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected doUpdateSettings(settingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    private prepareGpioListFormArray;
    gpioListFormArray(): UntypedFormArray;
    trackByGpioItem(index: number, gpioItemControl: AbstractControl): any;
    removeGpioItem(index: number): void;
    addGpioItem(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GpioControlWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GpioControlWidgetSettingsComponent, "tb-gpio-control-widget-settings", never, {}, {}, never, never, false, never>;
}
