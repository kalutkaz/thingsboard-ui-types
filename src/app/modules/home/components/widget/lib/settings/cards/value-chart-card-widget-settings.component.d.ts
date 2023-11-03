import { Injector } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import * as i0 from "@angular/core";
export declare class ValueChartCardWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    valueChartCardLayouts: import("../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/value-chart-card-widget.models").ValueChartCardLayout[];
    valueChartCardLayoutTranslationMap: Map<import("../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/value-chart-card-widget.models").ValueChartCardLayout, string>;
    valueChartCardLayoutImageMap: Map<import("../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/value-chart-card-widget.models").ValueChartCardLayout, string>;
    valueChartCardWidgetSettingsForm: UntypedFormGroup;
    valuePreviewFn: any;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueChartCardWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueChartCardWidgetSettingsComponent, "tb-value-chart-card-widget-settings", never, {}, {}, never, never, false, never>;
}
