import React, { useEffect, useState } from "react";

const YandexMap = () => {
  const [userLocation, setUserLocation] = useState([41.312336, 69.278707]);
  const [mapInstance, setMapInstance] = useState(null);
  useEffect(() => {
    const loadMap = () => {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map("yandex-map", {
          center: userLocation,
          zoom: 15,
        });

        const placemark = new window.ymaps.Placemark(userLocation, {
          hintContent: "Sizning joylashuvingiz",
          balloonContent: "Siz shu yerda joylashgansiz",
        });

        map.geoObjects.add(placemark);
        setMapInstance(map);
      });
    };

    if (!window.ymaps) {
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.async = true;
      script.onload = loadMap;
      document.body.appendChild(script);
    } else {
      loadMap();
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = [
            position.coords.latitude,
            position.coords.longitude,
          ];
          setUserLocation(newLocation);
          if (mapInstance) {
            mapInstance.setCenter(newLocation);
          }
        },
        () => {
          console.log("Geolokatsiyaga ruxsat berilmadi!");
        }
      );
    }
  }, [mapInstance]);

  return <div id="yandex-map" style={{ width: "100%", height: "400px" }} />;
};

export default YandexMap;
