"use client";

import { useEffect, useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, Polyline, TileLayer, useMap } from "react-leaflet";
import type { CityMarker } from "@/data/portfolio";
import { resolvePathMarkers } from "@/lib/resolvePathMarkers";
import "leaflet/dist/leaflet.css";

export type GISMapProps = {
  markers: CityMarker[];
  pathMarkerIds?: string[];
  activeId?: string;
  onSelect?: (marker: CityMarker) => void;
  showPath?: boolean;
  density?: "calm" | "dense";
};

const INDIA_CENTER: [number, number] = [22.5, 79.0];
const INDIA_BOUNDS: L.LatLngBoundsExpression = [
  [6.5, 68.0],
  [37.5, 97.5]
];

function configureLeafletDefaults() {
  const iconDefault = L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown };
  delete iconDefault._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createMarkerIcon(marker: CityMarker, options: { isActive: boolean; pathIndex: number; density: "calm" | "dense" }) {
  const { isActive, pathIndex, density } = options;
  const isPathStop = pathIndex >= 0;
  const accent = marker.accent === "amber" ? "#F59E0B" : "#38BDF8";
  const size = isPathStop ? 24 : isActive ? 16 : density === "dense" ? 10 : 12;
  const labelVisible = density === "calm" || isActive;
  const labelClass = labelVisible ? "gis-marker__label is-visible" : "gis-marker__label";

  const html = `
    <div class="gis-marker ${isActive ? "is-active" : ""} ${isPathStop ? "is-path-stop" : ""}">
      <span class="gis-marker__dot" style="width:${size}px;height:${size}px;background:${accent};">
        ${isPathStop ? `<span class="gis-marker__index">${pathIndex + 1}</span>` : ""}
      </span>
      <span class="${labelClass}">${escapeHtml(marker.name)}</span>
    </div>
  `;

  return L.divIcon({
    className: "gis-marker-icon",
    html,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2]
  });
}

configureLeafletDefaults();

function MapViewport({ markers, density }: { markers: CityMarker[]; density: "calm" | "dense" }) {
  const map = useMap();

  useEffect(() => {
    if (!markers.length) {
      map.setView(INDIA_CENTER, 5);
      return;
    }

    const bounds = L.latLngBounds(markers.map((marker) => [marker.lat, marker.lng]));
    map.fitBounds(bounds.pad(0.18), {
      maxZoom: density === "dense" ? 6 : 5,
      animate: false
    });
  }, [map, markers, density]);

  return null;
}

function AnimatedPath({ positions }: { positions: [number, number][] }) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.querySelectorAll<SVGPathElement>(".gis-journey-path").forEach((element) => {
        const length = element.getTotalLength();
        element.style.strokeDasharray = `${length}`;
        element.style.strokeDashoffset = `${length}`;
        element.style.animation = "gis-path-draw 1.4s ease forwards 0.15s";
      });
    }, 80);

    return () => window.clearTimeout(timer);
  }, [positions]);

  return null;
}

export function GISMapInner({
  markers,
  pathMarkerIds,
  activeId,
  onSelect,
  showPath = false,
  density = "calm"
}: GISMapProps) {
  const pathMarkers = useMemo(() => resolvePathMarkers(markers, pathMarkerIds), [markers, pathMarkerIds]);
  const pathPositions = useMemo(
    () => pathMarkers.map((marker) => [marker.lat, marker.lng] as [number, number]),
    [pathMarkers]
  );

  return (
    <div className="relative overflow-hidden rounded-[0.5rem] border border-white/10 bg-[#05101d] p-3 shadow-glow sm:p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(56,189,248,0.18),transparent_16rem),radial-gradient(circle_at_78%_74%,rgba(245,158,11,0.14),transparent_18rem)]" />

      <div className="relative z-10 h-[22rem] w-full overflow-hidden rounded-[0.45rem] border border-white/10 sm:h-[26rem] lg:h-[28rem]">
        <MapContainer
          center={INDIA_CENTER}
          zoom={5}
          minZoom={4}
          maxZoom={12}
          maxBounds={INDIA_BOUNDS}
          maxBoundsViscosity={0.85}
          scrollWheelZoom={density === "calm"}
          className="h-full w-full"
          style={{ height: "100%", width: "100%", background: "#e2e8f0" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapViewport markers={markers} density={density} />

          {showPath && pathPositions.length > 1 ? (
            <>
              <Polyline
                positions={pathPositions}
                pathOptions={{
                  color: "rgba(2,6,23,0.72)",
                  weight: 5,
                  opacity: 0.9,
                  lineCap: "round",
                  lineJoin: "round",
                  dashArray: "10 8",
                  className: "gis-journey-path-shadow"
                }}
              />
              <Polyline
                positions={pathPositions}
                pathOptions={{
                  color: "rgba(56,189,248,0.95)",
                  weight: 2.5,
                  opacity: 1,
                  lineCap: "round",
                  lineJoin: "round",
                  className: "gis-journey-path"
                }}
              />
              <AnimatedPath positions={pathPositions} />
            </>
          ) : null}

          {markers.map((marker) => {
            const isActive = marker.id === activeId;
            const pathIndex = showPath ? pathMarkers.findIndex((stop) => stop.id === marker.id) : -1;

            return (
              <Marker
                key={marker.id}
                position={[marker.lat, marker.lng]}
                icon={createMarkerIcon(marker, { isActive, pathIndex, density })}
                eventHandlers={{
                  click: () => onSelect?.(marker)
                }}
                zIndexOffset={isActive ? 1000 : pathIndex >= 0 ? 500 : 0}
              />
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
