import { WidgetActionCallbacks } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/action/manage-widget-actions.component.models';
import { DatasourceCallbacks } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/config/datasource.component.models';
import { WidgetConfigComponentData } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { Observable } from 'rxjs';
import { AfterViewInit, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormGroup } from '@angular/forms';
import { DataKey, WidgetConfigMode } from '../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { WidgetConfigComponent } from '../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget-config.component';
import * as i0 from "@angular/core";
export type WidgetConfigCallbacks = DatasourceCallbacks & WidgetActionCallbacks;
export interface IBasicWidgetConfigComponent {
    isAdd: boolean;
    widgetConfig: WidgetConfigComponentData;
    widgetConfigChanged: Observable<WidgetConfigComponentData>;
    validateConfig(): boolean;
}
export declare abstract class BasicWidgetConfigComponent extends PageComponent implements IBasicWidgetConfigComponent, OnInit, AfterViewInit {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    isAdd: boolean;
    basicMode: WidgetConfigMode;
    widgetConfigValue: WidgetConfigComponentData;
    set widgetConfig(value: WidgetConfigComponentData);
    get widgetConfig(): WidgetConfigComponentData;
    widgetConfigChangedEmitter: EventEmitter<WidgetConfigComponentData>;
    widgetConfigChanged: Observable<WidgetConfigComponentData>;
    protected constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected setupConfig(widgetConfig: WidgetConfigComponentData): void;
    protected setupDefaults(configData: WidgetConfigComponentData): void;
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected defaultLatestDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    protected validatorTriggers(): string[];
    protected onConfigChanged(widgetConfig: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    validateConfig(): boolean;
    protected setupDefaultDatasource(configData: WidgetConfigComponentData, keys?: DataKey[], latestKeys?: DataKey[]): void;
    protected constructDataKey(configData: WidgetConfigComponentData, key: DataKey): DataKey;
    protected abstract configForm(): UntypedFormGroup;
    protected abstract onConfigSet(configData: WidgetConfigComponentData): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasicWidgetConfigComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BasicWidgetConfigComponent, never, never, {}, {}, never, never, false, never>;
}
