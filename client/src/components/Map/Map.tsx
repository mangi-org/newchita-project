import { useEffect, useRef } from 'react';
import StateMapInterface from './interface';

const colorMarkerArray = [
    "#fdba2c",
    "#9acd32",
    "#a630a2",
    "#d22115",
    "#1d1d1b"
]

function MapComponent() {
    const mapRef = useRef<HTMLDivElement>(null);

    const defaultState: StateMapInterface = {
        center: [55.75, 37.57],
        zoom: 15,
        controls: ["zoomControl"],
    };

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const ymaps = window.ymaps;
        ymaps.ready(() => {
            const map = new ymaps.Map(mapRef.current, defaultState);
            const marker = new ymaps.Placemark([55.75, 37.57], {
                hintContent: 'Чита'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconColor: colorMarkerArray[Math.floor(Math.random() * colorMarkerArray.length)],
            });
            map.geoObjects.add(marker);

        });

    }, []);

    return <div id="map" ref={mapRef} className="w-full min-h-screen"></div>;
}

export default MapComponent;