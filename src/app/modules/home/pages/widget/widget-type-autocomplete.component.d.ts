import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageLink } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/page/page-link';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { FloatLabelType, MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import { WidgetTypeInfo } from '../../../../../../../thingsboard/ui-ngx/src/app/shared/models/widget.models';
import { WidgetService } from '../../../../../../../thingsboard/ui-ngx/src/app/core/http/widget.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class WidgetTypeAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    translate: TranslateService;
    private widgetService;
    private sanitizer;
    private fb;
    private dirty;
    selectWidgetTypeFormGroup: UntypedFormGroup;
    modelValue: WidgetTypeInfo | null;
    label: any;
    placeholder: string;
    floatLabel: FloatLabelType;
    appearance: MatFormFieldAppearance;
    subscriptSizing: SubscriptSizing;
    required: boolean;
    disabled: boolean;
    excludeWidgetTypeIds: Array<string>;
    widgetTypeInput: ElementRef;
    filteredWidgetTypes: Observable<Array<WidgetTypeInfo>>;
    searchText: string;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, widgetService: WidgetService, sanitizer: DomSanitizer, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: WidgetTypeInfo | string | null): void;
    updateView(value: WidgetTypeInfo | null): void;
    displayWidgetTypeFn(widgetType?: WidgetTypeInfo): string | undefined;
    getPreviewImage(imageUrl: string | null): SafeUrl | string;
    fetchWidgetTypes(searchText?: string): Observable<Array<WidgetTypeInfo>>;
    getWidgetTypes(pageLink: PageLink, result?: Array<WidgetTypeInfo>): Observable<Array<WidgetTypeInfo>>;
    onFocus(): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetTypeAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetTypeAutocompleteComponent, "tb-widget-type-autocomplete", never, { "label": "label"; "placeholder": "placeholder"; "floatLabel": "floatLabel"; "appearance": "appearance"; "subscriptSizing": "subscriptSizing"; "required": "required"; "disabled": "disabled"; "excludeWidgetTypeIds": "excludeWidgetTypeIds"; }, {}, never, ["[tb-error]", "[tb-hint]"], false, never>;
}