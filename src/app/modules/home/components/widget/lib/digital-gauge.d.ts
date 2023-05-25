import { WidgetContext } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { attributesGaugeType, AttributeSourceProperty, ColorLevelSetting, FixedLevelColors } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/digital-gauge.models';
import { Datasource, DatasourceData } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { IWidgetSubscription } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/api/widget-api.models';
import { Observable } from 'rxjs';
export declare class TbCanvasDigitalGauge {
    protected ctx: WidgetContext;
    constructor(ctx: WidgetContext, canvasId: string);
    private localSettings;
    private levelColorsSourcesSubscription;
    private ticksSourcesSubscription;
    private gauge;
    static generateDatasource(ctx: WidgetContext, datasources: Datasource[], entityAlias: string, attribute: string, settings: any): Datasource[];
    private static toRadians;
    init(): void;
    settingLevelColorsSubscribe(options: FixedLevelColors[]): ColorLevelSetting[];
    settingTicksSubscribe(options: AttributeSourceProperty[]): number[];
    subscribeAttributes(datasource: Datasource[], typeAttributes: attributesGaugeType): Observable<IWidgetSubscription>;
    updateAttribute(data: Array<DatasourceData>, typeAttributes: attributesGaugeType): void;
    updateSetting(): void;
    update(): void;
    mobileModeChanged(): void;
    resize(): void;
    destroy(): void;
}
