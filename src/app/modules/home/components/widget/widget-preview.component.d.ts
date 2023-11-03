import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageComponent } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { IAliasController, IStateController } from '../../../../../../../thingsboard/ui-ngx/src/app/core/api/widget-api.models';
import { Widget, WidgetConfig } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Timewindow } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/time/time.models';
import * as i0 from "@angular/core";
export declare class WidgetPreviewComponent extends PageComponent implements OnInit, OnChanges {
    protected store: Store<AppState>;
    aliasController: IAliasController;
    stateController: IStateController;
    dashboardTimewindow: Timewindow;
    widget: Widget;
    widgetConfig: WidgetConfig;
    previewWidth: string;
    previewHeight: string;
    widgets: Widget[];
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private loadPreviewWidget;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetPreviewComponent, "tb-widget-preview", never, { "aliasController": "aliasController"; "stateController": "stateController"; "dashboardTimewindow": "dashboardTimewindow"; "widget": "widget"; "widgetConfig": "widgetConfig"; "previewWidth": "previewWidth"; "previewHeight": "previewHeight"; }, {}, never, [".tb-preview-panel-content"], false, never>;
}
