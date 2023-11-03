import { AfterViewInit, ElementRef, NgZone, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { BranchInfo } from '../../../../../../thingsboard/ui-ngx/src/app/shared/models/vc.models';
import { EntitiesVersionControlService } from '../../../../../../thingsboard/ui-ngx/src/app/core/http/entities-version-control.service';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class BranchAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    private entitiesVersionControlService;
    private fb;
    private zone;
    branchFormGroup: UntypedFormGroup;
    modelValue: string | null;
    subscriptSizing: SubscriptSizing;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    private disabledValue;
    get disabled(): boolean;
    set disabled(value: boolean);
    selectDefaultBranch: boolean;
    selectionMode: boolean;
    emptyPlaceholder: string;
    matAutocomplete: MatAutocomplete;
    autoCompleteTrigger: MatAutocompleteTrigger;
    branchInput: ElementRef<HTMLInputElement>;
    filteredBranches: Observable<Array<BranchInfo>>;
    defaultBranch: BranchInfo;
    searchText: string;
    loading: boolean;
    private dirty;
    private clearButtonClicked;
    private propagateChange;
    constructor(store: Store<AppState>, entitiesVersionControlService: EntitiesVersionControlService, fb: UntypedFormBuilder, zone: NgZone);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setDisabledState(isDisabled: boolean): void;
    isDefaultBranchSelected(): boolean;
    selectDefaultBranchIfNeeded(force?: boolean): void;
    writeValue(value: string | null): void;
    onFocus(): void;
    onBlur(): void;
    onPanelClosed(): void;
    selectAvailableValue(): void;
    updateView(value: BranchInfo | null): void;
    displayBranchFn(branch?: BranchInfo): string | undefined;
    private fetchBranches;
    private getBranches;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BranchAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BranchAutocompleteComponent, "tb-branch-autocomplete", never, { "subscriptSizing": "subscriptSizing"; "required": "required"; "disabled": "disabled"; "selectDefaultBranch": "selectDefaultBranch"; "selectionMode": "selectionMode"; "emptyPlaceholder": "emptyPlaceholder"; }, {}, never, never, false, never>;
}
