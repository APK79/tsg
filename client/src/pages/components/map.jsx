import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YaMap = () => {

    const [zoom, setZoom] = React.useState(17);
    const mapState = React.useMemo(
      () => ({ center: [56.779816, 60.548759], zoom, controls: ["zoomControl", "fullscreenControl"] }),
      [zoom]
    );

    return(
        <YMaps>
            <div>
                <Map defaultState={mapState} width='100%' height='40rem' modules={["control.ZoomControl", "control.FullscreenControl"]}>
                    <Placemark defaultGeometry={[56.779816, 60.548759]} />
                </Map>
            </div>
        </YMaps>
    )
}

export default YaMap;