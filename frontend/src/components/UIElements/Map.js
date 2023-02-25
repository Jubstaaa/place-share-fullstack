import React, { useRef, useEffect } from "react";

function Map({ center, zoom }) {
  const mapRef = useRef();
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    new window.google.maps.Marker({ position: center, map });
  }, [center, zoom]);

  return (
    <div ref={mapRef} className="w-full h-full">
      Map
    </div>
  );
}

export default Map;
