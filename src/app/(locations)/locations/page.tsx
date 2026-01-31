import type { Metadata } from "next";
import LocationsDirectory from "./LocationsDirectory";

export const metadata: Metadata = {
  title: "Jacksonville Estate Service Areas | Clear Path Estates",
  description:
    "Explore Clear Path Estates’ service areas across Jacksonville neighborhoods and nearby metro communities. Each location page details estate sale logistics, donation coordination, and buyout options.",
};

export default function LocationsIndexPage() {
  return <LocationsDirectory />;
}

