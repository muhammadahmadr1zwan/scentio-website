/**
 * Remote photos (Unsplash) chosen to match venue and service context.
 * `ixlib` helps stable delivery from images.unsplash.com.
 */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.1.0&auto=format&fit=crop&w=${w}&q=80`;

export const siteImages = {
  gymInterior: u("photo-1534438327276-14e5300c3a48"),
  mallRetailInterior: u("photo-1441986300917-64674bd600d8"),
  airportTerminal: u("photo-1569154941061-e231b4725ef1"),
  customVenueConcept: u("photo-1497366216548-37526070297c"),
  /** How It Works & services — perfume counter / lineup */
  fragranceCounterDisplay: u("photo-1615634260167-c8cdede054de"),
  fineFragranceMist: u("photo-1612817288484-6f916006741a"),
  citrusZesty: u("photo-1608571423902-eed4a5ad8108"),
  warmSpicyBottle: u("photo-1541643600914-78b084683601"),

  /** How It Works — step imagery aligned to copy */
  contactlessTapPay: u("photo-1556742049-0cfed4f6a45d", 1200),
  perfumeBottleSelection: u("photo-1587017539504-67cfbddac569", 1200),
  refreshedAfterUse: u("photo-1571019613454-1cb2f99b2d8b", 1200),
} as const;
