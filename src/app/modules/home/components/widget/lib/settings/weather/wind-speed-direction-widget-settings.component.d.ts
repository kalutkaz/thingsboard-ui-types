import { Injector } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { WindSpeedDirectionLayout } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/weather/wind-speed-direction-widget.models';
import * as i0 from "@angular/core";
export declare class WindSpeedDirectionWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    get hasCenterValue(): boolean;
    get majorTicksFontEnabled(): boolean;
    get minorTicksFontEnabled(): boolean;
    windSpeedDirectionLayouts: WindSpeedDirectionLayout[];
    windSpeedDirectionLayoutTranslationMap: Map<WindSpeedDirectionLayout, string>;
    windSpeedDirectionLayoutImageMap: Map<WindSpeedDirectionLayout, string>;
    windSpeedDirectionWidgetSettingsForm: UntypedFormGroup;
    centerValuePreviewFn: any;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _centerValuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<WindSpeedDirectionWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WindSpeedDirectionWidgetSettingsComponent, "tb-wind-speed-direction-widget-settings", never, {}, {}, never, never, false, never>;
}
