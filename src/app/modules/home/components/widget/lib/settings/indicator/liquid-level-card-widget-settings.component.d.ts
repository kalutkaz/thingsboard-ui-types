import { ChangeDetectorRef, Injector } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { WidgetConfigComponentData } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { LevelCardLayout, LiquidWidgetDataSourceType, Shapes } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/indicator/liquid-level-widget.models';
import { UnitsType } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/unit.models';
import { ImageCardsSelectComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/settings/common/image-cards-select.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ResourcesService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/services/resources.service';
import { UtilsService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import { EntityService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/entity.service';
import * as i0 from "@angular/core";
export declare class LiquidLevelCardWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    private resourcesService;
    private sanitizer;
    private cd;
    private utils;
    private entityService;
    layoutsImageCardsSelect: ImageCardsSelectComponent;
    shapesImageCardsSelect: ImageCardsSelectComponent;
    get volumeInput(): boolean;
    private get datasource();
    LevelCardLayout: typeof LevelCardLayout;
    LevelCardLayouts: LevelCardLayout[];
    LevelCardLayoutTranslationMap: Map<LevelCardLayout, string>;
    DataSourceType: typeof LiquidWidgetDataSourceType;
    DataSourceTypes: LiquidWidgetDataSourceType[];
    DataSourceTypeTranslations: Map<LiquidWidgetDataSourceType, string>;
    shapes: Shapes[];
    shapesImageMap: Map<Shapes, string>;
    ShapesTranslationMap: Map<Shapes, string>;
    unitsType: typeof UnitsType;
    levelCardWidgetSettingsForm: FormGroup;
    valuePreviewFn: any;
    tooltipValuePreviewFn: any;
    totalVolumeValuePreviewFn: any;
    datePreviewFn: any;
    private keySearchText;
    private latestKeySearchTextResult;
    private functionTypeKeys;
    private lastKeysId;
    private lastFetchedKeys;
    constructor(store: Store<AppState>, $injector: Injector, fb: FormBuilder, resourcesService: ResourcesService, sanitizer: DomSanitizer, cd: ChangeDetectorRef, utils: UtilsService, entityService: EntityService);
    protected settingsForm(): FormGroup;
    protected onWidgetConfigSet(widgetConfig: WidgetConfigComponentData): void;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private createSvgShapesMapping;
    createShape(svg: string, layout: LevelCardLayout): SafeUrl;
    private _valuePreviewFn;
    private _tooltipValuePreviewFn;
    private _totalVolumeValuePreviewFn;
    private _datePreviewFn;
    fetchOptions(searchText: string): Observable<Array<string>>;
    private getKeys;
    static ɵfac: i0.ɵɵFactoryDeclaration<LiquidLevelCardWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LiquidLevelCardWidgetSettingsComponent, "liquid-level-card-widget-settings", never, {}, {}, never, never, false, never>;
}