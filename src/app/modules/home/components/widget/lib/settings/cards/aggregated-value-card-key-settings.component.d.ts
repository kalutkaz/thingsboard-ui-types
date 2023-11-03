import { WidgetSettings, WidgetSettingsComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { AggregatedValueCardKeyPosition } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/aggregated-value-card.models';
import * as i0 from "@angular/core";
export declare class AggregatedValueCardKeySettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    aggregatedValueCardKeyPositions: AggregatedValueCardKeyPosition[];
    aggregatedValueCardKeyPositionTranslationMap: Map<AggregatedValueCardKeyPosition, string>;
    aggregatedValueCardKeySettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregatedValueCardKeySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregatedValueCardKeySettingsComponent, "tb-aggregated-value-card-key-settings", never, {}, {}, never, never, false, never>;
}
