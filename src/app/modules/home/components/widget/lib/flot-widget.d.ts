import { WidgetContext } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { ChartType } from './flot-widget.models';
export declare class TbFlot {
    private ctx;
    private readonly chartType;
    private $flotElement?;
    private readonly utils;
    private settings;
    private comparisonEnabled;
    private tooltip;
    private readonly yAxisTickFormatter;
    private readonly yaxis;
    private readonly xaxis;
    private yaxes;
    private readonly options;
    private subscription;
    private $element;
    private readonly trackUnits;
    private readonly trackDecimals;
    private readonly tooltipIndividual;
    private readonly tooltipCumulative;
    private readonly hideZeros;
    private readonly defaultBarWidth;
    private thresholdsSourcesSubscription;
    private predefinedThresholds;
    private latestDataThresholds;
    private attributesThresholds;
    private latestData;
    private labelPatternsSourcesSubscription;
    private labelPatternsSourcesData;
    private plotInited;
    private plot;
    private createPlotTimeoutHandle;
    private updateTimeoutHandle;
    private latestUpdateTimeoutHandle;
    private resizeTimeoutHandle;
    private mouseEventsEnabled;
    private isMouseInteraction;
    private flotHoverHandler;
    private flotSelectHandler;
    private dblclickHandler;
    private mousedownHandler;
    private mouseupHandler;
    private mouseleaveHandler;
    private flotClickHandler;
    private enableSelection;
    private selectionMode;
    private readonly showTooltip;
    private readonly animatedPie;
    private pieDataAnimationDuration;
    private pieData;
    private pieRenderedData;
    private pieTargetData;
    private pieAnimationStartTime;
    private pieAnimationLastTime;
    private pieAnimationCaf;
    constructor(ctx: WidgetContext, chartType: ChartType, $flotElement?: JQuery<any>);
    private init;
    update(): void;
    latestDataUpdate(): void;
    private latestDataByDataIndex;
    private scalingPieRadius;
    resize(): void;
    checkMouseEvents(): void;
    destroy(): void;
    private cleanup;
    private createPlot;
    private updateData;
    private redrawPlot;
    private createYAxis;
    private subscribeForThresholdsAttributes;
    private thresholdsSourcesDataUpdated;
    private parseThresholdData;
    private processSingleDataValue;
    private generateThreshold;
    private subscribeForLabelPatternsSources;
    private labelPatternsParamsDataUpdated;
    private substituteLabelPatterns;
    private seriesInfoDiv;
    private seriesInfoDivFromInfo;
    private createTooltipElement;
    private formatPieTooltip;
    private formatChartTooltip;
    private formatYAxisTicks;
    private enableMouseEvents;
    private disableMouseEvents;
    private onFlotHover;
    private onFlotSelect;
    private onFlotDblClick;
    private onFlotMouseDown;
    private onFlotMouseUp;
    private onFlotMouseLeave;
    private onFlotClick;
    private getHoverInfo;
    private findHoverIndexFromData;
    private findHoverIndexFromDataPoints;
    pieDataRendered(): void;
    nextPieDataAnimation(start: any): void;
    onPieDataAnimation(): void;
    private finishPieDataAnimation;
    private onPieSliceClick;
}
