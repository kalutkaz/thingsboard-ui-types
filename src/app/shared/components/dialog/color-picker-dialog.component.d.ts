import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '../../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog.component';
import * as i0 from "@angular/core";
export interface ColorPickerDialogData {
    color: string;
}
export declare class ColorPickerDialogComponent extends DialogComponent<ColorPickerDialogComponent, string> implements OnInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: ColorPickerDialogData;
    dialogRef: MatDialogRef<ColorPickerDialogComponent, string>;
    fb: FormBuilder;
    colorPickerFormGroup: FormGroup;
    constructor(store: Store<AppState>, router: Router, data: ColorPickerDialogData, dialogRef: MatDialogRef<ColorPickerDialogComponent, string>, fb: FormBuilder);
    ngOnInit(): void;
    cancel(): void;
    select(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPickerDialogComponent, "tb-color-picker-dialog", never, {}, {}, never, never, false, never>;
}
