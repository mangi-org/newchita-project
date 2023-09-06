import React, { useEffect, useRef } from 'react';
import StateMapInterface from './interface';
import { getArrayAboutProject } from '../../axios';
import BallonCard from './BallonCard';
import './Map.css'


/**
 * Renders a map component with markers based on project data.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>['className']} className - An optional className for the component.
 * @return {React.ReactElement} The rendered map component.
 */
function MapComponent(props: React.ComponentProps<"div">) {
    const mapRef = useRef<HTMLDivElement>(null);

    const resultClassName = props.className ? " "+props.className : '';
    const defaultState: StateMapInterface = {
        center: [52.033635, 113.501049],
        zoom: 15,
        controls: ["zoomControl"],
    };

    useEffect(() => {
        document.body.classList.add('map');

        return () => {
            document.body.classList.remove('map');
        }
    }, [])

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const ymaps = window.ymaps;
        ymaps.ready(() => {
            const map = new ymaps.Map(mapRef.current, defaultState);
            getArrayAboutProject().then(data => {
                data.forEach((item, index) => {
                    let smallDescription: string;

                    if (item.description.length > 100) {
                        smallDescription = item.description.substr(0, 100) + '...';
                    } else {
                        smallDescription = item.description;
                    }


                    if (index === 0) {
                        map.setCenter([Number(item.latitude), Number(item.longitude)])
                    }
                    const positionMarker = [Number(item.latitude), Number(item.longitude)];

                    const ballonOutput = BallonCard({ item });

                    const contentMarker = {
                        hintContent: smallDescription,
                        iconCaption: item.title,
                        balloonContent: ballonOutput,
                        ballonMinWidth: 0,
                        ballonMaxHeight: 560
                    }
                    const styleMarker = {
                        preset: 'islands#blueCircleDotIconWithCaption',
                        iconColor: item.color,
                    }
                    const marker = new ymaps.Placemark(positionMarker, contentMarker, styleMarker);
                    map.geoObjects.add(marker);
                })
                map.setBounds(map.geoObjects.getBounds(), {
                    checkZoomRange: true,
                    zoomMargin: 100
                });
            })
        });

    }, []);

    return <div id="map" ref={mapRef} className={"w-full min-h-screen" + resultClassName}></div>;
}

export default MapComponent;