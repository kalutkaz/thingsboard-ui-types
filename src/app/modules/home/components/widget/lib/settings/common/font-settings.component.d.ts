import { OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Font } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/config/widget-settings.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.service';
import * as i0 from "@angular/core";
export declare class FontSettingsComponent implements OnInit, ControlValueAccessor {
    private popoverService;
    private renderer;
    private viewContainerRef;
    disabled: boolean;
    previewText: string | (() => string);
    private modelValue;
    private propagateChange;
    constructor(popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Font): void;
    openFontSettingsPopup($event: Event, matButton: MatButton): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FontSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FontSettingsComponent, "tb-font-settings", never, { "disabled": "disabled"; "previewText": "previewText"; }, {}, never, never, false, never>;
}
