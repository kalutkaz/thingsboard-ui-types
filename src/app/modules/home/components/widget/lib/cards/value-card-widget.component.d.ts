import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { WidgetContext } from '../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { ColorProcessor, ComponentStyle, DateFormatProcessor } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget-settings.models';
import { ValueCardLayout, ValueCardWidgetSettings } from './value-card-widget.models';
import { WidgetComponent } from '../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget.component';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ValueCardWidgetComponent implements OnInit, AfterViewInit, OnDestroy {
    private renderer;
    private widgetComponent;
    private cd;
    valueCardPanel: ElementRef<HTMLElement>;
    valueCardContent: ElementRef<HTMLElement>;
    settings: ValueCardWidgetSettings;
    valueCardLayout: typeof ValueCardLayout;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    layout: ValueCardLayout;
    showIcon: boolean;
    icon: string;
    iconStyle: ComponentStyle;
    iconColor: ColorProcessor;
    showLabel: boolean;
    label$: Observable<string>;
    labelStyle: ComponentStyle;
    labelColor: ColorProcessor;
    valueText: string;
    valueStyle: ComponentStyle;
    valueColor: ColorProcessor;
    showDate: boolean;
    dateFormat: DateFormatProcessor;
    dateStyle: ComponentStyle;
    dateColor: ColorProcessor;
    backgroundStyle: ComponentStyle;
    overlayStyle: ComponentStyle;
    private panelResize$;
    private horizontal;
    private decimals;
    private units;
    constructor(renderer: Renderer2, widgetComponent: WidgetComponent, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    private onResize;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueCardWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueCardWidgetComponent, "tb-value-card-widget", never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}
