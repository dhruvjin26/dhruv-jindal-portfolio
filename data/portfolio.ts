import { type CityCoordinateKey, getCityCoordinates } from "@/lib/cityCoordinates";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type JourneyStop = {
  city: string;
  label: string;
  description: string;
  image: GalleryImage;
};

export type Experience = {
  title: string;
  eyebrow: string;
  description: string;
  accent: "sky" | "amber";
};

export type DestinationGroup = {
  state: string;
  destinations: string[];
};

export type FeaturedDestination = {
  title: string;
  caption: string;
  image: GalleryImage;
};

export type Adventure = {
  title: string;
  description: string;
  image: GalleryImage;
  videos: string[];
};

export type CookingItem = {
  title: string;
  description: string;
  image: GalleryImage;
};

export type Project = {
  title: string;
  description: string;
  screenshot: GalleryImage;
  tags: string[];
  href?: string;
};

export type CityMarker = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  label?: string;
  region: string;
  accent?: "sky" | "amber";
};

function cityMarker(
  id: string,
  name: string,
  region: string,
  coordinateKey: CityCoordinateKey,
  accent?: "sky" | "amber",
  label?: string
): CityMarker {
  const { lat, lng } = getCityCoordinates(coordinateKey);
  return { id, name, lat, lng, region, accent, label };
}

export const journeyStops: JourneyStop[] = [
  {
    city: "Balotra",
    label: "Roots",
    description: "A small-town beginning in Rajasthan, where family, curiosity, and grounded ambition formed the base of the journey.",
    image: { src: "/images/journey/balotra.jpeg", alt: "Balotra" }
  },
  {
    city: "Surat",
    label: "Early Years",
    description: "A fast-moving city that shaped adaptability, friendships, and the first taste of living beyond familiar lanes.",
    image: { src: "/images/journey/surat.jpeg", alt: "Surat" }
  },
  {
    city: "Jaipur",
    label: "Ambition",
    description: "A chapter of discipline and aspiration, surrounded by heritage, focus, and the push toward larger rooms.",
    image: { src: "/images/journey/jaipur.jpeg", alt: "Jaipur" }
  },
  {
    city: "Chennai",
    label: "Transformation",
    description: "IIT Madras brought scale, leadership, creative communities, and a sharper sense of what meaningful work can feel like.",
    image: { src: "/images/journey/chennai.jpeg", alt: "Chennai" }
  },
  {
    city: "Hyderabad",
    label: "Independence",
    description: "A period of self-reliance, work rhythms, and discovering the confidence that comes from navigating life independently.",
    image: { src: "/images/journey/hyderabad.jpeg", alt: "Hyderabad" }
  },
  {
    city: "Vadodara",
    label: "New Perspectives",
    description: "A new lens on teams, industries, and how business decisions become real through people and execution.",
    image: { src: "/images/journey/vadodara.jpeg", alt: "Vadodara" }
  },
  {
    city: "Bhubaneswar",
    label: "Next Chapter",
    description: "The MBA chapter at XIMB begins here, with technology, leadership, and business coming into a new frame.",
    image: { src: "/images/journey/bhubaneswar.jpeg", alt: "Bhubaneswar" }
  }
];

export const journeyMapMarkers: CityMarker[] = [
  cityMarker("balotra", "Balotra", "Rajasthan", "balotra", "amber", "Roots"),
  cityMarker("surat", "Surat", "Gujarat", "surat", "sky", "Early Years"),
  cityMarker("jaipur", "Jaipur", "Rajasthan", "jaipur", "amber", "Ambition"),
  cityMarker("chennai", "Chennai", "Tamil Nadu", "chennai", "sky", "Transformation"),
  cityMarker("hyderabad", "Hyderabad", "Telangana", "hyderabad", "amber", "Independence"),
  cityMarker("vadodara", "Vadodara", "Gujarat", "vadodara", "sky", "New Perspectives"),
  cityMarker("bhubaneswar", "Bhubaneswar", "Odisha", "bhubaneswar", "amber", "Next Chapter")
];

export const experiences: Experience[] = [
  {
    title: "Institute Branding Cell",
    eyebrow: "IIT Madras",
    description: "Built narratives for one of India's most recognized institutions, balancing credibility, clarity, and reach.",
    accent: "sky"
  },
  {
    title: "Shaastra",
    eyebrow: "Technology Festival",
    description: "Worked inside a high-energy student ecosystem where ownership, coordination, and execution mattered every day.",
    accent: "amber"
  },
  {
    title: "Day@IITM",
    eyebrow: "Campus Experience",
    description: "Helped shape experiences that let visitors feel the spirit, rigor, and culture of IIT Madras up close.",
    accent: "sky"
  },
  {
    title: "Anchoring",
    eyebrow: "Stage & Presence",
    description: "Found joy in hosting rooms, reading energy, and turning formal moments into memorable shared experiences.",
    accent: "amber"
  },
  {
    title: "Winfra",
    eyebrow: "Work Exposure",
    description: "Learned how teams convert plans into outcomes through discipline, communication, and practical decision-making.",
    accent: "sky"
  },
  {
    title: "Clear Thermal Energy",
    eyebrow: "Industry Perspective",
    description: "Explored the intersection of energy, operations, and responsible growth through hands-on exposure.",
    accent: "amber"
  }
];

export const travelStats = [
  { value: "7", label: "Cities Lived In" },
  { value: "25+", label: "Cities Explored" },
  { value: "12+", label: "States Visited" },
  { value: "4", label: "Adventure Sports" }
];

export const destinationGroups: DestinationGroup[] = [
  { state: "Rajasthan", destinations: ["Balotra", "Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"] },
  { state: "Gujarat", destinations: ["Surat", "Ahmedabad", "Vadodara", "Statue of Unity", "Daman"] },
  { state: "Maharashtra", destinations: ["Mumbai", "Lonavala", "Alibagh"] },
  { state: "Tamil Nadu", destinations: ["Chennai", "Pondicherry"] },
  { state: "Karnataka", destinations: ["Bangalore", "Coorg"] },
  { state: "Kerala", destinations: ["Kerala"] },
  { state: "Uttarakhand", destinations: ["Haridwar", "Rishikesh", "Nainital", "Bhimtal", "Jim Corbett"] },
  { state: "Himachal Pradesh", destinations: ["Spiti Valley"] },
  { state: "Sikkim", destinations: ["Gangtok"] },
  { state: "West Bengal", destinations: ["Darjeeling"] },
  { state: "Delhi", destinations: ["Delhi"] },
  { state: "Punjab", destinations: ["Punjab"] },
  { state: "Chandigarh", destinations: ["Chandigarh"] },
  { state: "Goa", destinations: ["Goa"] },
  { state: "Telangana", destinations: ["Hyderabad"] },
  { state: "Odisha", destinations: ["Bhubaneswar"] }
];

export const travelMapMarkers: CityMarker[] = [
  cityMarker("balotra-travel", "Balotra", "Rajasthan", "balotra", "amber"),
  cityMarker("jaipur-travel", "Jaipur", "Rajasthan", "jaipur", "amber"),
  cityMarker("jodhpur", "Jodhpur", "Rajasthan", "jodhpur", "sky"),
  cityMarker("udaipur", "Udaipur", "Rajasthan", "udaipur", "sky"),
  cityMarker("jaisalmer", "Jaisalmer", "Rajasthan", "jaisalmer", "sky"),
  cityMarker("surat-travel", "Surat", "Gujarat", "surat", "amber"),
  cityMarker("ahmedabad", "Ahmedabad", "Gujarat", "ahmedabad", "sky"),
  cityMarker("vadodara-travel", "Vadodara", "Gujarat", "vadodara", "amber"),
  cityMarker("statue-of-unity", "Statue of Unity", "Gujarat", "statue-of-unity", "sky"),
  cityMarker("daman", "Daman", "Gujarat", "daman", "sky"),
  cityMarker("mumbai", "Mumbai", "Maharashtra", "mumbai", "amber"),
  cityMarker("lonavala", "Lonavala", "Maharashtra", "lonavala", "sky"),
  cityMarker("alibagh", "Alibagh", "Maharashtra", "alibagh", "sky"),
  cityMarker("chennai-travel", "Chennai", "Tamil Nadu", "chennai", "amber"),
  cityMarker("pondicherry", "Pondicherry", "Tamil Nadu", "pondicherry", "sky"),
  cityMarker("bangalore", "Bangalore", "Karnataka", "bangalore", "amber"),
  cityMarker("coorg", "Coorg", "Karnataka", "coorg", "sky"),
  cityMarker("kerala", "Kerala", "Kerala", "kerala", "amber"),
  cityMarker("haridwar", "Haridwar", "Uttarakhand", "haridwar", "sky"),
  cityMarker("rishikesh", "Rishikesh", "Uttarakhand", "rishikesh", "amber"),
  cityMarker("nainital", "Nainital", "Uttarakhand", "nainital", "sky"),
  cityMarker("bhimtal", "Bhimtal", "Uttarakhand", "bhimtal", "sky"),
  cityMarker("jim-corbett", "Jim Corbett", "Uttarakhand", "jim-corbett", "sky"),
  cityMarker("spiti", "Spiti Valley", "Himachal Pradesh", "spiti", "amber"),
  cityMarker("gangtok", "Gangtok", "Sikkim", "gangtok", "amber"),
  cityMarker("darjeeling", "Darjeeling", "West Bengal", "darjeeling", "sky"),
  cityMarker("delhi", "Delhi", "Delhi", "delhi", "amber"),
  cityMarker("punjab", "Punjab", "Punjab", "punjab", "sky"),
  cityMarker("chandigarh", "Chandigarh", "Chandigarh", "chandigarh", "amber"),
  cityMarker("goa", "Goa", "Goa", "goa", "amber"),
  cityMarker("hyderabad-travel", "Hyderabad", "Telangana", "hyderabad", "sky"),
  cityMarker("bhubaneswar-travel", "Bhubaneswar", "Odisha", "bhubaneswar", "sky")
];

export const featuredDestinations: FeaturedDestination[] = [
  {
    title: "Spiti Valley",
    caption: "Cold desert roads, quiet skies, and the kind of scale that stays with you.",
    image: { src: "/images/journey/spiti.jpeg", alt: "Spiti Valley" }
  },
  {
    title: "Rishikesh",
    caption: "Riverside energy, adventure, and stillness in the same frame.",
    image: { src: "/images/journey/rishikesh.jpeg", alt: "Rishikesh" }
  },
  {
    title: "Goa",
    caption: "A slower rhythm, open water, and evenings made for good conversations.",
    image: { src: "/images/journey/goa.jpeg", alt: "Goa" }
  }
];

export const adventures: Adventure[] = [
  {
    title: "Bungee Jumping",
    description: "A clean second of silence before the world rushes back in.",
    image: { src: "/images/adventures/bungee.jpeg", alt: "Bungee jumping" },
    videos: ["Add bungee jump video"]
  },
  {
    title: "Paragliding",
    description: "Floating above the landscape with the rare feeling of doing very little and feeling everything.",
    image: { src: "/images/adventures/paragliding.jpeg", alt: "Paragliding" },
    videos: ["Add paragliding video"]
  },
  {
    title: "River Rafting",
    description: "Fast water, fast decisions, and a shared rush that turns strangers into a team.",
    image: { src: "/images/adventures/rafting.jpeg", alt: "River rafting" },
    videos: ["Add rafting video"]
  },
  {
    title: "Scuba Diving",
    description: "A slower universe below the surface, calm enough to make time feel different.",
    image: { src: "/images/adventures/scuba.jpeg", alt: "Scuba diving" },
    videos: ["Add scuba video"]
  }
];

export const cookingItems: CookingItem[] = [
  {
    title: "White Sauce Pasta",
    description: "Creamy, comforting, and best served without rushing.",
    image: { src: "/images/cooking/white-sauce-pasta.jpeg", alt: "White sauce pasta" }
  },
  {
    title: "Spaghetti",
    description: "Simple ingredients, patient heat, and a very satisfying plate.",
    image: { src: "/images/cooking/spaghetti.jpeg", alt: "Spaghetti" }
  },
  {
    title: "Sauteed Vegetables",
    description: "Color, crunch, and the kind of weekday cooking that still feels fresh.",
    image: { src: "/images/cooking/sauteed-vegetables.jpeg", alt: "Sauteed vegetables" }
  },
  {
    title: "Avocado Toast",
    description: "Clean, bright, and quietly dependable.",
    image: { src: "/images/cooking/avocado-toast.jpeg", alt: "Avocado toast" }
  },
  {
    title: "Mexican Rice",
    description: "Warm spices, layered texture, and a bowl that lands well every time.",
    image: { src: "/images/cooking/mexican-rice.jpeg", alt: "Mexican rice" }
  },
  {
    title: "Sweet Potato Crisps",
    description: "A little sweet, a little crisp, and dangerously snackable.",
    image: { src: "/images/cooking/sweet-potato-crisps.jpeg", alt: "Sweet potato crisps" }
  },
  {
    title: "Surati Aloo Puri",
    description: "A city memory on a plate, rich with comfort and nostalgia.",
    image: { src: "/images/cooking/surati-aloo-puri.jpeg", alt: "Surati aloo puri" }
  }
];

export const currentlyEnjoying = [
  "Learning Guitar",
  "Sherlock",
  "Family Man",
  "Stranger Things",
  "Omniscient Reader's Viewpoint"
];

export const projects: Project[] = [
  {
    title: "GeoIntel",
    description: "A geospatial intelligence concept that turns location signals into clearer decisions and richer context.",
    screenshot: { src: "/images/projects/geointel.jpeg", alt: "GeoIntel project screenshot" },
    tags: ["Maps", "Analytics", "Geospatial", "Dashboards"],
    href: "https://github.com/"
  },
  {
    title: "Music-to-Tones",
    description: "An audio experiment that translates music into structured tones, patterns, and playful interpretation.",
    screenshot: { src: "/images/projects/music-to-tones.jpeg", alt: "Music-to-Tones project screenshot" },
    tags: ["Audio", "Signal Processing", "Creative Tech", "TypeScript"],
    href: "https://github.com/"
  }
];
