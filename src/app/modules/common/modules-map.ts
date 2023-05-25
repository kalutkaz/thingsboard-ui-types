///
/// Copyright © 2016-2023 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import * as AngularAnimations from '@angular/animations';
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularForms from '@angular/forms';
import * as AngularFlexLayout from '@angular/flex-layout';
import * as AngularFlexLayoutFlex from '@angular/flex-layout/flex';
import * as AngularFlexLayoutGrid from '@angular/flex-layout/grid';
import * as AngularFlexLayoutExtended from '@angular/flex-layout/extended';
import * as AngularPlatformBrowser from '@angular/platform-browser';
import * as AngularPlatformBrowserAnimations from '@angular/platform-browser/animations';
import * as AngularRouter from '@angular/router';
import * as AngularCdkCoercion from '@angular/cdk/coercion';
import * as AngularCdkCollections from '@angular/cdk/collections';
import * as AngularCdkKeycodes from '@angular/cdk/keycodes';
import * as AngularCdkLayout from '@angular/cdk/layout';
import * as AngularCdkOverlay from '@angular/cdk/overlay';
import * as AngularCdkPortal from '@angular/cdk/portal';
import * as AngularCdkBidi from '@angular/cdk/bidi';
import * as AngularCdkPlatform from '@angular/cdk/platform';
import * as AngularMaterialAutocomplete from '@angular/material/autocomplete';
import * as AngularMaterialBadge from '@angular/material/badge';
import * as AngularMaterialBottomSheet from '@angular/material/bottom-sheet';
import * as AngularMaterialButton from '@angular/material/button';
import * as AngularMaterialButtonToggle from '@angular/material/button-toggle';
import * as AngularMaterialCard from '@angular/material/card';
import * as AngularMaterialCheckbox from '@angular/material/checkbox';
import * as AngularMaterialChips from '@angular/material/chips';
import * as AngularMaterialCore from '@angular/material/core';
import * as AngularMaterialDatepicker from '@angular/material/datepicker';
import * as AngularMaterialDialog from '@angular/material/dialog';
import * as AngularMaterialDivider from '@angular/material/divider';
import * as AngularMaterialExpansion from '@angular/material/expansion';
import * as AngularMaterialFormField from '@angular/material/form-field';
import * as AngularMaterialGridList from '@angular/material/grid-list';
import * as AngularMaterialIcon from '@angular/material/icon';
import * as AngularMaterialInput from '@angular/material/input';
import * as AngularMaterialList from '@angular/material/list';
import * as AngularMaterialMenu from '@angular/material/menu';
import * as AngularMaterialPaginator from '@angular/material/paginator';
import * as AngularMaterialProgressBar from '@angular/material/progress-bar';
import * as AngularMaterialProgressSpinner from '@angular/material/progress-spinner';
import * as AngularMaterialRadio from '@angular/material/radio';
import * as AngularMaterialSelect from '@angular/material/select';
import * as AngularMaterialSidenav from '@angular/material/sidenav';
import * as AngularMaterialSlideToggle from '@angular/material/slide-toggle';
import * as AngularMaterialSlider from '@angular/material/slider';
import * as AngularMaterialSnackBar from '@angular/material/snack-bar';
import * as AngularMaterialSort from '@angular/material/sort';
import * as AngularMaterialStepper from '@angular/material/stepper';
import * as AngularMaterialTable from '@angular/material/table';
import * as AngularMaterialTabs from '@angular/material/tabs';
import * as AngularMaterialToolbar from '@angular/material/toolbar';
import * as AngularMaterialTooltip from '@angular/material/tooltip';
import * as AngularMaterialTree from '@angular/material/tree';
import * as DragDropModule from '@angular/cdk/drag-drop';
import * as HttpClientModule from '@angular/common/http';

import * as NgrxStore from '@ngrx/store';
import * as RxJs from 'rxjs';
import * as RxJsOperators from 'rxjs/operators';
import * as TranslateCore from '@ngx-translate/core';
import * as MatDateTimePicker from '@mat-datetimepicker/core';
import * as _moment from 'moment';
import * as tslib from 'tslib';

import * as TbCore from '../../../../../thingsboard/ui-ngx/src/app/core/public-api';
import * as TbShared from '../../../../../thingsboard/ui-ngx/src/app/shared/public-api';
import * as TbHomeComponents from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/public-api';

import * as MillisecondsToTimeStringPipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/milliseconds-to-time-string.pipe';
import * as EnumToArrayPipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/enum-to-array.pipe';
import * as HighlightPipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/highlight.pipe';
import * as TruncatePipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/truncate.pipe';
import * as TbJsonPipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/tbJson.pipe';
import * as FileSizePipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/file-size.pipe';
import * as NospacePipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/nospace.pipe';
import * as SelectableColumnsPipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/selectable-columns.pipe';
import * as KeyboardShortcutPipe from '../../../../../thingsboard/ui-ngx/src/app/shared/pipe/keyboard-shortcut.pipe';

import * as coercion from '../../../../../thingsboard/ui-ngx/src/app/shared/decorators/coercion';
import * as enumerable from '../../../../../thingsboard/ui-ngx/src/app/shared/decorators/enumerable';
import * as TbInject from '../../../../../thingsboard/ui-ngx/src/app/shared/decorators/tb-inject';

import * as FooterComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/footer.component';
import * as LogoComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/logo.component';
import * as FooterFabButtonsComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/footer-fab-buttons.component';
import * as FullscreenDirective from '../../../../../thingsboard/ui-ngx/src/app/shared/components/fullscreen.directive';
import * as CircularProgressDirective from '../../../../../thingsboard/ui-ngx/src/app/shared/components/circular-progress.directive';
import * as TbHotkeysDirective from '../../../../../thingsboard/ui-ngx/src/app/shared/components/hotkeys.directive';
import * as TbAnchorComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/tb-anchor.component';
import * as TbPopoverComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.component';
import * as TbStringTemplateOutletDirective from '../../../../../thingsboard/ui-ngx/src/app/shared/components/directives/sring-template-outlet.directive';
import * as TbComponentOutletDirective from '../../../../../thingsboard/ui-ngx/src/app/shared/components/directives/component-outlet.directive';
import * as TbMarkdownComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/markdown.component';
import * as HelpComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/help.component';
import * as HelpMarkdownComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/help-markdown.component';
import * as HelpPopupComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/help-popup.component';
import * as TbCheckboxComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/tb-checkbox.component';
import * as TbToast from '../../../../../thingsboard/ui-ngx/src/app/shared/components/toast.directive';
import * as TbErrorComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/tb-error.component';
import * as TbCheatSheetComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/cheatsheet.component';
import * as BreadcrumbComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/breadcrumb.component';
import * as UserMenuComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/user-menu.component';
import * as TimewindowComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/time/timewindow.component';
import * as TimewindowPanelComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/time/timewindow-panel.component';
import * as TimeintervalComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/time/timeinterval.component';
import * as QuickTimeIntervalComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/time/quick-time-interval.component';
import * as DashboardSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dashboard-select.component';
import * as DashboardSelectPanelComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dashboard-select-panel.component';
import * as DatetimePeriodComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/time/datetime-period.component';
import * as DatetimeComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/time/datetime.component';
import * as TimezoneSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/time/timezone-select.component';
import * as ValueInputComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/value-input.component';
import * as DashboardAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dashboard-autocomplete.component';
import * as EntitySubTypeAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-subtype-autocomplete.component';
import * as EntitySubTypeSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-subtype-select.component';
import * as EntitySubTypeListComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-subtype-list.component';
import * as EntityAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-autocomplete.component';
import * as EntityListComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-list.component';
import * as EntityTypeSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-type-select.component';
import * as EntitySelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-select.component';
import * as EntityKeysListComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-keys-list.component';
import * as EntityListSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-list-select.component';
import * as EntityTypeListComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-type-list.component';
import * as QueueAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/queue/queue-autocomplete.component';
import * as RelationTypeAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/relation/relation-type-autocomplete.component';
import * as SocialSharePanelComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/socialshare-panel.component';
import * as JsonObjectEditComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/json-object-edit.component';
import * as JsonObjectViewComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/json-object-view.component';
import * as JsonContentComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/json-content.component';
import * as JsFuncComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/js-func.component';
import * as TbScriptLangComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/script-lang.component';
import * as FabToolbarComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/fab-toolbar.component';
import * as WidgetsBundleSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/widgets-bundle-select.component';
import * as ConfirmDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog/confirm-dialog.component';
import * as AlertDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog/alert-dialog.component';
import * as TodoDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog/todo-dialog.component';
import * as ColorPickerDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog/color-picker-dialog.component';
import * as MaterialIconsDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog/material-icons-dialog.component';
import * as ColorInputComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/color-input.component';
import * as MaterialIconSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/material-icon-select.component';
import * as NodeScriptTestDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog/node-script-test-dialog.component';
import * as JsonFormComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/json-form/json-form.component';
import * as NotificationComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/notification/notification.component';
import * as TemplateAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/notification/template-autocomplete.component';
import * as ImageInputComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/image-input.component';
import * as FileInputComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/file-input.component';
import * as MessageTypeAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/message-type-autocomplete.component';
import * as KeyValMapComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/kv-map.component';
import * as MultipleImageInputComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/multiple-image-input.component';
import * as NavTreeComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/nav-tree.component';
import * as LedLightComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/led-light.component';
import * as TbJsonToStringDirective from '../../../../../thingsboard/ui-ngx/src/app/shared/components/directives/tb-json-to-string.directive';
import * as JsonObjectEditDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/dialog/json-object-edit-dialog.component';
import * as HistorySelectorComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/time/history-selector/history-selector.component';
import * as EntityGatewaySelectComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/entity/entity-gateway-select.component';
import * as ContactComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/contact.component';
import * as OtaPackageAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/ota-package/ota-package-autocomplete.component';
import * as WidgetsBundleSearchComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/widgets-bundle-search.component';
import * as CopyButtonComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/button/copy-button.component';
import * as TogglePasswordComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/button/toggle-password.component';
import * as ProtobufContentComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/protobuf-content.component';
import * as SlackConversationAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/shared/components/slack-conversation-autocomplete.component';

import * as AddEntityDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/entity/add-entity-dialog.component';
import * as EntitiesTableComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/entity/entities-table.component';
import * as DetailsPanelComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/details-panel.component';
import * as EntityDetailsPanelComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/entity/entity-details-panel.component';
import * as AuditLogDetailsDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/audit-log/audit-log-details-dialog.component';
import * as AuditLogTableComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/audit-log/audit-log-table.component';
import * as EventTableHeaderComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/event/event-table-header.component';
import * as EventTableComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/event/event-table.component';
import * as EventFilterPanelComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/event/event-filter-panel.component';
import * as RelationTableComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/relation/relation-table.component';
import * as RelationDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/relation/relation-dialog.component';
import * as AlarmTableHeaderComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alarm/alarm-table-header.component';
import * as AlarmTableComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alarm/alarm-table.component';
import * as AttributeTableComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/attribute/attribute-table.component';
import * as AddAttributeDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/attribute/add-attribute-dialog.component';
import * as EditAttributeValuePanelComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/attribute/edit-attribute-value-panel.component';
import * as DashboardComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard/dashboard.component';
import * as WidgetComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget.component';
import * as LegendComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/legend.component';
import * as AliasesEntitySelectPanelComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alias/aliases-entity-select-panel.component';
import * as AliasesEntitySelectComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alias/aliases-entity-select.component';
import * as WidgetConfigComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget-config.component';
import * as EntityAliasesDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alias/entity-aliases-dialog.component';
import * as EntityFilterViewComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/entity/entity-filter-view.component';
import * as EntityAliasDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alias/entity-alias-dialog.component';
import * as EntityFilterComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/entity/entity-filter.component';
import * as RelationFiltersComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/relation/relation-filters.component';
import * as EntityAliasSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alias/entity-alias-select.component';
import * as DataKeysComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/data-keys.component';
import * as DataKeyConfigDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/data-key-config-dialog.component';
import * as DataKeyConfigComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/data-key-config.component';
import * as LegendConfigComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/legend-config.component';
import * as ManageWidgetActionsComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/action/manage-widget-actions.component';
import * as WidgetActionDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/action/widget-action-dialog.component';
import * as CustomActionPrettyResourcesTabsComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/action/custom-action-pretty-resources-tabs.component';
import * as CustomActionPrettyEditorComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/action/custom-action-pretty-editor.component';
import * as MobileActionEditorComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/action/mobile-action-editor.component';
import * as CustomDialogService from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/dialog/custom-dialog.service';
import * as CustomDialogContainerComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/dialog/custom-dialog-container.component';
import * as ImportDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/import-export/import-dialog.component';
import * as AddWidgetToDashboardDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/attribute/add-widget-to-dashboard-dialog.component';
import * as ImportDialogCsvComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/import-export/import-dialog-csv.component';
import * as TableColumnsAssignmentComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/import-export/table-columns-assignment.component';
import * as EventContentDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/event/event-content-dialog.component';
import * as SharedHomeComponentsModule from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/shared-home-components.module';
import * as SelectTargetLayoutDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard/select-target-layout-dialog.component';
import * as SelectTargetStateDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard/select-target-state-dialog.component';
import * as AliasesEntityAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/alias/aliases-entity-autocomplete.component';
import * as BooleanFilterPredicateComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/boolean-filter-predicate.component';
import * as StringFilterPredicateComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/string-filter-predicate.component';
import * as NumericFilterPredicateComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/numeric-filter-predicate.component';
import * as ComplexFilterPredicateComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/complex-filter-predicate.component';
import * as FilterPredicateComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-predicate.component';
import * as FilterPredicateListComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-predicate-list.component';
import * as KeyFilterListComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/key-filter-list.component';
import * as ComplexFilterPredicateDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/complex-filter-predicate-dialog.component';
import * as KeyFilterDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/key-filter-dialog.component';
import * as FiltersDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filters-dialog.component';
import * as FilterDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-dialog.component';
import * as FilterSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-select.component';
import * as FiltersEditComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filters-edit.component';
import * as FiltersEditPanelComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filters-edit-panel.component';
import * as UserFilterDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/user-filter-dialog.component';
import * as FilterUserInfoComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-user-info.component';
import * as FilterUserInfoDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-user-info-dialog.component';
import * as FilterPredicateValueComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-predicate-value.component';
import * as TenantProfileComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/tenant-profile.component';
import * as TenantProfileDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/tenant-profile-dialog.component';
import * as TenantProfileDataComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/tenant-profile-data.component';
// eslint-disable-next-line max-len
import * as DefaultDeviceProfileConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device/default-device-profile-configuration.component';
import * as DeviceProfileConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device/device-profile-configuration.component';
import * as DeviceProfileComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device-profile.component';
import * as DefaultDeviceProfileTransportConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device/default-device-profile-transport-configuration.component';
import * as DeviceProfileTransportConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device/device-profile-transport-configuration.component';
import * as DeviceProfileDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device-profile-dialog.component';
import * as DeviceProfileAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device-profile-autocomplete.component';
import * as MqttDeviceProfileTransportConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device/mqtt-device-profile-transport-configuration.component';
import * as CoapDeviceProfileTransportConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device/coap-device-profile-transport-configuration.component';
import * as DeviceProfileAlarmsComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/device-profile-alarms.component';
import * as DeviceProfileAlarmComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/device-profile-alarm.component';
import * as CreateAlarmRulesComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/create-alarm-rules.component';
import * as AlarmRuleComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/alarm-rule.component';
import * as AlarmRuleConditionComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/alarm-rule-condition.component';
import * as FilterTextComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/filter/filter-text.component';
import * as AddDeviceProfileDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/add-device-profile-dialog.component';
import * as RuleChainAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/rule-chain/rule-chain-autocomplete.component';
import * as DeviceProfileProvisionConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/device-profile-provision-configuration.component';
import * as AlarmScheduleComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/alarm-schedule.component';
import * as DeviceWizardDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/wizard/device-wizard-dialog.component';
import * as AlarmScheduleInfoComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/alarm-schedule-info.component';
import * as AlarmScheduleDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/alarm-schedule-dialog.component';
import * as EditAlarmDetailsDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/edit-alarm-details-dialog.component';
import * as AlarmRuleConditionDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/alarm-rule-condition-dialog.component';
// eslint-disable-next-line max-len
import * as DefaultTenantProfileConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/tenant/default-tenant-profile-configuration.component';
import * as TenantProfileConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/tenant/tenant-profile-configuration.component';
import * as SmsProviderConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/sms/sms-provider-configuration.component';
import * as AwsSnsProviderConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/sms/aws-sns-provider-configuration.component';
import * as TwilioSmsProviderConfigurationComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/sms/twilio-sms-provider-configuration.component';
import * as DashboardPageComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/dashboard-page.component';
import * as DashboardToolbarComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/dashboard-toolbar.component';
import * as DashboardLayoutComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/layout/dashboard-layout.component';
import * as EditWidgetComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/edit-widget.component';
import * as DashboardWidgetSelectComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/dashboard-widget-select.component';
import * as AddWidgetDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/add-widget-dialog.component';
import * as ManageDashboardLayoutsDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/layout/manage-dashboard-layouts-dialog.component';
import * as DashboardSettingsDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/dashboard-settings-dialog.component';
import * as ManageDashboardStatesDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/states/manage-dashboard-states-dialog.component';
import * as DashboardStateDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/states/dashboard-state-dialog.component';
import * as EmbedDashboardDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/dialog/embed-dashboard-dialog.component';
import * as EdgeDownlinkTableComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/edge/edge-downlink-table.component';
import * as EdgeDownlinkTableHeaderComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/edge/edge-downlink-table-header.component';
import * as DisplayWidgetTypesPanelComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/widget-types-panel.component';
import * as AlarmDurationPredicateValueComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/alarm/alarm-duration-predicate-value.component';
import * as DashboardImageDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/dashboard-page/dashboard-image-dialog.component';
import * as WidgetContainerComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/widget/widget-container.component';
import * as TenantProfileQueuesComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/queue/tenant-profile-queues.component';
import * as QueueFormComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/queue/queue-form.component';
import * as AssetProfileComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/asset-profile.component';
import * as AssetProfileDialogComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/asset-profile-dialog.component';
import * as AssetProfileAutocompleteComponent from '../../../../../thingsboard/ui-ngx/src/app/modules/home/components/profile/asset-profile-autocomplete.component';

import { IModulesMap } from '../../../../../thingsboard/ui-ngx/src/app/modules/common/modules-map.models';

declare const System;

class ModulesMap implements IModulesMap {

  private initialized = false;

  private modulesMap: {[key: string]: any} = {
    '@angular/animations': AngularAnimations,
    '@angular/core': AngularCore,
    '@angular/common': AngularCommon,
    '@angular/common/http': HttpClientModule,
    '@angular/forms': AngularForms,
    '@angular/flex-layout': AngularFlexLayout,
    '@angular/flex-layout/flex': AngularFlexLayoutFlex,
    '@angular/flex-layout/grid': AngularFlexLayoutGrid,
    '@angular/flex-layout/extended': AngularFlexLayoutExtended,
    '@angular/platform-browser': AngularPlatformBrowser,
    '@angular/platform-browser/animations': AngularPlatformBrowserAnimations,
    '@angular/router': AngularRouter,
    '@angular/cdk/coercion': AngularCdkCoercion,
    '@angular/cdk/collections': AngularCdkCollections,
    '@angular/cdk/keycodes': AngularCdkKeycodes,
    '@angular/cdk/layout': AngularCdkLayout,
    '@angular/cdk/overlay': AngularCdkOverlay,
    '@angular/cdk/portal': AngularCdkPortal,
    '@angular/cdk/bidi': AngularCdkBidi,
    '@angular/cdk/platform': AngularCdkPlatform,
    '@angular/cdk/drag-drop': DragDropModule,
    '@angular/material/autocomplete': AngularMaterialAutocomplete,
    '@angular/material/badge': AngularMaterialBadge,
    '@angular/material/bottom-sheet': AngularMaterialBottomSheet,
    '@angular/material/button': AngularMaterialButton,
    '@angular/material/button-toggle': AngularMaterialButtonToggle,
    '@angular/material/card': AngularMaterialCard,
    '@angular/material/checkbox': AngularMaterialCheckbox,
    '@angular/material/chips': AngularMaterialChips,
    '@angular/material/core': AngularMaterialCore,
    '@angular/material/datepicker': AngularMaterialDatepicker,
    '@angular/material/dialog': AngularMaterialDialog,
    '@angular/material/divider': AngularMaterialDivider,
    '@angular/material/expansion': AngularMaterialExpansion,
    '@angular/material/form-field': AngularMaterialFormField,
    '@angular/material/grid-list': AngularMaterialGridList,
    '@angular/material/icon': AngularMaterialIcon,
    '@angular/material/input': AngularMaterialInput,
    '@angular/material/list': AngularMaterialList,
    '@angular/material/menu': AngularMaterialMenu,
    '@angular/material/paginator': AngularMaterialPaginator,
    '@angular/material/progress-bar': AngularMaterialProgressBar,
    '@angular/material/progress-spinner': AngularMaterialProgressSpinner,
    '@angular/material/radio': AngularMaterialRadio,
    '@angular/material/select': AngularMaterialSelect,
    '@angular/material/sidenav': AngularMaterialSidenav,
    '@angular/material/slide-toggle': AngularMaterialSlideToggle,
    '@angular/material/slider': AngularMaterialSlider,
    '@angular/material/snack-bar': AngularMaterialSnackBar,
    '@angular/material/sort': AngularMaterialSort,
    '@angular/material/stepper': AngularMaterialStepper,
    '@angular/material/table': AngularMaterialTable,
    '@angular/material/tabs': AngularMaterialTabs,
    '@angular/material/toolbar': AngularMaterialToolbar,
    '@angular/material/tooltip': AngularMaterialTooltip,
    '@angular/material/tree': AngularMaterialTree,
    '@ngrx/store': NgrxStore,
    rxjs: RxJs,
    'rxjs/operators': RxJsOperators,
    '@ngx-translate/core': TranslateCore,
    '@mat-datetimepicker/core': MatDateTimePicker,
    moment: _moment,
    tslib,

    '@core/public-api': TbCore,
    '@shared/public-api': TbShared,
    '@home/components/public-api': TbHomeComponents,

    '@shared/pipe/milliseconds-to-time-string.pipe': MillisecondsToTimeStringPipe,
    '@shared/pipe/enum-to-array.pipe': EnumToArrayPipe,
    '@shared/pipe/highlight.pipe': HighlightPipe,
    '@shared/pipe/truncate.pipe': TruncatePipe,
    '@shared/pipe/tbJson.pipe': TbJsonPipe,
    '@shared/pipe/file-size.pipe': FileSizePipe,
    '@shared/pipe/nospace.pipe': NospacePipe,
    '@shared/pipe/selectable-columns.pipe': SelectableColumnsPipe,
    '@shared/pipe/keyboard-shortcut.pipe': KeyboardShortcutPipe,

    '@shared/decorators/coercion': coercion,
    '@shared/decorators/enumerable': enumerable,
    '@shared/decorators/tb-inject': TbInject,

    '@shared/components/footer.component': FooterComponent,
    '@shared/components/logo.component': LogoComponent,
    '@shared/components/footer-fab-buttons.component': FooterFabButtonsComponent,
    '@shared/components/fullscreen.directive': FullscreenDirective,
    '@shared/components/circular-progress.directive': CircularProgressDirective,
    '@shared/components/hotkeys.directive': TbHotkeysDirective,
    '@shared/components/tb-anchor.component': TbAnchorComponent,
    '@shared/components/popover.component': TbPopoverComponent,
    '@shared/components/directives/sring-template-outlet.directive': TbStringTemplateOutletDirective,
    '@shared/components/directives/component-outlet.directive': TbComponentOutletDirective,
    '@shared/components/markdown.component': TbMarkdownComponent,
    '@shared/components/help.component': HelpComponent,
    '@shared/components/help-markdown.component': HelpMarkdownComponent,
    '@shared/components/help-popup.component': HelpPopupComponent,
    '@shared/components/tb-checkbox.component': TbCheckboxComponent,
    '@shared/components/toast.directive': TbToast,
    '@shared/components/tb-error.component': TbErrorComponent,
    '@shared/components/cheatsheet.component': TbCheatSheetComponent,
    '@shared/components/breadcrumb.component': BreadcrumbComponent,
    '@shared/components/user-menu.component': UserMenuComponent,
    '@shared/components/time/timewindow.component': TimewindowComponent,
    '@shared/components/time/timewindow-panel.component': TimewindowPanelComponent,
    '@shared/components/time/timeinterval.component': TimeintervalComponent,
    '@shared/components/time/quick-time-interval.component': QuickTimeIntervalComponent,
    '@shared/components/dashboard-select.component': DashboardSelectComponent,
    '@shared/components/dashboard-select-panel.component': DashboardSelectPanelComponent,
    '@shared/components/time/datetime-period.component': DatetimePeriodComponent,
    '@shared/components/time/datetime.component': DatetimeComponent,
    '@shared/components/time/timezone-select.component': TimezoneSelectComponent,
    '@shared/components/value-input.component': ValueInputComponent,
    '@shared/components/dashboard-autocomplete.component': DashboardAutocompleteComponent,
    '@shared/components/entity/entity-subtype-autocomplete.component': EntitySubTypeAutocompleteComponent,
    '@shared/components/entity/entity-subtype-select.component': EntitySubTypeSelectComponent,
    '@shared/components/entity/entity-subtype-list.component': EntitySubTypeListComponent,
    '@shared/components/entity/entity-autocomplete.component': EntityAutocompleteComponent,
    '@shared/components/entity/entity-list.component': EntityListComponent,
    '@shared/components/entity/entity-type-select.component': EntityTypeSelectComponent,
    '@shared/components/entity/entity-select.component': EntitySelectComponent,
    '@shared/components/entity/entity-keys-list.component': EntityKeysListComponent,
    '@shared/components/entity/entity-list-select.component': EntityListSelectComponent,
    '@shared/components/entity/entity-type-list.component': EntityTypeListComponent,
    '@shared/components/queue/queue-autocomplete.component': QueueAutocompleteComponent,
    '@shared/components/relation/relation-type-autocomplete.component': RelationTypeAutocompleteComponent,
    '@shared/components/socialshare-panel.component': SocialSharePanelComponent,
    '@shared/components/json-object-edit.component': JsonObjectEditComponent,
    '@shared/components/json-object-view.component': JsonObjectViewComponent,
    '@shared/components/json-content.component': JsonContentComponent,
    '@shared/components/js-func.component': JsFuncComponent,
    '@shared/components/script-lang.component': TbScriptLangComponent,
    '@shared/components/fab-toolbar.component': FabToolbarComponent,
    '@shared/components/widgets-bundle-select.component': WidgetsBundleSelectComponent,
    '@shared/components/dialog/confirm-dialog.component': ConfirmDialogComponent,
    '@shared/components/dialog/alert-dialog.component': AlertDialogComponent,
    '@shared/components/dialog/todo-dialog.component': TodoDialogComponent,
    '@shared/components/dialog/color-picker-dialog.component': ColorPickerDialogComponent,
    '@shared/components/dialog/material-icons-dialog.component': MaterialIconsDialogComponent,
    '@shared/components/color-input.component': ColorInputComponent,
    '@shared/components/material-icon-select.component': MaterialIconSelectComponent,
    '@shared/components/dialog/node-script-test-dialog.component': NodeScriptTestDialogComponent,
    '@shared/components/json-form/json-form.component': JsonFormComponent,
    '@shared/components/notification/notification.component': NotificationComponent,
    '@shared/components/notification/template-autocomplete.component': TemplateAutocompleteComponent,
    '@shared/components/image-input.component': ImageInputComponent,
    '@shared/components/file-input.component': FileInputComponent,
    '@shared/components/message-type-autocomplete.component': MessageTypeAutocompleteComponent,
    '@shared/components/kv-map.component': KeyValMapComponent,
    '@shared/components/multiple-image-input.component': MultipleImageInputComponent,
    '@shared/components/nav-tree.component': NavTreeComponent,
    '@shared/components/led-light.component': LedLightComponent,
    '@shared/components/directives/tb-json-to-string.directive': TbJsonToStringDirective,
    '@shared/components/dialog/json-object-edit-dialog.component': JsonObjectEditDialogComponent,
    '@shared/components/time/history-selector/history-selector.component': HistorySelectorComponent,
    '@shared/components/entity/entity-gateway-select.component': EntityGatewaySelectComponent,
    '@shared/components/contact.component': ContactComponent,
    '@shared/components/ota-package/ota-package-autocomplete.component': OtaPackageAutocompleteComponent,
    '@shared/components/widgets-bundle-search.component': WidgetsBundleSearchComponent,
    '@shared/components/button/copy-button.component': CopyButtonComponent,
    '@shared/components/button/toggle-password.component': TogglePasswordComponent,
    '@shared/components/protobuf-content.component': ProtobufContentComponent,
    '@shared/components/slack-conversation-autocomplete.component': SlackConversationAutocompleteComponent,

    '@home/components/entity/add-entity-dialog.component': AddEntityDialogComponent,
    '@home/components/entity/entities-table.component': EntitiesTableComponent,
    '@home/components/details-panel.component': DetailsPanelComponent,
    '@home/components/entity/entity-details-panel.component': EntityDetailsPanelComponent,
    '@home/components/audit-log/audit-log-details-dialog.component': AuditLogDetailsDialogComponent,
    '@home/components/audit-log/audit-log-table.component': AuditLogTableComponent,
    '@home/components/event/event-table-header.component': EventTableHeaderComponent,
    '@home/components/event/event-table.component': EventTableComponent,
    '@home/components/event/event-filter-panel.component': EventFilterPanelComponent,
    '@home/components/relation/relation-table.component': RelationTableComponent,
    '@home/components/relation/relation-dialog.component': RelationDialogComponent,
    '@home/components/alarm/alarm-table-header.component': AlarmTableHeaderComponent,
    '@home/components/alarm/alarm-table.component': AlarmTableComponent,
    '@home/components/attribute/attribute-table.component': AttributeTableComponent,
    '@home/components/attribute/add-attribute-dialog.component': AddAttributeDialogComponent,
    '@home/components/attribute/edit-attribute-value-panel.component': EditAttributeValuePanelComponent,
    '@home/components/dashboard/dashboard.component': DashboardComponent,
    '@home/components/widget/widget.component': WidgetComponent,
    '@home/components/widget/legend.component': LegendComponent,
    '@home/components/alias/aliases-entity-select-panel.component': AliasesEntitySelectPanelComponent,
    '@home/components/alias/aliases-entity-select.component': AliasesEntitySelectComponent,
    '@home/components/widget/widget-config.component': WidgetConfigComponent,
    '@home/components/alias/entity-aliases-dialog.component': EntityAliasesDialogComponent,
    '@home/components/entity/entity-filter-view.component': EntityFilterViewComponent,
    '@home/components/alias/entity-alias-dialog.component': EntityAliasDialogComponent,
    '@home/components/entity/entity-filter.component': EntityFilterComponent,
    '@home/components/relation/relation-filters.component': RelationFiltersComponent,
    '@home/components/alias/entity-alias-select.component': EntityAliasSelectComponent,
    '@home/components/widget/data-keys.component': DataKeysComponent,
    '@home/components/widget/data-key-config-dialog.component': DataKeyConfigDialogComponent,
    '@home/components/widget/data-key-config.component': DataKeyConfigComponent,
    '@home/components/widget/legend-config.component': LegendConfigComponent,
    '@home/components/widget/action/manage-widget-actions.component': ManageWidgetActionsComponent,
    '@home/components/widget/action/widget-action-dialog.component': WidgetActionDialogComponent,
    '@home/components/widget/action/custom-action-pretty-resources-tabs.component': CustomActionPrettyResourcesTabsComponent,
    '@home/components/widget/action/custom-action-pretty-editor.component': CustomActionPrettyEditorComponent,
    '@home/components/widget/action/mobile-action-editor.component': MobileActionEditorComponent,
    '@home/components/widget/dialog/custom-dialog.service': CustomDialogService,
    '@home/components/widget/dialog/custom-dialog-container.component': CustomDialogContainerComponent,
    '@home/components/import-export/import-dialog.component': ImportDialogComponent,
    '@home/components/attribute/add-widget-to-dashboard-dialog.component': AddWidgetToDashboardDialogComponent,
    '@home/components/import-export/import-dialog-csv.component': ImportDialogCsvComponent,
    '@home/components/import-export/table-columns-assignment.component': TableColumnsAssignmentComponent,
    '@home/components/event/event-content-dialog.component': EventContentDialogComponent,
    '@home/components/shared-home-components.module': SharedHomeComponentsModule,
    '@home/components/dashboard/select-target-layout-dialog.component': SelectTargetLayoutDialogComponent,
    '@home/components/dashboard/select-target-state-dialog.component': SelectTargetStateDialogComponent,
    '@home/components/alias/aliases-entity-autocomplete.component': AliasesEntityAutocompleteComponent,
    '@home/components/filter/boolean-filter-predicate.component': BooleanFilterPredicateComponent,
    '@home/components/filter/string-filter-predicate.component': StringFilterPredicateComponent,
    '@home/components/filter/numeric-filter-predicate.component': NumericFilterPredicateComponent,
    '@home/components/filter/complex-filter-predicate.component': ComplexFilterPredicateComponent,
    '@home/components/filter/filter-predicate.component': FilterPredicateComponent,
    '@home/components/filter/filter-predicate-list.component': FilterPredicateListComponent,
    '@home/components/filter/key-filter-list.component': KeyFilterListComponent,
    '@home/components/filter/complex-filter-predicate-dialog.component': ComplexFilterPredicateDialogComponent,
    '@home/components/filter/key-filter-dialog.component': KeyFilterDialogComponent,
    '@home/components/filter/filters-dialog.component': FiltersDialogComponent,
    '@home/components/filter/filter-dialog.component': FilterDialogComponent,
    '@home/components/filter/filter-select.component': FilterSelectComponent,
    '@home/components/filter/filters-edit.component': FiltersEditComponent,
    '@home/components/filter/filters-edit-panel.component': FiltersEditPanelComponent,
    '@home/components/filter/user-filter-dialog.component': UserFilterDialogComponent,
    '@home/components/filter/filter-user-info.component': FilterUserInfoComponent,
    '@home/components/filter/filter-user-info-dialog.component': FilterUserInfoDialogComponent,
    '@home/components/filter/filter-predicate-value.component': FilterPredicateValueComponent,
    '@home/components/profile/tenant-profile.component': TenantProfileComponent,
    '@home/components/profile/tenant-profile-dialog.component': TenantProfileDialogComponent,
    '@home/components/profile/tenant-profile-data.component': TenantProfileDataComponent,
    '@home/components/profile/device/default-device-profile-configuration.component': DefaultDeviceProfileConfigurationComponent,
    '@home/components/profile/device/device-profile-configuration.component': DeviceProfileConfigurationComponent,
    '@home/components/profile/device-profile.component': DeviceProfileComponent,
    '@home/components/profile/device/default-device-profile-transport-configuration.component':
    DefaultDeviceProfileTransportConfigurationComponent,
    '@home/components/profile/device/device-profile-transport-configuration.component': DeviceProfileTransportConfigurationComponent,
    '@home/components/profile/device-profile-dialog.component': DeviceProfileDialogComponent,
    '@home/components/profile/device-profile-autocomplete.component': DeviceProfileAutocompleteComponent,
    '@home/components/profile/device/mqtt-device-profile-transport-configuration.component':
    MqttDeviceProfileTransportConfigurationComponent,
    '@home/components/profile/device/coap-device-profile-transport-configuration.component':
    CoapDeviceProfileTransportConfigurationComponent,
    '@home/components/profile/asset-profile.component': AssetProfileComponent,
    '@home/components/profile/asset-profile-dialog.component': AssetProfileDialogComponent,
    '@home/components/profile/asset-profile-autocomplete.component': AssetProfileAutocompleteComponent,
    '@home/components/profile/alarm/device-profile-alarms.component': DeviceProfileAlarmsComponent,
    '@home/components/profile/alarm/device-profile-alarm.component': DeviceProfileAlarmComponent,
    '@home/components/profile/alarm/create-alarm-rules.component': CreateAlarmRulesComponent,
    '@home/components/profile/alarm/alarm-rule.component': AlarmRuleComponent,
    '@home/components/profile/alarm/alarm-rule-condition.component': AlarmRuleConditionComponent,
    '@home/components/filter/filter-text.component': FilterTextComponent,
    '@home/components/profile/add-device-profile-dialog.component': AddDeviceProfileDialogComponent,
    '@home/components/rule-chain/rule-chain-autocomplete.component': RuleChainAutocompleteComponent,
    '@home/components/profile/device-profile-provision-configuration.component': DeviceProfileProvisionConfigurationComponent,
    '@home/components/profile/alarm/alarm-schedule.component': AlarmScheduleComponent,
    '@home/components/wizard/device-wizard-dialog.component': DeviceWizardDialogComponent,
    '@home/components/profile/alarm/alarm-schedule-info.component': AlarmScheduleInfoComponent,
    '@home/components/profile/alarm/alarm-schedule-dialog.component': AlarmScheduleDialogComponent,
    '@home/components/profile/alarm/edit-alarm-details-dialog.component': EditAlarmDetailsDialogComponent,
    '@home/components/profile/alarm/alarm-rule-condition-dialog.component': AlarmRuleConditionDialogComponent,
    '@home/components/profile/tenant/default-tenant-profile-configuration.component': DefaultTenantProfileConfigurationComponent,
    '@home/components/profile/tenant/tenant-profile-configuration.component': TenantProfileConfigurationComponent,
    '@home/components/sms/sms-provider-configuration.component': SmsProviderConfigurationComponent,
    '@home/components/sms/aws-sns-provider-configuration.component': AwsSnsProviderConfigurationComponent,
    '@home/components/sms/twilio-sms-provider-configuration.component': TwilioSmsProviderConfigurationComponent,
    '@home/components/dashboard-page/dashboard-page.component': DashboardPageComponent,
    '@home/components/dashboard-page/dashboard-toolbar.component': DashboardToolbarComponent,
    '@home/components/dashboard-page/layout/dashboard-layout.component': DashboardLayoutComponent,
    '@home/components/dashboard-page/edit-widget.component': EditWidgetComponent,
    '@home/components/dashboard-page/dashboard-widget-select.component': DashboardWidgetSelectComponent,
    '@home/components/dashboard-page/add-widget-dialog.component': AddWidgetDialogComponent,
    '@home/components/dashboard-page/layout/manage-dashboard-layouts-dialog.component': ManageDashboardLayoutsDialogComponent,
    '@home/components/dashboard-page/dashboard-settings-dialog.component': DashboardSettingsDialogComponent,
    '@home/components/dashboard-page/states/manage-dashboard-states-dialog.component': ManageDashboardStatesDialogComponent,
    '@home/components/dashboard-page/states/dashboard-state-dialog.component': DashboardStateDialogComponent,
    '@home/components/widget/dialog/embed-dashboard-dialog.component': EmbedDashboardDialogComponent,
    '@home/components/edge/edge-downlink-table.component': EdgeDownlinkTableComponent,
    '@home/components/edge/edge-downlink-table-header.component': EdgeDownlinkTableHeaderComponent,
    '@home/components/dashboard-page/widget-types-panel.component': DisplayWidgetTypesPanelComponent,
    '@home/components/profile/alarm/alarm-duration-predicate-value.component': AlarmDurationPredicateValueComponent,
    '@home/components/dashboard-page/dashboard-image-dialog.component': DashboardImageDialogComponent,
    '@home/components/widget/widget-container.component': WidgetContainerComponent,
    '@home/components/profile/queue/tenant-profile-queues.component': TenantProfileQueuesComponent,
    '@home/components/queue/queue-form.component': QueueFormComponent
  };

  init() {
    if (!this.initialized) {
      System.constructor.prototype.resolve = (id) => {
        try {
          if (this.modulesMap[id]) {
            return 'app:' + id;
          } else {
            return id;
          }
        } catch (err) {
          return id;
        }
      };
      for (const moduleId of Object.keys(this.modulesMap)) {
        System.set('app:' + moduleId, this.modulesMap[moduleId]);
      }
      this.initialized = true;
    }
  }
}

export const modulesMap = new ModulesMap();
