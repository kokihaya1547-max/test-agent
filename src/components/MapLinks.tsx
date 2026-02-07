import { FC } from "react";

type MapLinks = {
  osm: string;
  glink: string;
  gdir: string;
  amap: string;
  embed: string;
};

export const mapLinks: MapLinks = {
  osm: "https://www.openstreetmap.org/search?query=Chichibugahama%20Port",
  glink: "https://www.google.com/maps/search/?api=1&query=34.232,133.650",
  gdir: "https://www.google.com/maps/dir/?api=1&destination=34.232,133.650",
  amap: "http://maps.apple.com/?daddr=34.232,133.650",
  embed:
    "https://www.openstreetmap.org/export/embed.html?bbox=133.620,34.222,133.680,34.242&marker=34.232,133.650&layer=mapnik",
};

type MapLinksProps = {
  showEmbed?: boolean;
};

export const MapLinksCard: FC<MapLinksProps> = ({ showEmbed = false }) => (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-3">
      <a
        href={mapLinks.glink}
        target="_blank"
        rel="noreferrer noopener"
        className="rounded-xl border-4 border-white bg-white px-3 py-1 font-extrabold shadow"
      >
        Google Maps 열기
      </a>

      <a
        href={mapLinks.gdir}
        target="_blank"
        rel="noreferrer noopener"
        className="rounded-xl border-4 border-white bg-white px-3 py-1 font-extrabold shadow"
      >
        구글 길찾기
      </a>

      <a
        href={mapLinks.amap}
        target="_blank"
        rel="noreferrer noopener"
        className="rounded-xl border-4 border-white bg-white px-3 py-1 font-extrabold shadow"
      >
        애플맵 길찾기
      </a>
    </div>

    {showEmbed && (
      <iframe
        title="map-osm"
        className="h-[360px] w-full md:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={mapLinks.embed}
      />
    )}
  </div>
);

export default MapLinksCard;
