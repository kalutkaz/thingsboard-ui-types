import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { PageComponent } from '../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FlowDirective } from '@flowjs/ngx-flow';
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../../../../../thingsboard/ui-ngx/src/app/core/services/utils.service';
import * as i0 from "@angular/core";
export declare class FileInputComponent extends PageComponent implements AfterViewInit, OnDestroy, ControlValueAccessor, OnChanges {
    protected store: Store<AppState>;
    private utils;
    translate: TranslateService;
    label: string;
    hint: string;
    accept: string;
    noFileText: string;
    inputId: string;
    allowedExtensions: string;
    dropLabel: string;
    contentConvertFunction: (content: string) => any;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    private requiredAsErrorValue;
    get requiredAsError(): boolean;
    set requiredAsError(value: boolean);
    disabled: boolean;
    existingFileName: string;
    readAsBinary: boolean;
    workFromFileObj: boolean;
    private multipleFileValue;
    set multipleFile(value: boolean);
    get multipleFile(): boolean;
    fileNameChanged: EventEmitter<string | string[]>;
    fileName: string | string[];
    fileContent: any;
    files: File[];
    flow: FlowDirective;
    flowInput: ElementRef;
    autoUploadSubscription: Subscription;
    private propagateChange;
    constructor(store: Store<AppState>, utils: UtilsService, translate: TranslateService);
    ngAfterViewInit(): void;
    private readerAsFile;
    private filterFile;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateModel;
    clearFile(): void;
    private updateMultipleFileMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileInputComponent, "tb-file-input", never, { "label": "label"; "hint": "hint"; "accept": "accept"; "noFileText": "noFileText"; "inputId": "inputId"; "allowedExtensions": "allowedExtensions"; "dropLabel": "dropLabel"; "contentConvertFunction": "contentConvertFunction"; "required": "required"; "requiredAsError": "requiredAsError"; "disabled": "disabled"; "existingFileName": "existingFileName"; "readAsBinary": "readAsBinary"; "workFromFileObj": "workFromFileObj"; "multipleFile": "multipleFile"; }, { "fileNameChanged": "fileNameChanged"; }, never, never, false, never>;
}
