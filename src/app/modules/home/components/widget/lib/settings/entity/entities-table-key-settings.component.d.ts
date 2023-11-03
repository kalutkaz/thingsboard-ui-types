import { WidgetSettings, WidgetSettingsComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import * as i0 from "@angular/core";
export declare class EntitiesTableKeySettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    entitiesTableKeySettingsForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntitiesTableKeySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntitiesTableKeySettingsComponent, "tb-entities-table-key-settings", never, {}, {}, never, never, false, never>;
}