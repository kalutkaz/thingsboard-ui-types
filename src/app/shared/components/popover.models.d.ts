import { AnimationTriggerMetadata } from '@angular/animations';
import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { TbPopoverComponent } from '../../../../../thingsboard/ui-ngx/src/app/shared/components/popover.component';
export declare const popoverMotion: AnimationTriggerMetadata;
export declare const PopoverPlacements: readonly ["top", "topLeft", "topRight", "right", "rightTop", "rightBottom", "bottom", "bottomLeft", "bottomRight", "left", "leftTop", "leftBottom"];
type PopoverPlacementTuple = typeof PopoverPlacements;
export type PopoverPlacement = PopoverPlacementTuple[number];
export declare const POSITION_MAP: {
    [key: string]: ConnectionPositionPair;
};
export declare const DEFAULT_POPOVER_POSITIONS: ConnectionPositionPair[];
export declare function getPlacementName(position: ConnectedOverlayPositionChange): PopoverPlacement | undefined;
export interface PropertyMapping {
    [key: string]: [string, () => unknown];
}
export interface PopoverWithTrigger {
    trigger: Element;
    popoverComponent: TbPopoverComponent;
}
export {};
