import { PageComponent } from '../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { UntypedFormControl } from '@angular/forms';
import { TbPopoverComponent } from '../../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class ColorPickerPanelComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    color: string;
    popover: TbPopoverComponent<ColorPickerPanelComponent>;
    colorSelected: EventEmitter<string>;
    colorPickerControl: UntypedFormControl;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    selectColor(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPickerPanelComponent, "tb-color-picker-panel", never, { "color": "color"; "popover": "popover"; }, { "colorSelected": "colorSelected"; }, never, never, false, never>;
}
