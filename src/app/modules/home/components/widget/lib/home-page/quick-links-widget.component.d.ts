import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/core.state';
import { Observable } from 'rxjs';
import { QuickLinks } from '../../../../../../../../../thingsboard/ui-ngx/src/app/shared/models/user-settings.models';
import { UserSettingsService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/http/user-settings.service';
import { WidgetContext } from '../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MenuService } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/services/menu.service';
import { MenuSection } from '../../../../../../../../../thingsboard/ui-ngx/src/app/core/services/menu.models';
import * as i0 from "@angular/core";
interface QuickLinksWidgetSettings {
    columns: number;
}
export declare class QuickLinksWidgetComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private userSettingsService;
    private dialog;
    private menuService;
    private breakpointObserver;
    ctx: WidgetContext;
    settings: QuickLinksWidgetSettings;
    columns: number;
    rowHeight: string;
    gutterSize: string;
    quickLinks: QuickLinks;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    private observeBreakpointSubscription;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, userSettingsService: UserSettingsService, dialog: MatDialog, menuService: MenuService, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    menuLinks$(): Observable<Array<MenuSection>>;
    private loadQuickLinks;
    edit(): void;
    addLink(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickLinksWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickLinksWidgetComponent, "tb-quick-links-widget", never, { "ctx": "ctx"; }, {}, never, never, false, never>;
}
export {};
