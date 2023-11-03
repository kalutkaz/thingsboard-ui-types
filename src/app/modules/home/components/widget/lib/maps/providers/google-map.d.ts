import LeafletMap from '../leaflet-map';
import { WidgetUnitedMapSettings } from '../map-models';
import 'leaflet.gridlayer.googlemutant';
import { WidgetContext } from '../../../../../../../../../../thingsboard/ui-ngx/src/app/modules/home/models/widget-component.models';
export declare class GoogleMap extends LeafletMap {
    private resource;
    constructor(ctx: WidgetContext, $container: any, options: WidgetUnitedMapSettings);
    private loadGoogle;
}
