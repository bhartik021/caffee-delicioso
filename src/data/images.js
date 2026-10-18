// Stock photography from Unsplash — swap for real café photos when available.
const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const img = {
  latteArtPour: (w) => u('1541167760496-1628856ab772', w),
  lattesPlants: (w) => u('1509042239860-f550ce710b93', w),
  cheersCups: (w) => u('1495474472287-4d71bcdd2085', w),
  oreoShake: (w) => u('1572490122747-3968b75cc699', w),
  freakShake: (w) => u('1577805947697-89e18249d767', w),
  icedLatte: (w) => u('1517701604599-bb29b565090c', w),
  icedCoffee: (w) => u('1461023058943-07fcbe16d735', w),
  mojitos: (w) => u('1551024709-8f23befc6f87', w),
  pourOver: (w) => u('1442512595331-e89e73853f31', w),
  beansBoard: (w) => u('1497935586351-b67a49e012bf', w),
  cafeInterior: (w) => u('1554118811-1e0d58224f24', w),
  greenCafe: (w) => u('1600093463592-8e36ae95ef56', w),
  coffeeBar: (w) => u('1453614512568-c4024d13c247', w),
  crowdCafe: (w) => u('1525610553991-2bede1a236e2', w),
  liveVenue: (w) => u('1543007630-9710e4a00a20', w),
  baristaCounter: (w) => u('1556742049-0cfed4f6a45d', w),
  steamingCup: (w) => u('1497515114629-f71d768fd07c', w),
  hotChocolate: (w) => u('1542990253-0d0f5be5f0ed', w),
  icedTea: (w) => u('1556679343-c7306c1976bc', w),
  mintMojito: (w) => u('1513558161293-cdaf765ed2fd', w),
  // Square crop zoomed on the barista's face (for small round avatars)
  baristaFace: (w = 200) =>
    `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&crop=focalpoint&fp-x=0.22&fp-y=0.3&fp-z=2.4&w=${w}&h=${w}&q=80`,
  // Music
  vintageMic: (w) => u('1511671782779-c97d3d27a1d4', w),
  stageMic: (w) => u('1516280440614-37939bbacd81', w),
  acousticGuitar: (w) => u('1510915361894-db8b60106cb1', w),
  smallStage: (w) => u('1514320291840-2e0a9bf2a9ae', w),
  piano: (w) => u('1520523839897-bd0b52f945a0', w),
  singerGuitar: (w) => u('1460723237483-7a6dc9d0b212', w),
}
