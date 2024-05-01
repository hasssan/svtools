// raw-types converted from save file
// only for reference, not used in code

export interface Save {
	'?xml': XML;
	SaveGame: SaveGame;
}

export interface XML {
	'@_version': string;
	'@_encoding': string;
}

export interface SaveGame {
	player: Player;
	farmhands: string;
	locations: Locations;
	currentSeason: Season;
	samBandName: string;
	elliottBookName: string;
	broadcastedMail: BroadcastedMail;
	constructedBuildings: ConstructedBuildings;
	worldStateIDs: BroadcastedMail;
	lostBooksFound: number;
	goldenWalnuts: number;
	goldenWalnutsFound: number;
	miniShippingBinsObtained: number;
	mineShrineActivated: boolean;
	skullShrineActivated: boolean;
	goldenCoconutCracked: boolean;
	parrotPlatformsUnlocked: boolean;
	farmPerfect: boolean;
	foundBuriedNuts: string;
	checkedGarbage: string;
	visitsUntilY1Guarantee: number;
	shuffleMineChests: string;
	dayOfMonth: number;
	year: number;
	countdownToWedding: CountdownToWedding;
	dailyLuck: number;
	uniqueIDForThisGame: number;
	weddingToday: boolean;
	isRaining: boolean;
	isDebrisWeather: boolean;
	isLightning: boolean;
	isSnowing: boolean;
	shouldSpawnMonsters: boolean;
	hasApplied1_3_UpdateChanges: boolean;
	hasApplied1_4_UpdateChanges: boolean;
	musicVolume: number;
	soundVolume: number;
	dishOfTheDay: DishOfTheDay;
	highestPlayerLimit: number;
	moveBuildingPermissionMode: number;
	useLegacyRandom: boolean;
	locationWeather: LocationWeather;
	builders: string;
	bannedUsers: string;
	bundleData: BundleData;
	limitedNutDrops: string;
	latestID: string;
	options: Options;
	splitscreenOptions: string;
	CustomData: string;
	mine_permanentMineChanges: MinePermanentMineChanges;
	mine_lowestLevelReached: number;
	weatherForTomorrow: string;
	whichFarm: number;
	mine_lowestLevelReachedForOrder: number;
	skullCavesDifficulty: number;
	minesDifficulty: number;
	currentGemBirdIndex: number;
	junimoKartLeaderboards: JunimoKartLeaderboards;
	specialOrders: string;
	availableSpecialOrders: AvailableSpecialOrders;
	completedSpecialOrders: string;
	acceptedSpecialOrderTypes: string;
	returnedDonations: string;
	globalInventories: string;
	collectedNutTracker: string;
	farmerFriendships: string;
	cellarAssignments: CellarAssignments;
	timesFedRaccoons: number;
	treasureTotemsUsed: number;
	perfectionWaivers: number;
	seasonOfCurrentRaccoonBundle: number;
	raccoonBundles: RaccoonBundles;
	activatedGoldenParrot: boolean;
	daysPlayedWhenLastRaccoonBundleWasFinished: number;
	lastAppliedSaveFix: number;
	gameVersion: string;
	'@_xmlns:xsi': string;
	'@_xmlns:xsd': string;
}

export interface AvailableSpecialOrders {
	SpecialOrder: SpecialOrder[];
}

export interface SpecialOrder {
	preSelectedItems: string;
	selectedRandomElements: string;
	objectives: Objective[] | ObjectivesClass;
	generationSeed: number;
	seenParticipantsIDs: string;
	participantsIDs: string;
	unclaimedRewardsIDs: string;
	appliedSpecialRules: boolean;
	rewards: Reward[] | RewardsClass;
	questKey: string;
	questName: string;
	questDescription: string;
	requester: string;
	orderType: string;
	specialRule: string;
	readyForRemoval: boolean;
	dueDate: number;
	duration: string;
	questState: string;
}

export interface Objective {
	currentCount: number;
	maxCount: number;
	description: string;
	failOnCompletion: boolean;
	acceptableContextTagSets: string;
	'@_xsi:type': string;
	dropBox?: string;
	dropBoxGameLocation?: string;
	dropBoxTileLocation?: TileLocationClass;
	minimumCapacity?: number;
	confirmed?: boolean;
}

export interface TileLocationClass {
	X: number;
	Y: number;
}

export interface ObjectivesClass {
	currentCount: number;
	maxCount: number;
	description: string;
	failOnCompletion: boolean;
	'@_xsi:type': string;
	acceptableContextTagSets?: string;
	useShipmentValue?: boolean;
}

export interface Reward {
	amount?: MaxEntries | number;
	multiplier?: MultiplierClass;
	'@_xsi:type': string;
	noLetter?: SleptInTemporaryBed;
	grantedMails?: BroadcastedMail;
	host?: SleptInTemporaryBed;
	targetName?: string;
}

export interface MaxEntries {
	int: number;
}

export interface BroadcastedMail {
	string: string;
}

export interface SleptInTemporaryBed {
	boolean: boolean;
}

export interface MultiplierClass {
	float: number;
}

export interface RewardsClass {
	amount: MaxEntries;
	'@_xsi:type': string;
}

export interface BundleData {
	item: BundleDataItem[];
}

export interface BundleDataItem {
	key: BroadcastedMail;
	value: BroadcastedMail;
}

export interface CellarAssignments {
	item: CellarAssignmentsItem;
}

export interface CellarAssignmentsItem {
	key: MaxEntries;
	value: KeyClass;
}

export interface KeyClass {
	long: string;
}

export interface ConstructedBuildings {
	string: string[];
}

export interface CountdownToWedding {
	'@_xsi:nil': string;
}

export type Season = 'fall' | 'winter' | 'summer' | 'spring';

export interface DishOfTheDay {
	isLostItem: boolean;
	category: number;
	hasBeenInInventory: boolean;
	name: string;
	parentSheetIndex: number;
	itemId: number;
	specialItem: boolean;
	isRecipe: boolean;
	quality: number;
	stack: number;
	SpecialVariable: number;
	tileLocation: TileLocationClass;
	owner: number;
	type?: TypeEnum;
	canBeSetDown: boolean;
	canBeGrabbed: boolean;
	isSpawnedObject: boolean;
	questItem: boolean;
	isOn: boolean;
	fragility: number;
	price: number;
	edibility: number;
	bigCraftable: boolean;
	setOutdoors: boolean;
	setIndoors: boolean;
	readyForHarvest: boolean;
	showNextIndex: boolean;
	flipped: boolean;
	isLamp: boolean;
	minutesUntilReady: number;
	boundingBox: BoundingBox;
	scale: TileLocationClass;
	uses: number;
	destroyOvernight: boolean;
	furniture_type?: number;
	rotations?: number;
	currentRotation?: number;
	sourceRect?: BoundingBox;
	defaultSourceRect?: BoundingBox;
	defaultBoundingBox?: BoundingBox;
	drawHeldObjectLow?: boolean;
	'@_xsi:type'?: DishOfTheDayXsiType;
	preserve?: string;
	preservedParentSheetIndex?: number;
	color?: Color;
	colorSameIndexAsParentSheetIndex?: boolean;
	ColorSameIndexAsParentSheetIndex?: boolean;
}

export type DishOfTheDayXsiType =
	| 'Object'
	| 'WateringCan'
	| 'MeleeWeapon'
	| 'Slingshot'
	| 'Furniture'
	| 'ColoredObject'
	| 'Hat'
	| 'Ring'
	| 'Boots'
	| 'Torch';

export interface BoundingBox {
	X: number;
	Y: number;
	Width: number;
	Height: number;
	Location: TileLocationClass;
	Size: TileLocationClass;
}

export interface Color {
	B: number;
	G: number;
	R: number;
	A: number;
	PackedValue: number;
}

export type TypeEnum =
	| 'Cooking'
	| 'Basic'
	| 'Minerals'
	| 'asdf'
	| 'Arch'
	| 'Crafting'
	| 'Seeds'
	| 'Fish'
	| 'Litter';

export interface JunimoKartLeaderboards {
	entries: string;
	maxEntries: MaxEntries;
}

export interface LocationWeather {
	item: LocationWeatherItem[];
}

export interface LocationWeatherItem {
	key: BroadcastedMail;
	value: PurpleValue;
}

export interface PurpleValue {
	LocationWeather: LocationWeatherClass;
}

export interface LocationWeatherClass {
	weatherForTomorrow: BroadcastedMail;
	weather: BroadcastedMail;
	isRaining: SleptInTemporaryBed;
	isSnowing: SleptInTemporaryBed;
	isLightning: SleptInTemporaryBed;
	isDebrisWeather: SleptInTemporaryBed;
	isGreenRain: SleptInTemporaryBed;
	monthlyNonRainyDayCount: MaxEntries;
	WeatherForTomorrow: string;
	Weather: string;
	IsRaining: boolean;
	IsSnowing: boolean;
	IsLightning: boolean;
	IsDebrisWeather: boolean;
	IsGreenRain: boolean;
}

export interface Locations {
	GameLocation: GameLocation[];
}

export interface GameLocation {
	buildings: BuildingsClass | string;
	animals: string;
	piecesOfHay: number;
	characters: CharactersClass | string;
	objects: ObjectsClass | string;
	resourceClumps: ResourceClumpsClass | string;
	largeTerrainFeatures: LargeTerrainFeaturesClass | string;
	terrainFeatures: TerrainFeaturesClass | string;
	name: string;
	waterColor: Color;
	isFarm: boolean;
	isOutdoors: boolean;
	isStructure: boolean;
	ignoreDebrisWeather: boolean;
	ignoreOutdoorLighting: boolean;
	ignoreLights: boolean;
	treatAsOutdoors: boolean;
	numberOfSpawnedObjectsOnMap: number;
	miniJukeboxCount: number;
	miniJukeboxTrack: string;
	furniture: FurnitureClass | string;
	Animals: Animals;
	IsGreenhouse: boolean;
	housePaintColor?: HousePaintColor;
	grandpaScore?: number;
	farmCaveReady?: boolean;
	hasSeenGrandpaNote?: boolean;
	greenhouseUnlocked?: boolean;
	greenhouseMoved?: boolean;
	spousePatioSpot?: TileLocationClass;
	'@_xsi:type'?: string;
	wallPaper?: string;
	appliedWallpaper?: Applied;
	floor?: string;
	appliedFloor?: Applied;
	fridge?: Fridge;
	fridgePosition?: TileLocationClass;
	cribStyle?: number;
	daysUntilCommunityUpgrade?: number;
	itemsFromPlayerToSell?: string;
	itemsToStartSellingTomorrow?: string;
	bridgeFixed?: boolean;
	stumpFixed?: boolean;
	hasSpawnedBugsToday?: boolean;
	drivingOff?: boolean;
	drivingBack?: boolean;
	leaving?: boolean;
	museumPieces?: MuseumPieces;
	Gil?: Gil;
	talkedToGil?: boolean;
	hasUnlockedStatue?: boolean;
	witchStatueGone?: boolean;
	areasComplete?: RaccoonBundles;
	numberOfStarsOnPlaque?: number;
	bundles?: Bundles;
	bundleRewards?: ChestConsumedLevels;
	submerged?: boolean;
	ascending?: boolean;
	dayFirstEntered?: number;
	gateRect?: BoundingBox;
	_plankPosition?: number;
	_plankDirection?: number;
	animationState?: string;
	TicketPrice?: number;
	shouldToggleResort?: boolean;
	resortOpenToday?: boolean;
	resortRestored?: boolean;
	westernTurtleMoved?: boolean;
	mermaidPuzzleFinished?: boolean;
	fishedWalnut?: boolean;
	drinksClaimed?: string;
	bananaShrineComplete?: SleptInTemporaryBed;
	bananaShrineNutAwarded?: SleptInTemporaryBed;
	sandDuggy?: SandDuggy;
	farmhouseRestored?: boolean;
	farmhouseMailbox?: boolean;
	farmObelisk?: boolean;
	shippingBinPosition?: TileLocationClass;
	traderActivated?: boolean;
	caveOpened?: boolean;
	treeNutShot?: boolean;
	treeNutObtained?: SleptInTemporaryBed;
	firstParrotDone?: boolean;
	completed?: boolean;
	piecesDonated?: boolean[];
	centerSkeletonRestored?: boolean;
	snakeRestored?: boolean;
	batRestored?: boolean;
	frogRestored?: boolean;
	plantsRestoredLeft?: boolean;
	plantsRestoredRight?: boolean;
	hasFailedSurveyToday?: SleptInTemporaryBed;
	visited?: boolean | SleptInTemporaryBed;
	puzzleFinished?: boolean;
	gourmandRequestsFulfilled?: number;
	raceTrack?: RaceTrack;
}

export interface Animals {
	SerializableDictionaryOfInt64FarmAnimal: string;
}

export interface Gil {
	name: string;
	forceOneTileWide: boolean;
	isEmoting: boolean;
	isCharging: boolean;
	isGlowing: boolean;
	coloredBorder: boolean;
	flip: boolean;
	drawOnTop: boolean;
	faceTowardFarmer: boolean;
	ignoreMovementAnimation: boolean;
	faceAwayFromFarmer: boolean;
	scale: MultiplierClass;
	glowingTransparency: number;
	glowRate: number;
	Gender: Gender;
	willDestroyObjectsUnderfoot: boolean;
	Position: TileLocationClass;
	Speed: number;
	FacingDirection: number;
	IsEmoting: boolean;
	CurrentEmote: number;
	Scale: number;
	lastCrossroad: BoundingBox;
	daysAfterLastBirth: number;
	birthday_Day: number;
	age: number;
	manners: number;
	socialAnxiety: number;
	optimism: number;
	gender: Gender;
	sleptInBed: boolean;
	isInvisible: boolean;
	lastSeenMovieWeek: number;
	datingFarmer: CountdownToWedding;
	divorcedFromFarmer: CountdownToWedding;
	datable: boolean;
	defaultMap: string;
	id: number;
	daysUntilNotInvisible: number;
	followSchedule: boolean;
	moveTowardPlayerThreshold: number;
	hasBeenKissedToday: SleptInTemporaryBed;
	shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
	shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
	shouldWearIslandAttire: SleptInTemporaryBed;
	isMovingOnPathFindPath: SleptInTemporaryBed;
	endOfRouteBehaviorName: EndOfRouteBehaviorName;
	previousEndPoint: TileLocationClass;
	squareMovementFacingPreference: number;
	DefaultFacingDirection: number;
	DefaultPosition: TileLocationClass;
	IsWalkingInSquare: boolean;
	IsWalkingTowardPlayer: boolean;
}

export type Gender = 'Male' | 'Female' | 'Undefined';

export interface EndOfRouteBehaviorName {
	string: CountdownToWedding;
}

export interface Applied {
	SerializableDictionaryOfStringString: SerializableDictionaryOfStringString;
}

export interface SerializableDictionaryOfStringString {
	item: PurpleItem[] | PurpleItem;
}

export interface PurpleItem {
	key: BroadcastedMail;
	value: ValueClass;
}

export interface ValueClass {
	string: number;
}

export interface RaccoonBundles {
	boolean: boolean[];
}

export interface BuildingsClass {
	Building: Building[];
}

export interface Building {
	id: string;
	skinId: EndOfRouteBehaviorName;
	nonInstancedIndoorsName: Name;
	tileX: number;
	tileY: number;
	tilesWide: number;
	tilesHigh: number;
	maxOccupants: number;
	currentOccupants: number;
	daysOfConstructionLeft: number;
	daysUntilUpgrade: number;
	buildingType: string;
	buildingPaintColor: BuildingPaintColor;
	hayCapacity: number;
	buildingChests: string;
	humanDoor: TileLocationClass;
	animalDoor: TileLocationClass;
	animalDoorOpen: boolean;
	animalDoorOpenAmount: number;
	magical: boolean;
	fadeWhenPlayerIsBehind: boolean;
	owner: number | string;
	isMoving: boolean;
	'@_xsi:type'?: string;
	watered?: boolean;
	petGuid?: string;
}

export interface BuildingPaintColor {
	ColorName: EndOfRouteBehaviorName;
	Color1Default: SleptInTemporaryBed;
	Color1Hue: MaxEntries;
	Color1Saturation: MaxEntries;
	Color1Lightness: MaxEntries;
	Color2Default: SleptInTemporaryBed;
	Color2Hue: MaxEntries;
	Color2Saturation: MaxEntries;
	Color2Lightness: MaxEntries;
	Color3Default: SleptInTemporaryBed;
	Color3Hue: MaxEntries;
	Color3Saturation: MaxEntries;
	Color3Lightness: MaxEntries;
}

export interface Name {
	string: CountdownToWedding | string;
}

export interface ChestConsumedLevels {
	item: ChestConsumedLevelsItem[];
}

export interface ChestConsumedLevelsItem {
	key: MaxEntries;
	value: SleptInTemporaryBed;
}

export interface Bundles {
	item: BundlesItem[];
}

export interface BundlesItem {
	key: MaxEntries;
	value: FluffyValue;
}

export interface FluffyValue {
	ArrayOfBoolean: RaccoonBundles;
}

export interface CharactersClass {
	NPC: NPCElement[] | PurpleNPC;
}

export interface NPCElement {
	name: string;
	forceOneTileWide: boolean;
	isEmoting: boolean;
	isCharging: boolean;
	isGlowing: boolean;
	coloredBorder: boolean;
	flip: boolean;
	drawOnTop: boolean;
	faceTowardFarmer: boolean;
	ignoreMovementAnimation: boolean;
	faceAwayFromFarmer: boolean;
	scale: MultiplierClass;
	glowingTransparency: number;
	glowRate: number;
	Gender: Gender;
	willDestroyObjectsUnderfoot: boolean;
	Position: TileLocationClass;
	Speed: number;
	FacingDirection: number;
	IsEmoting: boolean;
	CurrentEmote: number;
	Scale: number;
	lastCrossroad: BoundingBox;
	daysAfterLastBirth: number;
	birthday_Season?: Season;
	birthday_Day: number;
	age: number;
	manners: number;
	socialAnxiety: number;
	optimism: number;
	gender: Gender;
	sleptInBed: boolean;
	isInvisible: boolean;
	lastSeenMovieWeek: number;
	datingFarmer: CountdownToWedding;
	divorcedFromFarmer: CountdownToWedding;
	datable: boolean;
	defaultMap: string;
	loveInterest?: string;
	id: number;
	daysUntilNotInvisible: number;
	followSchedule: boolean;
	moveTowardPlayerThreshold: number;
	hasBeenKissedToday: SleptInTemporaryBed;
	shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
	shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
	shouldWearIslandAttire: SleptInTemporaryBed;
	isMovingOnPathFindPath: SleptInTemporaryBed;
	dayScheduleName?: DayScheduleNameEnum;
	endOfRouteBehaviorName: Name;
	previousEndPoint: TileLocationClass;
	squareMovementFacingPreference: number;
	DefaultFacingDirection: number;
	DefaultPosition: TileLocationClass;
	IsWalkingInSquare: boolean;
	IsWalkingTowardPlayer: boolean;
}

export type DayScheduleNameEnum = 'spring' | 'Mon' | 'fall_Mon' | 'fall';

export interface PurpleNPC {
	name: string;
	forceOneTileWide: boolean;
	isEmoting: boolean;
	isCharging: boolean;
	isGlowing: boolean;
	coloredBorder: boolean;
	flip: boolean;
	drawOnTop: boolean;
	faceTowardFarmer: boolean;
	ignoreMovementAnimation: boolean;
	faceAwayFromFarmer: boolean;
	scale: MultiplierClass;
	glowingTransparency: number;
	glowRate: number;
	Gender: Gender;
	willDestroyObjectsUnderfoot: boolean;
	Position: TileLocationClass;
	Speed: number;
	FacingDirection: number;
	IsEmoting: boolean;
	CurrentEmote: number;
	Scale: number;
	lastCrossroad: BoundingBox;
	daysAfterLastBirth: number;
	birthday_Day: number;
	age: number;
	manners: number;
	socialAnxiety: number;
	optimism: number;
	gender: Gender;
	sleptInBed: boolean;
	isInvisible: boolean;
	lastSeenMovieWeek: number;
	datingFarmer: CountdownToWedding;
	divorcedFromFarmer: CountdownToWedding;
	datable: boolean;
	id: number;
	daysUntilNotInvisible: number;
	followSchedule: boolean;
	moveTowardPlayerThreshold: number;
	hasBeenKissedToday: SleptInTemporaryBed;
	shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
	shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
	shouldWearIslandAttire: SleptInTemporaryBed;
	isMovingOnPathFindPath: SleptInTemporaryBed;
	endOfRouteBehaviorName: Name;
	previousEndPoint: TileLocationClass;
	squareMovementFacingPreference: number;
	DefaultFacingDirection: number;
	DefaultPosition: TileLocationClass;
	IsWalkingInSquare: boolean;
	IsWalkingTowardPlayer: boolean;
	guid?: string;
	petType?: string;
	whichBreed?: number;
	homeLocationName?: string;
	lastPetDay?: LastPetDay;
	grantedFriendshipForPet?: boolean;
	friendshipTowardFarmer?: number;
	timesPet?: number;
	isSleepingOnFarmerBed?: SleptInTemporaryBed;
	CurrentBehavior?: string;
	'@_xsi:type'?: string;
	birthday_Season?: Season;
	defaultMap?: string;
	loveInterest?: string;
	dayScheduleName?: DayScheduleNameEnum | number;
}

export interface LastPetDay {
	item: LastPetDayItem;
}

export interface LastPetDayItem {
	key: KeyClass;
	value: MaxEntries;
}

export interface Fridge {
	isLostItem: boolean;
	category: number;
	hasBeenInInventory: boolean;
	name: XsiTypeEnum;
	parentSheetIndex: number;
	itemId: number;
	specialItem: boolean;
	isRecipe: boolean;
	quality: number;
	stack: number;
	SpecialVariable: number;
	tileLocation: TileLocationClass;
	owner: number;
	type: TypeEnum;
	canBeSetDown: boolean;
	canBeGrabbed: boolean;
	isSpawnedObject: boolean;
	questItem: boolean;
	isOn: boolean;
	fragility: number;
	price: number;
	edibility: number;
	bigCraftable: boolean;
	setOutdoors: boolean;
	setIndoors: boolean;
	readyForHarvest: boolean;
	showNextIndex: boolean;
	flipped: boolean;
	isLamp: boolean;
	minutesUntilReady: number;
	boundingBox: BoundingBox;
	scale: TileLocationClass;
	uses: number;
	destroyOvernight: boolean;
	currentLidFrame: number;
	lidFrameCount: MaxEntries;
	frameCounter: number;
	items: string;
	separateWalletItems: SeparateWalletItems;
	tint: Color;
	playerChoiceColor: Color;
	playerChest: boolean;
	fridge: boolean;
	giftbox: boolean;
	giftboxIndex: number;
	giftboxIsStarterGift: SleptInTemporaryBed;
	spriteIndexOverride: number;
	dropContents: boolean;
	synchronized: boolean;
	specialChestType: SpecialChestType;
	globalInventoryId: EndOfRouteBehaviorName;
}

export type XsiTypeEnum = 'Chest' | 'Torch' | 'Cask' | 'ItemPedestal';

export interface SeparateWalletItems {
	SerializableDictionaryOfInt64Inventory: string;
}

export type SpecialChestType = 'None';

export interface FurnitureClass {
	Furniture: Furniture[];
}

export interface Furniture {
	isLostItem: boolean;
	category: number;
	hasBeenInInventory: boolean;
	name: string;
	parentSheetIndex: number;
	itemId: number;
	specialItem: boolean;
	isRecipe: boolean;
	quality: number;
	stack: number;
	SpecialVariable: number;
	tileLocation: TileLocationClass;
	owner: number | string;
	canBeSetDown: boolean;
	canBeGrabbed: boolean;
	isSpawnedObject: boolean;
	questItem: boolean;
	isOn: boolean;
	fragility: number;
	price: number;
	edibility: number;
	bigCraftable: boolean;
	setOutdoors: boolean;
	setIndoors: boolean;
	readyForHarvest: boolean;
	showNextIndex: boolean;
	flipped: boolean;
	isLamp: boolean;
	heldObject?: DishOfTheDay;
	minutesUntilReady: number;
	boundingBox: BoundingBox;
	scale: TileLocationClass;
	uses: number;
	destroyOvernight: boolean;
	furniture_type: number;
	rotations: number;
	currentRotation: number;
	sourceRect: BoundingBox;
	defaultSourceRect: BoundingBox;
	defaultBoundingBox: BoundingBox;
	drawHeldObjectLow: boolean;
	bedType?: string;
	'@_xsi:type'?: string;
}

export interface HousePaintColor {
	BuildingPaintColor: CountdownToWedding;
}

export interface LargeTerrainFeaturesClass {
	LargeTerrainFeature: LargeTerrainFeatureElement[] | LargeTerrainFeatureElement;
}

export interface LargeTerrainFeatureElement {
	tilePosition: TileLocationClass;
	isDestroyedByNPCTrample: boolean;
	size: number;
	datePlanted: number;
	tileSheetOffset: number;
	health: number;
	flipped: boolean;
	townBush: boolean;
	inPot: SleptInTemporaryBed;
	drawShadow: boolean;
	'@_xsi:type': LargeTerrainFeatureXsiType;
}

export type LargeTerrainFeatureXsiType = 'Bush';

export interface MuseumPieces {
	item: MuseumPiecesItem[];
}

export interface MuseumPiecesItem {
	key: PurpleKey;
	value: ValueClass;
}

export interface PurpleKey {
	Vector2: TileLocationClass;
}

export interface ObjectsClass {
	item: FluffyItem[] | StickyItem;
}

export interface FluffyItem {
	key: PurpleKey;
	value: TentacledValue;
}

export interface TentacledValue {
	Object: Object;
}

export interface Object {
	isLostItem: boolean;
	category: number;
	hasBeenInInventory: boolean;
	name: PurpleName;
	parentSheetIndex: number;
	itemId: number | string;
	specialItem: boolean;
	isRecipe: boolean;
	quality: number;
	stack: number;
	SpecialVariable: number;
	tileLocation: TileLocationClass;
	owner: number | string;
	type: TypeEnum;
	canBeSetDown: boolean;
	canBeGrabbed: boolean;
	isSpawnedObject: boolean;
	questItem: boolean;
	isOn: boolean;
	fragility: number;
	price: number;
	edibility: number;
	bigCraftable: boolean;
	setOutdoors: boolean;
	setIndoors: boolean;
	readyForHarvest: boolean;
	showNextIndex: boolean;
	flipped: boolean;
	isLamp: boolean;
	minutesUntilReady: number;
	boundingBox: BoundingBox;
	scale: TileLocationClass;
	uses: number;
	destroyOvernight: boolean;
	heldObject?: DishOfTheDay;
	lastOutputRuleId?: string;
	lastInputItem?: DishOfTheDay;
	currentLidFrame?: number;
	lidFrameCount?: MaxEntries;
	frameCounter?: number;
	items?: ItemsItems | string;
	separateWalletItems?: SeparateWalletItems;
	tint?: Color;
	playerChoiceColor?: Color;
	playerChest?: boolean;
	fridge?: boolean;
	giftbox?: boolean;
	giftboxIndex?: number;
	giftboxIsStarterGift?: SleptInTemporaryBed;
	spriteIndexOverride?: number;
	dropContents?: boolean;
	synchronized?: boolean;
	specialChestType?: SpecialChestType;
	globalInventoryId?: EndOfRouteBehaviorName;
	'@_xsi:type'?: XsiTypeEnum;
	agingRate?: number;
	daysToMature?: number;
	requiredItem?: DishOfTheDay;
	successColor?: Color;
	lockOnSuccess?: boolean;
	locked?: boolean;
	match?: boolean;
	isIslandShrinePedestal?: boolean;
}

export interface ItemsItems {
	Item: TentacledItem[];
}

export interface TentacledItem {
	isLostItem: boolean;
	category: number;
	hasBeenInInventory: boolean;
	name: string;
	parentSheetIndex?: number;
	itemId: number | string;
	specialItem: boolean;
	isRecipe: boolean;
	quality: number;
	stack: number;
	SpecialVariable: number;
	tileLocation?: TileLocationClass;
	owner?: number | string;
	type?: TypeEnum | number;
	canBeSetDown?: boolean;
	canBeGrabbed?: boolean;
	isSpawnedObject?: boolean;
	questItem?: boolean;
	isOn?: boolean;
	fragility?: number;
	price?: number;
	edibility?: number;
	bigCraftable?: boolean;
	setOutdoors?: boolean;
	setIndoors?: boolean;
	readyForHarvest?: boolean;
	showNextIndex?: boolean;
	flipped?: boolean;
	isLamp?: boolean;
	minutesUntilReady?: number;
	boundingBox?: BoundingBox;
	scale?: TileLocationClass;
	uses?: number;
	destroyOvernight?: boolean;
	'@_xsi:type': DishOfTheDayXsiType;
	initialParentTileIndex?: number;
	currentParentTileIndex?: number;
	indexOfMenuItemView?: number;
	instantUse?: boolean;
	isEfficient?: boolean;
	animationSpeedModifier?: number;
	swingTicker?: number;
	upgradeLevel?: number;
	numAttachmentSlots?: number;
	attachments?: PurpleAttachments | string;
	InitialParentTileIndex?: number;
	IndexOfMenuItemView?: number;
	InstantUse?: boolean;
	IsEfficient?: boolean;
	AnimationSpeedModifier?: number;
	isBottomless?: boolean;
	WaterLeft?: number;
	IsBottomless?: boolean;
	minDamage?: number;
	maxDamage?: number;
	speed?: number;
	addedPrecision?: number;
	addedDefense?: number;
	addedAreaOfEffect?: number;
	knockback?: number;
	critChance?: number;
	critMultiplier?: number;
	isOnSpecial?: boolean;
	enchantments?: Enchantments;
	furniture_type?: number;
	rotations?: number;
	currentRotation?: number;
	sourceRect?: BoundingBox;
	defaultSourceRect?: BoundingBox;
	defaultBoundingBox?: BoundingBox;
	drawHeldObjectLow?: boolean;
	preserve?: string;
	preservedParentSheetIndex?: number;
	color?: Color;
	colorSameIndexAsParentSheetIndex?: boolean;
	ColorSameIndexAsParentSheetIndex?: boolean;
	which?: CountdownToWedding;
	skipHairDraw?: boolean;
	ignoreHairstyleOffset?: boolean;
	hairDrawType?: number;
	isPrismatic?: boolean;
	indexInTileSheet?: CountdownToWedding | number;
	uniqueID?: number;
	defenseBonus?: number;
	immunityBonus?: number;
	indexInColorSheet?: number;
}

export interface PurpleAttachments {
	Object: CountdownToWedding;
}

export interface Enchantments {
	level: number;
	'@_xsi:type': string;
}

export type PurpleName =
	| 'Weeds'
	| 'Stone'
	| 'Twig'
	| 'Bee House'
	| 'Preserves Jar'
	| 'Chest'
	| 'Furnace'
	| 'Scarecrow'
	| 'Quality Sprinkler'
	| 'Tapper'
	| 'Lightning Rod'
	| 'Mushroom Box'
	| 'Dehydrator'
	| 'Stone Junimo'
	| 'Blackberry'
	| 'Campfire'
	| 'Artifact Spot'
	| 'Common Mushroom'
	| 'Hazelnut'
	| 'Boulder'
	| 'Cactus Fruit'
	| 'Coconut'
	| 'Cask'
	| 'Fiddlehead Fern'
	| 'Coral'
	| 'Sea Urchin'
	| 'Seed Spot'
	| 'Chanterelle'
	| 'Purple Mushroom'
	| 'Item Pedestal';

export interface StickyItem {
	key: PurpleKey;
	value: StickyValue;
}

export interface StickyValue {
	Object: DishOfTheDay;
}

export interface RaceTrack {
	ArrayOfVector3: ArrayOfVector3[];
}

export interface ArrayOfVector3 {
	Vector3: Vector3[];
}

export interface Vector3 {
	X: number;
	Y: number;
	Z: number;
}

export interface ResourceClumpsClass {
	ResourceClump: ResourceClumpElement[] | ResourceClumpElement;
}

export interface ResourceClumpElement {
	width: number;
	height: number;
	parentSheetIndex: number;
	health: number;
	tile: TileLocationClass;
}

export interface SandDuggy {
	whacked: boolean;
}

export interface TerrainFeaturesClass {
	item: TerrainFeaturesItem[];
}

export interface TerrainFeaturesItem {
	key: PurpleKey;
	value: IndigoValue;
}

export interface IndigoValue {
	TerrainFeature: TerrainFeature;
}

export interface TerrainFeature {
	grassType?: number;
	numberOfWeeds?: number;
	grassSourceOffset?: number;
	'@_xsi:type': TerrainFeatureXsiType;
	growthStage?: number;
	treeType?: number;
	health?: number;
	flipped?: boolean;
	stump?: boolean;
	tapped?: boolean;
	hasSeed?: boolean;
	hasMoss?: boolean;
	isTemporaryGreenRainTree?: boolean;
	fertilized?: boolean;
	stopGrowingMoss?: boolean;
	state?: number;
	Tile?: TileLocationClass;
	crop?: Crop;
	fertilizer?: Fertilizer;
}

export type TerrainFeatureXsiType = 'Grass' | 'Tree' | 'HoeDirt';

export interface Crop {
	phaseDays: Achievements | string;
	rowInSpriteSheet: number;
	phaseToShow: number;
	currentPhase: number;
	indexOfHarvest?: number;
	dayOfCurrentPhase: number;
	tintColor: Color;
	flip: boolean;
	fullGrown: boolean;
	raisedSeeds: boolean;
	programColored: boolean;
	dead: boolean;
	forageCrop: boolean;
	seedIndex?: number;
	whichForageCrop?: number;
}

export interface Achievements {
	int: number[];
}

export type Fertilizer = '(O)368';

export interface MinePermanentMineChanges {
	item: MinePermanentMineChangesItem[];
}

export interface MinePermanentMineChangesItem {
	key: MaxEntries;
	value: IndecentValue;
}

export interface IndecentValue {
	MineInfo: MineInfo;
}

export interface MineInfo {
	platformContainersLeft: number;
	chestsLeft: number;
	coalCartsLeft: number;
	elevator: number;
}

export interface Options {
	autoRun: boolean;
	dialogueTyping: boolean;
	showPortraits: boolean;
	showMerchantPortraits: boolean;
	showMenuBackground: boolean;
	playFootstepSounds: boolean;
	alwaysShowToolHitLocation: boolean;
	hideToolHitLocationWhenInMotion: boolean;
	pauseWhenOutOfFocus: boolean;
	pinToolbarToggle: boolean;
	mouseControls: boolean;
	gamepadControls: boolean;
	rumble: boolean;
	ambientOnlyToggle: boolean;
	zoomButtons: boolean;
	invertScrollDirection: boolean;
	screenFlash: boolean;
	showPlacementTileForGamepad: boolean;
	snappyMenus: boolean;
	showAdvancedCraftingInformation: boolean;
	showMPEndOfNightReadyStatus: boolean;
	muteAnimalSounds: boolean;
	vsyncEnabled: boolean;
	fullscreen: boolean;
	windowedBorderlessFullscreen: boolean;
	showClearBackgrounds: boolean;
	ipConnectionsEnabled: boolean;
	enableServer: boolean;
	enableFarmhandCreation: boolean;
	stowingMode: string;
	gamepadMode: string;
	useLegacySlingshotFiring: boolean;
	musicVolumeLevel: number;
	soundVolumeLevel: number;
	footstepVolumeLevel: number;
	ambientVolumeLevel: number;
	snowTransparency: number;
	zoomLevel: number;
	localCoopBaseZoomLevel: number;
	uiScale: number;
	localCoopDesiredUIScale: number;
	preferredResolutionX: number;
	preferredResolutionY: number;
	serverPrivacy: string;
	actionButton: Button;
	cancelButton: CancelButton;
	useToolButton: Button;
	moveUpButton: CancelButton;
	moveRightButton: CancelButton;
	moveDownButton: CancelButton;
	moveLeftButton: CancelButton;
	menuButton: Button;
	runButton: CancelButton;
	tmpKeyToReplace: CancelButton;
	chatButton: Button;
	mapButton: CancelButton;
	journalButton: CancelButton;
	inventorySlot1: CancelButton;
	inventorySlot2: CancelButton;
	inventorySlot3: CancelButton;
	inventorySlot4: CancelButton;
	inventorySlot5: CancelButton;
	inventorySlot6: CancelButton;
	inventorySlot7: CancelButton;
	inventorySlot8: CancelButton;
	inventorySlot9: CancelButton;
	inventorySlot10: CancelButton;
	inventorySlot11: CancelButton;
	inventorySlot12: CancelButton;
	toolbarSwap: CancelButton;
	emoteButton: CancelButton;
	hardwareCursor: boolean;
}

export interface Button {
	InputButton: InputButton[];
}

export interface InputButton {
	key: string;
	mouseLeft: boolean;
	mouseRight: boolean;
}

export interface CancelButton {
	InputButton: InputButton;
}

export interface Player {
	name: string;
	forceOneTileWide: boolean;
	isEmoting: boolean;
	isCharging: boolean;
	isGlowing: boolean;
	coloredBorder: boolean;
	flip: boolean;
	drawOnTop: boolean;
	faceTowardFarmer: boolean;
	ignoreMovementAnimation: boolean;
	faceAwayFromFarmer: boolean;
	scale: MultiplierClass;
	glowingTransparency: number;
	glowRate: number;
	Gender: Gender;
	willDestroyObjectsUnderfoot: boolean;
	Position: TileLocationClass;
	Speed: number;
	FacingDirection: number;
	IsEmoting: boolean;
	CurrentEmote: number;
	Scale: number;
	questLog: QuestLog;
	professions: Achievements;
	newLevels: string;
	experiencePoints: Achievements;
	items: PlayerItems;
	dialogueQuestionsAnswered: Achievements;
	cookingRecipes: ActiveDialogueEvents;
	craftingRecipes: ActiveDialogueEvents;
	activeDialogueEvents: ActiveDialogueEvents;
	previousActiveDialogueEvents: ActiveDialogueEvents;
	triggerActionsRun: ConstructedBuildings;
	eventsSeen: EventsSeen;
	secretNotesSeen: string;
	songsHeard: ConstructedBuildings;
	achievements: Achievements;
	specialItems: string;
	specialBigCraftables: Achievements;
	mailReceived: ConstructedBuildings;
	mailForTomorrow: string;
	mailbox: string;
	locationsVisited: ConstructedBuildings;
	timeWentToBed: MaxEntries;
	sleptInTemporaryBed: SleptInTemporaryBed;
	stats: Stats;
	biteChime: number;
	itemsLostLastDeath: string;
	movementDirections: string;
	farmName: string;
	favoriteThing: string;
	slotCanHost: boolean;
	userID: string;
	catPerson: CountdownToWedding;
	canUnderstandDwarves: CountdownToWedding;
	hasClubCard: CountdownToWedding;
	hasDarkTalisman: CountdownToWedding;
	hasMagicInk: CountdownToWedding;
	hasMagnifyingGlass: CountdownToWedding;
	hasRustyKey: CountdownToWedding;
	hasSkullKey: CountdownToWedding;
	hasSpecialCharm: CountdownToWedding;
	HasTownKey: CountdownToWedding;
	hasUnlockedSkullDoor: CountdownToWedding;
	daysMarried: CountdownToWedding;
	whichPetType: string;
	whichPetBreed: number;
	acceptedDailyQuest: boolean;
	mostRecentBed: TileLocationClass;
	shirt: number;
	hair: number;
	skin: number;
	shoes: number;
	accessory: number;
	facialHair: number;
	pants: number;
	hairstyleColor: Color;
	pantsColor: Color;
	newEyeColor: Color;
	boots: Boots;
	rightRing: RightRing;
	shirtItem: Item;
	pantsItem: Item;
	divorceTonight: boolean;
	changeWalletTypeTonight: boolean;
	gameVersion: string;
	bibberstyke: number;
	usingRandomizedBobber: boolean;
	caveChoice: number;
	farmingLevel: number;
	miningLevel: number;
	combatLevel: number;
	foragingLevel: number;
	fishingLevel: number;
	luckLevel: number;
	maxStamina: number;
	maxItems: number;
	lastSeenMovieWeek: number;
	clubCoins: number;
	trashCanLevel: number;
	daysLeftForToolUpgrade: number;
	houseUpgradeLevel: number;
	daysUntilHouseUpgrade: number;
	showChestColorPicker: boolean;
	hasWateringCanEnchantment: boolean;
	temporaryInvincibilityTimer: number;
	currentTemporaryInvincibilityDuration: number;
	health: number;
	maxHealth: number;
	difficultyModifier: number;
	gender: Gender;
	basicShipped: BasicShipped;
	mineralsFound: BasicShipped;
	recipesCooked: string;
	fishCaught: FishCaught;
	archaeologyFound: ArchaeologyFound;
	callsReceived: string;
	giftedItems: GiftedItems;
	tailoredItems: string;
	friendshipData: FriendshipData;
	dayOfMonthForSaveGame: number;
	seasonForSaveGame: number;
	yearForSaveGame: number;
	qiGems: number;
	chestConsumedLevels: ChestConsumedLevels;
	saveTime: number;
	isCustomized: boolean;
	homeLocation: string;
	lastSleepLocation: string;
	lastSleepPoint: TileLocationClass;
	disconnectDay: number;
	disconnectPosition: TileLocationClass;
	movementMultiplier: number;
	isMale: CountdownToWedding;
	deepestMineLevel: number;
	stamina: number;
	totalMoneyEarned: number;
	millisecondsPlayed: number;
	useSeparateWallets: boolean;
	theaterBuildDate: number;
	timesReachedMineBottom: number;
	UniqueMultiplayerID: string;
	money: number;
}

export interface ActiveDialogueEvents {
	item: ActiveDialogueEventsItem[];
}

export interface ActiveDialogueEventsItem {
	key: BroadcastedMail;
	value: MaxEntries;
}

export interface ArchaeologyFound {
	item: ArchaeologyFoundItem[];
}

export interface ArchaeologyFoundItem {
	key: ValueClass;
	value: HilariousValue;
}

export interface HilariousValue {
	ArrayOfInt: Achievements;
}

export interface BasicShipped {
	item: BasicShippedItem[];
}

export interface BasicShippedItem {
	key: ValueClass;
	value: MaxEntries;
}

export interface Boots {
	isLostItem: boolean;
	category: number;
	hasBeenInInventory: boolean;
	name: string;
	itemId: number;
	specialItem: boolean;
	isRecipe: boolean;
	quality: number;
	stack: number;
	SpecialVariable: number;
	defenseBonus: number;
	immunityBonus: number;
	indexInTileSheet: number;
	price: number;
	indexInColorSheet: number;
}

export interface EventsSeen {
	int: Array<number | string>;
}

export interface FishCaught {
	item: FishCaughtItem[];
}

export interface FishCaughtItem {
	key: BroadcastedMail;
	value: HilariousValue;
}

export interface FriendshipData {
	item: FriendshipDataItem[];
}

export interface FriendshipDataItem {
	key: BroadcastedMail;
	value: AmbitiousValue;
}

export interface AmbitiousValue {
	Friendship: Friendship;
}

export interface Friendship {
	Points: number;
	GiftsThisWeek: number;
	GiftsToday: number;
	LastGiftDate?: LastGiftDate;
	TalkedToToday: boolean;
	ProposalRejected: boolean;
	Status: Status;
	Proposer: number;
	RoommateMarriage: boolean;
}

export interface LastGiftDate {
	Year: number;
	DayOfMonth: number;
	Season: Season;
}

export type Status = 'Friendly';

export interface GiftedItems {
	item: GiftedItemsItem[];
}

export interface GiftedItemsItem {
	key: BroadcastedMail;
	value: CunningValue;
}

export interface CunningValue {
	dictionary: Dictionary;
}

export interface Dictionary {
	item: BasicShippedItem[] | BasicShippedItem;
}

export interface PlayerItems {
	Item: IndigoItem[];
}

export interface IndigoItem {
	isLostItem?: boolean;
	category?: number;
	hasBeenInInventory?: boolean;
	name?: string;
	itemId?: number | string;
	specialItem?: boolean;
	isRecipe?: boolean;
	quality?: number;
	stack?: number;
	SpecialVariable?: number;
	initialParentTileIndex?: number;
	currentParentTileIndex?: number;
	indexOfMenuItemView?: number;
	instantUse?: boolean;
	isEfficient?: boolean;
	animationSpeedModifier?: number;
	swingTicker?: number;
	upgradeLevel?: number;
	numAttachmentSlots?: number;
	attachments?: FluffyAttachments | string;
	InitialParentTileIndex?: number;
	IndexOfMenuItemView?: number;
	InstantUse?: boolean;
	IsEfficient?: boolean;
	AnimationSpeedModifier?: number;
	type?: TypeEnum | number;
	minDamage?: number;
	maxDamage?: number;
	speed?: number;
	addedPrecision?: number;
	addedDefense?: number;
	addedAreaOfEffect?: number;
	knockback?: number;
	critChance?: number;
	critMultiplier?: number;
	isOnSpecial?: boolean;
	'@_xsi:type'?: string;
	additionalPower?: MaxEntries;
	CastDirection?: number;
	parentSheetIndex?: number;
	tileLocation?: TileLocationClass;
	owner?: number;
	canBeSetDown?: boolean;
	canBeGrabbed?: boolean;
	isSpawnedObject?: boolean;
	questItem?: boolean;
	isOn?: boolean;
	fragility?: number;
	price?: number;
	edibility?: number;
	bigCraftable?: boolean;
	setOutdoors?: boolean;
	setIndoors?: boolean;
	readyForHarvest?: boolean;
	showNextIndex?: boolean;
	flipped?: boolean;
	isLamp?: boolean;
	minutesUntilReady?: number;
	boundingBox?: BoundingBox;
	scale?: TileLocationClass;
	uses?: number;
	destroyOvernight?: boolean;
	'@_xsi:nil'?: string;
}

export interface FluffyAttachments {
	Object: CountdownToWedding[];
}

export interface Item {
	isLostItem: boolean;
	category: number;
	hasBeenInInventory: boolean;
	name: string;
	itemId: number;
	specialItem: boolean;
	isRecipe: boolean;
	quality: number;
	stack: number;
	SpecialVariable: number;
	price: number;
	indexInTileSheet: number;
	indexInTileSheetFemale: CountdownToWedding;
	clothesType: string;
	dyeable: boolean;
	clothesColor: Color;
	isPrismatic: boolean;
	Price: number;
}

export interface QuestLog {
	Quest: Quest[];
}

export interface Quest {
	_currentObjective: string;
	_questDescription: string;
	_questTitle: string;
	rewardDescription: number;
	completionString?: string;
	accepted: boolean;
	completed: boolean;
	dailyQuest: boolean;
	showNew: boolean;
	canBeCancelled: boolean;
	destroy: boolean;
	id: number;
	moneyReward: number;
	questType: number;
	daysLeft: number;
	dayQuestAccepted: number;
	nextQuests: MaxEntries;
	questTitle: string;
	targetMessage?: string;
	target?: string;
	item?: string;
	number?: number;
	parts?: string;
	dialogueparts?: string;
	'@_xsi:type'?: string;
}

export interface RightRing {
	isLostItem: boolean;
	category: number;
	hasBeenInInventory: boolean;
	name: string;
	parentSheetIndex: number;
	itemId: number;
	specialItem: boolean;
	isRecipe: boolean;
	quality: number;
	stack: number;
	SpecialVariable: number;
	price: number;
	indexInTileSheet: CountdownToWedding;
	uniqueID: number;
}

export interface Stats {
	specificMonstersKilled: ActiveDialogueEvents;
	Values: Values;
	averageBedtime: CountdownToWedding;
	beveragesMade: CountdownToWedding;
	caveCarrotsFound: CountdownToWedding;
	cheeseMade: CountdownToWedding;
	chickenEggsLayed: CountdownToWedding;
	copperFound: CountdownToWedding;
	cowMilkProduced: CountdownToWedding;
	cropsShipped: CountdownToWedding;
	daysPlayed: CountdownToWedding;
	diamondsFound: CountdownToWedding;
	dirtHoed: CountdownToWedding;
	duckEggsLayed: CountdownToWedding;
	fishCaught: CountdownToWedding;
	geodesCracked: CountdownToWedding;
	giftsGiven: CountdownToWedding;
	goatCheeseMade: CountdownToWedding;
	goatMilkProduced: CountdownToWedding;
	goldFound: CountdownToWedding;
	goodFriends: CountdownToWedding;
	individualMoneyEarned: CountdownToWedding;
	iridiumFound: CountdownToWedding;
	ironFound: CountdownToWedding;
	itemsCooked: CountdownToWedding;
	itemsCrafted: CountdownToWedding;
	itemsForaged: CountdownToWedding;
	itemsShipped: CountdownToWedding;
	monstersKilled: CountdownToWedding;
	mysticStonesCrushed: CountdownToWedding;
	notesFound: CountdownToWedding;
	otherPreciousGemsFound: CountdownToWedding;
	piecesOfTrashRecycled: CountdownToWedding;
	preservesMade: CountdownToWedding;
	prismaticShardsFound: CountdownToWedding;
	questsCompleted: CountdownToWedding;
	rabbitWoolProduced: CountdownToWedding;
	rocksCrushed: CountdownToWedding;
	sheepWoolProduced: CountdownToWedding;
	slimesKilled: CountdownToWedding;
	stepsTaken: CountdownToWedding;
	stoneGathered: CountdownToWedding;
	stumpsChopped: CountdownToWedding;
	timesFished: CountdownToWedding;
	timesUnconscious: CountdownToWedding;
	totalMoneyGifted: CountdownToWedding;
	trufflesFound: CountdownToWedding;
	weedsEliminated: CountdownToWedding;
	seedsSown: CountdownToWedding;
}

export interface Values {
	item: ValuesItem[];
}

export interface ValuesItem {
	key: BroadcastedMail;
	value: MagentaValue;
}

export interface MagentaValue {
	unsignedInt: number;
}

// Converts JSON strings to/from your types
export class Convert {
	public static toSave(json: string): Save {
		return JSON.parse(json);
	}

	public static saveToJson(value: Save): string {
		return JSON.stringify(value);
	}
}
