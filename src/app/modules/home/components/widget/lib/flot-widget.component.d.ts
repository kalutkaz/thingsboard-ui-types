import { ElementRef, OnInit } from '@angular/core';
import { WidgetContext } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { ChartType, TbFlotSettings } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/flot-widget.models';
import { LegendConfig, LegendData } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class FlotWidgetComponent implements OnInit {
    flotElement: ElementRef;
    ctx: WidgetContext;
    chartType: ChartType;
    displayLegend: boolean;
    legendConfig: LegendConfig;
    legendData: LegendData;
    isLegendFirst: boolean;
    legendContainerLayoutType: string;
    legendStyle: {
        [klass: string]: any;
    };
    settings: TbFlotSettings;
    private flot;
    constructor();
    ngOnInit(): void;
    private configureLegend;
    onLegendKeyHiddenChange(index: number): void;
    onDataUpdated(): void;
    onLatestDataUpdated(): void;
    onResize(): void;
    onEditModeChanged(): void;
    onDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FlotWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FlotWidgetComponent, "tb-flot-widget", never, { "ctx": "ctx"; "chartType": "chartType"; }, {}, never, never, false, never>;
}
