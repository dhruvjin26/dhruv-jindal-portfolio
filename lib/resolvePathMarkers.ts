import type { CityMarker } from "@/data/portfolio";

export function resolvePathMarkers(markers: CityMarker[], pathMarkerIds?: string[]) {
  if (!pathMarkerIds?.length) return markers;

  const markerById = new Map(markers.map((marker) => [marker.id, marker]));
  return pathMarkerIds.map((id) => markerById.get(id)).filter((marker): marker is CityMarker => Boolean(marker));
}
