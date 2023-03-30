import { HasUUID } from '@shared/models/id/has-uuid';
export declare type MenuSectionType = 'link' | 'toggle';
export interface MenuSection extends HasUUID {
    name: string;
    type: MenuSectionType;
    path: string;
    icon: string;
    isMdiIcon?: boolean;
    pages?: Array<MenuSection>;
    opened?: boolean;
    disabled?: boolean;
    rootOnly?: boolean;
}
export interface HomeSection {
    name: string;
    places: Array<HomeSectionPlace>;
}
export interface HomeSectionPlace {
    name: string;
    icon: string;
    isMdiIcon?: boolean;
    path: string;
}
