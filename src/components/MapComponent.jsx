import React, { useEffect, useRef, useState } from "react";
import { Map, Overlay, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import { createVectorLayerStations, vectorLayerLines, vectorLayerStationLayouts, vectorLayerStationWalks } from "./VectorLayers"; // Import vector layers
import { useMapContext } from "../context/MapContext"; // Assuming you have a context provider for map state
import StationPanel from "./StationPanel";
import StationPopup from "./StationPopup"; // Assuming this is your station popup component
import stationSequences from './stationSequences';

const MapComponent = () => {
  const { setSelectedStation, setSelectedLine } = useMapContext();
  const [selectedStation, setSelectedStationState] = useState(null);
  const [coordinate, setCoordinate] = useState(null);
  const [showStationPanel, setShowStationPanel] = useState(false);

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const stationPopupRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return; // Ensure map is only initialized once

    const baseLayer = new TileLayer({
      source: new XYZ({
        url: "https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}@2x.png",
      }),
    });

    if (stationPopupRef.current) {
      overlayRef.current = new Overlay({
        element: stationPopupRef.current,
        positioning: "bottom-center",
        offset: [0, -10],
        autoPan: true,
        autoPanAnimation: { duration: 250 },
      });
    }

    // Create the map instance and layers
    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        baseLayer,
        vectorLayerLines, // Vector layer for lines
        vectorLayerStationLayouts, // Vector layer for station layouts
        vectorLayerStationWalks, // Vector layer for walk paths
      ],
      view: new View({
        center: fromLonLat([80.237617, 13.067439]),
        zoom: 11,
        minZoom: 11,
        maxZoom: 22,
      }),
      overlays: overlayRef.current ? [overlayRef.current] : [],
      pixelRatio: 2,
      renderer: "canvas",
    });

    // Store the map instance in the ref
    mapInstanceRef.current = map;

    // Initialize the vector layer for stations after map initialization
    const vectorLayerStations = createVectorLayerStations(map);
    map.addLayer(vectorLayerStations);

    // Handle interactions
    map.on("pointerdown", () => (map.getTargetElement().style.cursor = "grabbing"));
    map.on("pointerdrag", () => (map.getTargetElement().style.cursor = "grabbing"));
    map.on("pointerup", () => (map.getTargetElement().style.cursor = "grab"));

    map.on("click", handleMapClick);
    map.on("pointermove", handlePointerMove);

    return () => {
      map.setTarget(null);
      mapInstanceRef.current = null;
      overlayRef.current = null;
    };
  }, []); // Empty dependency array to ensure effect only runs once

  // Handle the station click event to set selected station and show the popup
  const handleStationClick = (feature) => {
    const properties = feature.getProperties();
    console.log("Clicked Station Properties:", properties);

    if (!properties || !properties.name) return; // Ensure feature has name

    const station = {
      name: properties.name,
      name_ta: properties.name_ta || "N/A",
      line: properties.line || "Unknown Line",
      network: properties.network || "N/A",
      id: properties.id || "N/A",
      parking: properties.parking || "no",
      accessible: properties.accessible || "no",
      escalator: properties.escalator || "no",
      type: properties.type || "no",
      frequency: properties.frequency || "N/A"
    };

    setSelectedStationState(station);
    setCoordinate(feature.getGeometry().getCoordinates());

    if (overlayRef.current) {
      overlayRef.current.setPosition(feature.getGeometry().getCoordinates());
    }
  };

  // Handle map click event
  const handleMapClick = (e) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    let clickedFeature = null;
    map.forEachFeatureAtPixel(e.pixel, (feature) => {
      if (feature.getGeometry().getType() === "Point") {
        clickedFeature = feature;
        return true;
      }
    });

    if (!clickedFeature) {
      setSelectedStationState(null);
      if (overlayRef.current) {
        overlayRef.current.setPosition(undefined);
      }
      return;
    }

    handleStationClick(clickedFeature);
  };

  const handlePointerMove = (e) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    const hit = map.hasFeatureAtPixel(map.getEventPixel(e.originalEvent));
    map.getTargetElement().style.cursor = hit ? "pointer" : "";
  };

  const handleMoreDetailsClick = () => {
    setShowStationPanel(true); // Open the side panel when the "More Details" button is clicked
  };

  return (
    <div ref={mapContainerRef} className="h-full relative">
      {/* Station Popup Overlay */}
      <div
        ref={stationPopupRef}
        className="station-popup rounded-lg p-5 inline-block w-auto"
        style={{
          pointerEvents: "auto",
          fontSize: "13px",
          display: selectedStation ? "block" : "none",
          whiteSpace: "nowrap"
        }}
      >
        <StationPopup selectedStation={selectedStation} onMoreDetailsClick={handleMoreDetailsClick} />
      </div>

      {/* Station Panel for Station Details */}
      {showStationPanel && (
        <StationPanel
          selectedStation={selectedStation}
          onClose={() => setShowStationPanel(false)} // Close the station panel
          onStationClick={handleStationClick}
          stationSequences={stationSequences}
        />
      )}
    </div>
  );
};

export default MapComponent;
