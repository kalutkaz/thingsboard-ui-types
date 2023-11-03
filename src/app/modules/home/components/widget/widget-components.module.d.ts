import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/display-columns-panel.component";
import * as i2 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/entity/entities-table-widget.component";
import * as i3 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/alarm/alarms-table-widget.component";
import * as i4 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/timeseries-table-widget.component";
import * as i5 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/entity/entities-hierarchy-widget.component";
import * as i6 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/edges-overview-widget.component";
import * as i7 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/date-range-navigator/date-range-navigator.component";
import * as i8 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/json-input-widget.component";
import * as i9 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/multiple-input-widget.component";
import * as i10 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/trip-animation/trip-animation.component";
import * as i11 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/photo-camera-input.component";
import * as i12 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/gateway/gateway-form.component";
import * as i13 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/navigation-cards-widget.component";
import * as i14 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/navigation-card-widget.component";
import * as i15 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/qrcode-widget.component";
import * as i16 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/markdown-widget.component";
import * as i17 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/maps/dialogs/select-entity-dialog.component";
import * as i18 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/legend.component";
import * as i19 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/flot-widget.component";
import * as i20 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/gateway/gateway-connectors.component";
import * as i21 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/gateway/gateway-logs.component";
import * as i22 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/gateway/gateway-statistics.component";
import * as i23 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/gateway/gateway-service-rpc.component";
import * as i24 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/gateway/device-gateway-command.component";
import * as i25 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/gateway/gateway-configuration.component";
import * as i26 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/gateway/gateway-remote-configuration-dialog";
import * as i27 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/value-card-widget.component";
import * as i28 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/aggregated-value-card-widget.component";
import * as i29 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/count/count-widget.component";
import * as i30 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/indicator/battery-level-widget.component";
import * as i31 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/weather/wind-speed-direction-widget.component";
import * as i32 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/indicator/signal-strength-widget.component";
import * as i33 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/value-chart-card-widget.component";
import * as i34 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/cards/progress-bar-widget.component";
import * as i35 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/indicator/liquid-level-widget.component";
import * as i36 from "@angular/common";
import * as i37 from "../../../../../../../thingsboard/ui-ngx/src/app/shared/shared.module";
import * as i38 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/rpc/rpc-widgets.module";
import * as i39 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/lib/home-page/home-page-widgets.module";
import * as i40 from "../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/shared-home-components.module";
export declare class WidgetComponentsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetComponentsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<WidgetComponentsModule, [typeof i1.DisplayColumnsPanelComponent, typeof i2.EntitiesTableWidgetComponent, typeof i3.AlarmsTableWidgetComponent, typeof i4.TimeseriesTableWidgetComponent, typeof i5.EntitiesHierarchyWidgetComponent, typeof i6.EdgesOverviewWidgetComponent, typeof i7.DateRangeNavigatorWidgetComponent, typeof i7.DateRangeNavigatorPanelComponent, typeof i8.JsonInputWidgetComponent, typeof i9.MultipleInputWidgetComponent, typeof i10.TripAnimationComponent, typeof i11.PhotoCameraInputWidgetComponent, typeof i12.GatewayFormComponent, typeof i13.NavigationCardsWidgetComponent, typeof i14.NavigationCardWidgetComponent, typeof i15.QrCodeWidgetComponent, typeof i16.MarkdownWidgetComponent, typeof i17.SelectEntityDialogComponent, typeof i18.LegendComponent, typeof i19.FlotWidgetComponent, typeof i20.GatewayConnectorComponent, typeof i21.GatewayLogsComponent, typeof i22.GatewayStatisticsComponent, typeof i23.GatewayServiceRPCComponent, typeof i24.DeviceGatewayCommandComponent, typeof i25.GatewayConfigurationComponent, typeof i26.GatewayRemoteConfigurationDialogComponent, typeof i27.ValueCardWidgetComponent, typeof i28.AggregatedValueCardWidgetComponent, typeof i29.CountWidgetComponent, typeof i30.BatteryLevelWidgetComponent, typeof i31.WindSpeedDirectionWidgetComponent, typeof i32.SignalStrengthWidgetComponent, typeof i33.ValueChartCardWidgetComponent, typeof i34.ProgressBarWidgetComponent, typeof i35.LiquidLevelWidgetComponent], [typeof i36.CommonModule, typeof i37.SharedModule, typeof i38.RpcWidgetsModule, typeof i39.HomePageWidgetsModule, typeof i40.SharedHomeComponentsModule], [typeof i2.EntitiesTableWidgetComponent, typeof i3.AlarmsTableWidgetComponent, typeof i4.TimeseriesTableWidgetComponent, typeof i5.EntitiesHierarchyWidgetComponent, typeof i6.EdgesOverviewWidgetComponent, typeof i38.RpcWidgetsModule, typeof i39.HomePageWidgetsModule, typeof i7.DateRangeNavigatorWidgetComponent, typeof i8.JsonInputWidgetComponent, typeof i9.MultipleInputWidgetComponent, typeof i10.TripAnimationComponent, typeof i11.PhotoCameraInputWidgetComponent, typeof i12.GatewayFormComponent, typeof i13.NavigationCardsWidgetComponent, typeof i14.NavigationCardWidgetComponent, typeof i15.QrCodeWidgetComponent, typeof i16.MarkdownWidgetComponent, typeof i18.LegendComponent, typeof i19.FlotWidgetComponent, typeof i20.GatewayConnectorComponent, typeof i21.GatewayLogsComponent, typeof i22.GatewayStatisticsComponent, typeof i23.GatewayServiceRPCComponent, typeof i24.DeviceGatewayCommandComponent, typeof i25.GatewayConfigurationComponent, typeof i26.GatewayRemoteConfigurationDialogComponent, typeof i27.ValueCardWidgetComponent, typeof i28.AggregatedValueCardWidgetComponent, typeof i29.CountWidgetComponent, typeof i30.BatteryLevelWidgetComponent, typeof i31.WindSpeedDirectionWidgetComponent, typeof i32.SignalStrengthWidgetComponent, typeof i33.ValueChartCardWidgetComponent, typeof i34.ProgressBarWidgetComponent, typeof i35.LiquidLevelWidgetComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<WidgetComponentsModule>;
}
