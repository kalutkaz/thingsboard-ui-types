import { ChangeDetectorRef, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { BasicWidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { WidgetConfigComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget-config.component';
import { LevelCardLayout, LiquidWidgetDataSourceType, Shapes } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/indicator/liquid-level-widget.models';
import { UnitsType } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/unit.models';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCardsSelectComponent } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/settings/common/image-cards-select.component';
import { Observable } from 'rxjs';
import { ResourcesService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/services/resources.service';
import { UtilsService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import * as i0 from "@angular/core";
export declare class LiquidLevelCardBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private cd;
    private $injector;
    private fb;
    private resourcesService;
    private sanitizer;
    private utils;
    layoutsImageCardsSelect: ImageCardsSelectComponent;
    shapesImageCardsSelect: ImageCardsSelectComponent;
    private get datasource();
    get volumeInput(): boolean;
    get displayTimewindowConfig(): boolean;
    onlyHistoryTimewindow(): boolean;
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
    levelCardWidgetConfigForm: FormGroup;
    valuePreviewFn: any;
    tooltipValuePreviewFn: any;
    totalVolumeValuePreviewFn: any;
    datePreviewFn: any;
    private keySearchText;
    private latestKeySearchTextResult;
    private functionTypeKeys;
    private lastKeysId;
    private lastFetchedKeys;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, cd: ChangeDetectorRef, $injector: Injector, fb: FormBuilder, resourcesService: ResourcesService, sanitizer: DomSanitizer, utils: UtilsService);
    protected configForm(): FormGroup;
    protected setupConfig(widgetConfig: WidgetConfigComponentData): void;
    protected setupDefaults(configData: WidgetConfigComponentData): void;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getCardButtons;
    private setCardButtons;
    private _valuePreviewFn;
    private _tooltipValuePreviewFn;
    private _totalVolumeValuePreviewFn;
    private _datePreviewFn;
    private createSvgShapesMapping;
    createShape(svg: string, layout: LevelCardLayout): SafeUrl;
    fetchOptions(searchText: string): Observable<Array<string>>;
    private getKeys;
    static ɵfac: i0.ɵɵFactoryDeclaration<LiquidLevelCardBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LiquidLevelCardBasicConfigComponent, "liquid-level-card-basic-config", never, {}, {}, never, never, false, never>;
}
