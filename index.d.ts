/**
 * Foundry Virtual Tabletop - Type Definitions for Module Developers
 * 
 * This file provides comprehensive TypeScript type definitions for developing
 * Foundry VTT modules, systems, and add-ons.
 * 
 * To use these types in your module, add a reference at the top of your TypeScript files:
 * /// <reference types="./types" />
 * 
 * Or configure your tsconfig.json to include these types automatically.
 * 
 * @module foundry-vtt-types
 * @version 13.350.0
 * 
 * @example Basic Module Setup
 * ```typescript
 * // In your module's main file:
 * /// <reference types="./types" />
 * 
 * Hooks.once('init', async function() {
 *   console.log('Initializing my module');
 *   
 *   // Register a game setting
 *   game.settings.register('my-module', 'mySetting', {
 *     name: 'My Setting',
 *     hint: 'A description of this setting',
 *     scope: 'world',
 *     config: true,
 *     type: String,
 *     default: 'default value'
 *   });
 * });
 * 
 * Hooks.once('ready', async function() {
 *   console.log('Module ready!');
 * });
 * ```
 * 
 * @example Creating a Custom Application
 * ```typescript
 * class MyApp extends foundry.applications.api.HandlebarsApplicationMixin(
 *   foundry.applications.api.ApplicationV2
 * ) {
 *   static DEFAULT_OPTIONS = {
 *     id: "my-app",
 *     tag: "form",
 *     window: {
 *       title: "My Application",
 *       icon: "fa-solid fa-book"
 *     }
 *   };
 *   
 *   static PARTS = {
 *     form: {
 *       template: "modules/my-module/templates/my-app.hbs"
 *     }
 *   };
 * }
 * ```
 */

// ============================================================================
// HOOK EVENTS
// ============================================================================

/**
 * All available hook event names in Foundry VTT
 * @see hooks.d.mts for detailed documentation of each hook
 */
export declare const HookEvents: {
  // Core Lifecycle
  init: "init";
  i18nInit: "i18nInit";
  setup: "setup";
  ready: "ready";
  streamReady: "streamReady";
  error: "error";
  
  // Game
  pauseGame: "pauseGame";
  updateWorldTime: "updateWorldTime";
  shutDown: "shutDown";
  
  // Canvas
  canvasConfig: "canvasConfig";
  canvasInit: "canvasInit";
  canvasPan: "canvasPan";
  canvasReady: "canvasReady";
  canvasTearDown: "canvasTearDown";
  canvasDraw: "canvasDraw";
  dropCanvasData: "dropCanvasData";
  highlightObjects: "highlightObjects";
  initializeEdges: "initializeEdges";
  
  // Applications
  renderApplicationV2: "renderApplicationV2";
  renderApplicationV1: "renderApplicationV1";
  getHeaderControlsApplicationV2: "getHeaderControlsApplicationV2";
  getApplicationV1HeaderButtons: "getApplicationV1HeaderButtons";
  closeApplicationV2: "closeApplicationV2";
  closeApplicationV1: "closeApplicationV1";
  
  // Scene Controls
  getSceneControlButtons: "getSceneControlButtons";
  hotbarDrop: "hotbarDrop";
  getDocumentContextOptions: "getDocumentContextOptions";
  
  // Sidebar
  collapseSidebar: "collapseSidebar";
  changeSidebarTab: "changeSidebarTab";
  collapseSceneNavigation: "collapseSceneNavigation";
  
  // Canvas Groups & Layers
  drawGroup: "drawGroup";
  tearDownGroup: "tearDownGroup";
  drawLayer: "drawLayer";
  tearDownLayer: "tearDownLayer";
  pastePlaceableObject: "pastePlaceableObject";
  
  // Active Effects
  applyActiveEffect: "applyActiveEffect";
  
  // Compendium
  updateCompendium: "updateCompendium";
  applyCompendiumArt: "applyCompendiumArt";
  
  // Document CRUD Operations (Generic)
  preCreateDocument: "preCreateDocument";
  createDocument: "createDocument";
  preUpdateDocument: "preUpdateDocument";
  updateDocument: "updateDocument";
  preDeleteDocument: "preDeleteDocument";
  deleteDocument: "deleteDocument";
  
  // Token Movement
  preMoveToken: "preMoveToken";
  moveToken: "moveToken";
  stopToken: "stopToken";
  pauseToken: "pauseToken";
  recordToken: "recordToken";
  
  // Placeable Objects
  drawObject: "drawObject";
  refreshObject: "refreshObject";
  destroyObject: "destroyObject";
  controlObject: "controlObject";
  hoverObject: "hoverObject";
  
  // Token Specific
  applyTokenStatusEffect: "applyTokenStatusEffect";
  chatBubbleHTML: "chatBubbleHTML";
  modifyTokenAttribute: "modifyTokenAttribute";
  targetToken: "targetToken";
  
  // Notes
  activateNote: "activateNote";
  
  // Effects
  initializeRenderedEffectSourceShaders: "initializeRenderedEffectSourceShaders";
  
  // Cards
  dealCards: "dealCards";
  passCards: "passCards";
  returnCards: "returnCards";
  
  // Actor Sheets
  dropActorSheetData: "dropActorSheetData";
  
  // Interaction Layers
  activateLayer: "activateLayer";
  activateCanvasLayer: "activateCanvasLayer";
  deactivateLayer: "deactivateLayer";
  
  // Environment & Visibility
  configureCanvasEnvironment: "configureCanvasEnvironment";
  initializeCanvasEnvironment: "initializeCanvasEnvironment";
  initializeVisionMode: "initializeVisionMode";
  initializeVisionSources: "initializeVisionSources";
  lightingRefresh: "lightingRefresh";
  visibilityRefresh: "visibilityRefresh";
  initializeLightSources: "initializeLightSources";
  initializePriorityLightSources: "initializePriorityLightSources";
  sightRefresh: "sightRefresh";
  
  // Weather
  initializeWeatherEffects: "initializeWeatherEffects";
  
  // Adventure
  preImportAdventure: "preImportAdventure";
  importAdventure: "importAdventure";
  
  // Users
  userConnected: "userConnected";
  
  // Combat
  combatTurnChange: "combatTurnChange";
  combatStart: "combatStart";
  combatTurn: "combatTurn";
  combatRound: "combatRound";
  initializeCombatConfiguration: "initializeCombatConfiguration";
  
  // ProseMirror
  getProseMirrorMenuDropDowns: "getProseMirrorMenuDropDowns";
  getProseMirrorMenuItems: "getProseMirrorMenuItems";
  createProseMirrorEditor: "createProseMirrorEditor";
  
  // Hot Reload
  hotReload: "hotReload";
  
  // Chat
  chatInput: "chatInput";
  renderChatInput: "renderChatInput";
  chatMessage: "chatMessage";
  renderChatMessageHTML: "renderChatMessageHTML";
  
  // Audio/Video
  globalVolumeChanged: "globalVolumeChanged";
  globalPlaylistVolumeChanged: "globalPlaylistVolumeChanged";
  globalAmbientVolumeChanged: "globalAmbientVolumeChanged";
  globalInterfaceVolumeChanged: "globalInterfaceVolumeChanged";
  rtcSettingsChanged: "rtcSettingsChanged";
  
  // Settings
  clientSettingChanged: "clientSettingChanged";
  
  // Roll Tables
  dropRollTableSheetData: "dropRollTableSheetData";
  
  // Token Ring
  initializeDynamicTokenRingConfig: "initializeDynamicTokenRingConfig";
};

/**
 * Type representing all possible hook event names
 */
export type HookEventName = typeof HookEvents[keyof typeof HookEvents];

/**
 * Helper type for creating type-safe hook callbacks
 */
export type HookCallback<T extends HookEventName = HookEventName> = (...args: any[]) => void | Promise<void> | boolean;


// ============================================================================
// DOCUMENT TYPES
// ============================================================================

/**
 * Core document types with proper static method support
 */
export type { default as Scene } from './_dts/client/documents/scene.d.mts';
export type { default as Actor } from './_dts/client/documents/actor.d.mts';
export type { default as Item } from './_dts/client/documents/item.d.mts';
export type { default as ChatMessage } from './_dts/client/documents/chat-message.d.mts';
export type { default as Combat } from './_dts/client/documents/combat.d.mts';
export type { default as Combatant } from './_dts/client/documents/combatant.d.mts';
export type { default as JournalEntry } from './_dts/client/documents/journal-entry.d.mts';
export type { default as Macro } from './_dts/client/documents/macro.d.mts';
export type { default as Playlist } from './_dts/client/documents/playlist.d.mts';
export type { default as RollTable } from './_dts/client/documents/roll-table.d.mts';
export type { default as User } from './_dts/client/documents/user.d.mts';
export type { default as Folder } from './_dts/client/documents/folder.d.mts';
export type { default as Cards } from './_dts/client/documents/cards.d.mts';

// Document data types
export type { SceneData } from './_dts/common/documents/_types.d.mts';
export type { ActorData } from './_dts/common/documents/_types.d.mts';
export type { ItemData } from './_dts/common/documents/_types.d.mts';


// ============================================================================
// PACKAGE MANIFEST TYPES
// ============================================================================

/**
 * Package author information
 */
export interface PackageAuthorData {
  /** The author name */
  name: string;
  /** The author email address */
  email?: string;
  /** A website url for the author */
  url?: string;
  /** A Discord username for the author */
  discord?: string;
}

/**
 * Package compatibility information
 * See https://foundryvtt.com/article/versioning/ for version formatting
 */
export interface PackageCompatibilityData {
  /** The Package will not function before this version */
  minimum?: string;
  /** Verified compatible up to this version */
  verified?: string;
  /** The Package will not function after this version */
  maximum?: string;
}

/**
 * Related package information
 */
export interface RelatedPackageData {
  /** The id of the related package */
  id: string;
  /** The type of the related package */
  type: string;
  /** An explicit manifest URL, otherwise learned from the Foundry web server */
  manifest?: string;
  /** The compatibility data with this related Package */
  compatibility?: PackageCompatibilityData;
  /** The reason for this relationship */
  reason?: string;
}

/**
 * Package relationships to other packages
 */
export interface PackageRelationshipsData {
  /** Systems that this Package supports */
  systems?: RelatedPackageData[];
  /** Packages that are required for base functionality */
  requires?: RelatedPackageData[];
  /** Packages that are recommended for optimal functionality */
  recommends?: RelatedPackageData[];
}

/**
 * Language data for internationalization
 */
export interface PackageLanguageData {
  /** A string language code which is validated by Intl.getCanonicalLocales */
  lang: string;
  /** The human-readable language name */
  name: string;
  /** The relative path to included JSON translation strings */
  path: string;
  /** Only apply this set of translations when a specific system is being used */
  system?: string;
  /** Only apply this set of translations when a specific module is active */
  module?: string;
}

/**
 * Compendium pack data
 */
export interface PackageCompendiumData {
  /** The canonical compendium name. This should contain no spaces or special characters */
  name: string;
  /** The human-readable compendium name */
  label: string;
  /** The local relative path to the compendium source directory */
  path: string;
  /** The specific document type that is contained within this compendium pack */
  type: string;
  /** A file path to a banner image (290x70 dimensions recommended) */
  banner?: string;
  /** Denote that this compendium pack requires a specific game system */
  system?: string;
}

/**
 * Pack folder data for organizing compendium packs
 */
export interface PackFolderData {
  /** Name for the folder */
  name: string;
  /** Alphabetical ("a") or manual ("m") sorting */
  sorting: "a" | "m";
  /** A hex string for the pack's color */
  color: string;
  /** A list of the pack names to include in this folder */
  packs: string[];
  /** Nested folder data, up to three levels */
  folders?: PackFolderData[];
}

/**
 * Media data for screenshots and videos
 */
export interface PackageMediaData {
  /** Usage type for the media asset. "setup" means it will be used on the setup screen */
  type?: string;
  /** A web url link to the media element */
  url?: string;
  /** A caption for the media element */
  caption?: string;
  /** Should the media play on loop? */
  loop?: boolean;
  /** A link to the thumbnail for the media element */
  thumbnail?: string;
  /** An object of optional key/value flags */
  flags?: Record<string, any>;
}

/**
 * Package flags used by the core software
 */
export interface PackageFlagsData {
  /** Can you upload to this package's folder using the built-in FilePicker */
  canUpload?: boolean;
  /** Configuration information for hot reload logic */
  hotReload?: {
    /** A list of file extensions, e.g. ["css", "hbs", "json"] */
    extensions: string[];
    /** File paths to watch, e.g. ["src/styles", "templates", "lang"] */
    paths: string[];
  };
  /** Mapping information for CompendiumArt */
  compendiumArtMappings?: Record<string, {
    /** The path to the art mapping file */
    mapping: string;
    /** An optional credit string */
    credit?: string;
  }>;
  /** A mapping of token subject paths to configured subject images */
  tokenRingSubjectMappings?: Record<string, string>;
  /** Custom flags for your package */
  [key: string]: any;
}

/**
 * Base package manifest structure shared by all package types
 */
export interface PackageManifestData {
  /** The machine-readable unique package id (lowercase, no spaces) */
  id: string;
  /** The human-readable package title */
  title: string;
  /** The current package version (e.g., "1.0.0") */
  version: string;
  /** The compatibility of this version with the core Foundry software */
  compatibility?: PackageCompatibilityData;
  /** A publicly accessible web URL which provides the latest available package manifest file */
  manifest?: string;
  /** A publicly accessible web URL where the source files for this package may be downloaded */
  download?: string;
  /** An array of urls or relative file paths for JavaScript files to include */
  scripts?: string[];
  /** An array of urls or relative file paths for ESModule files to include */
  esmodules?: string[];
  /** An array of urls or relative file paths for CSS stylesheet files to include */
  styles?: string[];
  /** An optional package description, may contain HTML */
  description?: string;
  /** An array of author objects who are co-authors of this package */
  authors?: PackageAuthorData[];
  /** A web url where more details about the package may be found */
  url?: string;
  /** A web url or relative file path where license details may be found */
  license?: string;
  /** A web url or relative file path where readme instructions may be found */
  readme?: string;
  /** A web url where bug reports may be submitted and tracked */
  bugs?: string;
  /** A web url where notes detailing package updates are available */
  changelog?: string;
  /** An array of objects containing media info about the package */
  media?: PackageMediaData[];
  /** An array of language data objects which are included by this package */
  languages?: PackageLanguageData[];
  /** An array of compendium packs which are included by this package */
  packs?: PackageCompendiumData[];
  /** An array of pack folders that will be initialized once per world */
  packFolders?: PackFolderData[];
  /** An organized object of relationships to other Packages */
  relationships?: PackageRelationshipsData;
  /** Whether to require a package-specific socket namespace for this package */
  socket?: boolean;
  /** Whether updates should leave the contents of the package's /storage folder */
  persistentStorage?: boolean;
  /** An object of optional key/value flags */
  flags?: PackageFlagsData;
  /** Whether this package uses the protected content access system */
  protected?: boolean;
  /** Whether this package is a free Exclusive pack */
  exclusive?: boolean;
}

/**
 * Document type configuration for server-side sanitization
 */
export interface ServerSanitizationFields {
  /** HTML fields that must be cleaned by the server, e.g. ["description.value"] */
  htmlFields?: string[];
  /** File path fields that must be cleaned by the server */
  filePathFields?: Record<string, string[]>;
  /** Fields that can only be updated by a GM user */
  gmOnlyFields?: string[];
}

/**
 * Document types configuration for systems and modules
 * First layer: document types (e.g., "Actor" or "Item")
 * Second layer: document subtypes (e.g., "character" or "feature")
 */
export type DocumentTypesConfiguration = Record<string, Record<string, ServerSanitizationFields>>;

/**
 * Module manifest structure (module.json)
 */
export interface ModuleManifestData extends PackageManifestData {
  /** Does this module provide a translation for the core software? */
  coreTranslation?: boolean;
  /** A library module provides no user-facing functionality and is solely for use by other modules */
  library?: boolean;
  /** Additional document subtypes provided by this module */
  documentTypes?: DocumentTypesConfiguration;
}

/**
 * System manifest structure (system.json)
 */
export interface SystemManifestData extends PackageManifestData {
  /** Additional document subtypes provided by this system */
  documentTypes?: DocumentTypesConfiguration;
  /** A web URL or local file path which provides a default background banner for worlds */
  background?: string;
  /** A default initiative formula used for this system */
  initiative?: string;
  /** The default grid settings to use for Scenes in this system */
  grid?: {
    /** A default grid type to use for Scenes in this system */
    type?: number;
    /** A default distance measurement to use for Scenes in this system */
    distance?: number;
    /** A default unit of measure to use for distance measurement in this system */
    units?: string;
    /** The default rule used by this system for diagonal measurement */
    diagonals?: number;
  };
  /** An Actor data attribute path to use for Token primary resource bars */
  primaryTokenAttribute?: string;
  /** An Actor data attribute path to use for Token secondary resource bars */
  secondaryTokenAttribute?: string;
}

/**
 * World manifest structure (world.json)
 */
export interface WorldManifestData extends PackageManifestData {
  /** The game system name which this world relies upon */
  system: string;
  /** The version of the core software for which this world has been migrated */
  coreVersion: string;
  /** The version of the game system for which this world has been migrated */
  systemVersion: string;
  /** A web URL or local file path which provides a background banner image */
  background?: string;
  /** An ISO datetime string when the next game session is scheduled to occur */
  nextSession?: string;
  /** Should user access keys be reset as part of the next launch? */
  resetKeys?: boolean;
  /** Should the world launch in safe mode? */
  safeMode?: boolean;
  /** The theme to use for this world's join page */
  joinTheme?: string;
}

// ============================================================================
// GLOBAL API TYPES
// ============================================================================

/**
 * Global declarations for Foundry VTT API available in the browser
 */
declare global {
  /**
   * The core Foundry VTT namespace containing all client-side APIs
   */
  const foundry: any;
  
  /**
   * The global Game instance managing the current session
   */
  const game: any;
  
  /**
   * The global Canvas instance for rendering the game scene
   */
  const canvas: any;
  
  /**
   * Global configuration object for Foundry VTT
   */
  const CONFIG: any;
  
  /**
   * Global constants used throughout Foundry VTT
   */
  const CONST: any;
  
  /**
   * Handlebars template engine
   */
  const Handlebars: any;
  
  /**
   * PIXI.js rendering library
   */
  const PIXI: any;
  
  /**
   * Socket.IO client for real-time communication
   */
  const io: any;
  
  /**
   * Collection of UI application instances
   */
  const ui: {
    activeWindow: any;
    windows: Record<string, any>;
    chat: any;
    combat: any;
    controls: any;
    hotbar: any;
    menu: any;
    nav: any;
    notifications: any;
    pause: any;
    players: any;
    sidebar: any;
  };
  
  /**
   * Helper function to get the Document class for a given document name
   */
  function getDocumentClass(documentName: string): any;
  
  /**
   * The global Hooks system for event management
   */
  namespace Hooks {
    /**
     * Register a callback for a hook event
     * @param hook The hook event name
     * @param fn The callback function
     * @returns The hook ID for later removal
     */
    function on(hook: string, fn: (...args: any[]) => any): number;
    
    /**
     * Register a callback for a hook event that only fires once
     * @param hook The hook event name
     * @param fn The callback function
     * @returns The hook ID for later removal
     */
    function once(hook: string, fn: (...args: any[]) => any): number;
    
    /**
     * Remove a callback from a hook event
     * @param hook The hook event name
     * @param fn The callback function or hook ID
     */
    function off(hook: string, fn: number | Function): void;
    
    /**
     * Call all callbacks registered for a hook event
     * @param hook The hook event name
     * @param args Arguments to pass to callbacks
     * @returns Whether any callback returned false
     */
    function call(hook: string, ...args: any[]): boolean;
    
    /**
     * Call all callbacks registered for a hook event asynchronously
     * @param hook The hook event name
     * @param args Arguments to pass to callbacks
     * @returns Whether any callback returned false
     */
    function callAll(hook: string, ...args: any[]): Promise<boolean>;
  }
  
  // Common hook events
  /**
   * Fires once as Foundry is initializing, right before any initialization tasks have begun
   */
  namespace HookEvents {
    function init(): void;
    function i18nInit(): void;
    function setup(): void;
    function ready(): void;
  }
  
  // Document Classes
  class Actor {}
  class Adventure {}
  class Card {}
  class Cards {}
  class ChatMessage {}
  class Combat {}
  class Combatant {}
  class CombatantGroup {}
  class Folder {}
  class Item {}
  class JournalEntry {}
  class JournalEntryPage {}
  class Macro {}
  class Playlist {}
  class PlaylistSound {}
  class RollTable {}
  class Scene {}
  class Setting {}
  class TableResult {}
  class User {}
  
  // Embedded Document Classes
  class ActiveEffect {}
  class AmbientLightDocument {}
  class AmbientSoundDocument {}
  class DrawingDocument {}
  class MeasuredTemplateDocument {}
  class NoteDocument {}
  class RegionDocument {}
  class RegionBehavior {}
  class TileDocument {}
  class TokenDocument {}
  class WallDocument {}
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * A collection data structure for managing objects by ID
 */
export interface Collection<T> extends Map<string, T> {
  get(key: string, options?: {strict?: boolean}): T | undefined;
  getName(name: string, options?: {strict?: boolean}): T | undefined;
  find(predicate: (value: T) => boolean): T | undefined;
  filter(predicate: (value: T) => boolean): T[];
  map<U>(callback: (value: T) => U): U[];
  reduce<U>(callback: (accumulator: U, value: T) => U, initial: U): U;
}

/**
 * Document data structure
 */
export interface DocumentData {
  _id?: string;
  name?: string;
  img?: string;
  [key: string]: any;
}

/**
 * Chat message data structure
 */
export interface ChatMessageData extends DocumentData {
  type?: number;
  user?: string;
  speaker?: {
    scene?: string;
    actor?: string;
    token?: string;
    alias?: string;
  };
  content?: string;
  flavor?: string;
  sound?: string;
  whisper?: string[];
  blind?: boolean;
  rolls?: any[];
  timestamp?: number;
}

/**
 * Dialog options
 */
export interface DialogOptions {
  title?: string;
  content?: string;
  buttons?: Record<string, {
    icon?: string;
    label?: string;
    callback?: (html: any) => any;
  }>;
  default?: string;
  render?: (html: any) => void;
  close?: (html: any) => void;
}

// ============================================================================
// COMMON INTERFACES FOR MODULE DEVELOPMENT
// ============================================================================

/**
 * Settings registration options
 */
export interface SettingOptions {
  name: string;
  hint?: string;
  scope: "world" | "client";
  config: boolean;
  type: any;
  default?: any;
  choices?: Record<string, string>;
  range?: {
    min: number;
    max: number;
    step: number;
  };
  onChange?: (value: any) => void;
}

/**
 * Sheet registration options
 */
export interface SheetOptions {
  types: string[];
  makeDefault?: boolean;
  label?: string;
}

/**
 * Game settings API
 */
export interface GameSettings {
  /**
   * Register a new game setting
   */
  register(namespace: string, key: string, options: SettingOptions): void;
  
  /**
   * Get the value of a game setting
   */
  get(namespace: string, key: string): any;
  
  /**
   * Set the value of a game setting
   */
  set(namespace: string, key: string, value: any): Promise<any>;
}

/**
 * Localization API
 */
export interface Localization {
  /**
   * Localize a string
   */
  localize(key: string): string;
  
  /**
   * Format a string with data
   */
  format(key: string, data: Record<string, any>): string;
}

// ============================================================================
// APPLICATION V2 API - Modern Application Framework
// ============================================================================

/**
 * Application render states
 */
export enum ApplicationRenderState {
  ERROR = -3,
  CLOSING = -2,
  CLOSED = -1,
  NONE = 0,
  RENDERING = 1,
  RENDERED = 2
}

/**
 * Application position configuration
 */
export interface ApplicationPosition {
  /** The width of the application in pixels or "auto" */
  width?: number | "auto";
  /** The height of the application in pixels or "auto" */
  height?: number | "auto";
  /** The top position in pixels */
  top?: number;
  /** The left position in pixels */
  left?: number;
  /** The scale of the application (0-1) */
  scale?: number;
  /** The z-index of the application */
  zIndex?: number;
}

/**
 * Window configuration for ApplicationV2
 */
export interface ApplicationWindowConfiguration {
  /** Does this application have a window frame? */
  frame?: boolean;
  /** Is this application positioned or does it fill its container? */
  positioned?: boolean;
  /** The window title */
  title?: string;
  /** The window icon (FontAwesome class) */
  icon?: string;
  /** Array of header control buttons */
  controls?: ApplicationHeaderControlsEntry[];
  /** Is the window minimizable? */
  minimizable?: boolean;
  /** Is the window resizable? */
  resizable?: boolean | "horizontal" | "vertical";
  /** The HTML tag to use for the content section */
  contentTag?: string;
  /** CSS classes to apply to the content section */
  contentClasses?: string[];
}

/**
 * Header control button configuration
 */
export interface ApplicationHeaderControlsEntry {
  /** The icon class (FontAwesome) */
  icon: string;
  /** The label (will be localized) */
  label: string;
  /** The action identifier */
  action: string;
  /** Is this control visible? Can be a boolean or function */
  visible?: boolean | ((app: any) => boolean);
  /** CSS class to apply to the button */
  class?: string;
}

/**
 * Form configuration for ApplicationV2
 */
export interface ApplicationFormConfiguration {
  /** The form submission handler */
  handler?: (event: Event, form: HTMLFormElement, formData: any) => any;
  /** Should the form submit when any input changes? */
  submitOnChange?: boolean;
  /** Should the application close when the form is submitted? */
  closeOnSubmit?: boolean;
}

/**
 * Application configuration options
 */
export interface ApplicationConfiguration {
  /** A unique application ID */
  id?: string;
  /** CSS classes to apply to the application */
  classes?: string[];
  /** The HTML tag used for the application element */
  tag?: string;
  /** Window configuration */
  window?: ApplicationWindowConfiguration;
  /** Actions configuration mapping action names to handlers */
  actions?: Record<string, ApplicationClickAction | Function>;
  /** Form configuration */
  form?: ApplicationFormConfiguration;
  /** Position configuration */
  position?: ApplicationPosition;
  /** Additional custom options */
  [key: string]: any;
}

/**
 * Application render options
 */
export interface ApplicationRenderOptions {
  /** Force a re-render even if the application is already rendered */
  force?: boolean;
  /** The position to render at */
  position?: ApplicationPosition;
  /** The window mode */
  window?: {
    /** The window title */
    title?: string;
  };
  /** Array of parts to render (for HandlebarsApplication) */
  parts?: string[];
  /** Additional custom render options */
  [key: string]: any;
}

/**
 * Application render context passed to _prepareContext
 */
export interface ApplicationRenderContext {
  /** Data from _prepareContext */
  [key: string]: any;
}

/**
 * Click action configuration
 */
export interface ApplicationClickAction {
  /** The action handler function */
  handler: (event: PointerEvent, target: HTMLElement) => any;
  /** Which mouse buttons trigger this action (0=left, 1=middle, 2=right) */
  buttons?: number[];
}

/**
 * The modern ApplicationV2 class for building UIs
 */
export interface ApplicationV2<
  Configuration extends ApplicationConfiguration = ApplicationConfiguration,
  RenderOptions extends ApplicationRenderOptions = ApplicationRenderOptions
> {
  /** Application configuration options */
  readonly options: Readonly<Configuration>;
  
  /** The application HTML element */
  readonly element: HTMLElement;
  
  /** The current render state */
  readonly state: ApplicationRenderState;
  
  /** The application ID */
  readonly id: string;
  
  /** The application title */
  readonly title: string;
  
  /** The application position */
  readonly position: ApplicationPosition;
  
  /** The application window */
  readonly window: {
    title?: HTMLHeadingElement;
    icon?: HTMLElement;
    close?: HTMLButtonElement;
    resize?: HTMLElement;
    [key: string]: any;
  };
  
  /**
   * Render the application
   * @param options - Render options
   * @param _options - Additional options
   */
  render(options?: boolean | RenderOptions, _options?: RenderOptions): Promise<this>;
  
  /**
   * Close the application
   * @param options - Close options
   */
  close(options?: any): Promise<this>;
  
  /**
   * Change the application position
   * @param position - New position
   */
  setPosition(position: Partial<ApplicationPosition>): void;
  
  /**
   * Bring the application to the front
   */
  bringToFront(): void;
  
  /**
   * Minimize the application
   */
  minimize(): Promise<void>;
  
  /**
   * Maximize the application
   */
  maximize(): Promise<void>;
  
  /**
   * Prepare context data for rendering
   * @param options - Render options
   */
  _prepareContext(options: RenderOptions): Promise<ApplicationRenderContext>;
  
  /**
   * Render the application HTML
   * @param context - Render context
   * @param options - Render options
   */
  _renderHTML(context: ApplicationRenderContext, options: RenderOptions): Promise<HTMLElement>;
  
  /**
   * Replace the application HTML
   * @param element - The new HTML element
   * @param content - The rendered content
   * @param options - Render options
   */
  _replaceHTML(element: HTMLElement, content: HTMLElement, options: RenderOptions): void;
  
  /**
   * Called after the application is rendered
   * @param context - Render context
   * @param options - Render options
   */
  _onRender(context: ApplicationRenderContext, options: RenderOptions): void;
  
  /**
   * Called before the application is closed
   * @param options - Close options
   */
  _onClose(options: any): void;
  
  /**
   * Called when the application position changes
   * @param position - The new position
   */
  _onPosition(position: ApplicationPosition): void;
}

/**
 * Constructor for ApplicationV2
 */
export interface ApplicationV2Constructor {
  new <
    Configuration extends ApplicationConfiguration = ApplicationConfiguration,
    RenderOptions extends ApplicationRenderOptions = ApplicationRenderOptions
  >(options?: Partial<Configuration>): ApplicationV2<Configuration, RenderOptions>;
  
  /** Default configuration options */
  DEFAULT_OPTIONS: Partial<ApplicationConfiguration>;
  
  /** The base application class */
  BASE_APPLICATION: ApplicationV2Constructor;
  
  /** Render states */
  RENDER_STATES: typeof ApplicationRenderState;
}

// ============================================================================
// HANDLEBARS APPLICATION MIXIN
// ============================================================================

/**
 * Template part configuration for HandlebarsApplication
 */
export interface HandlebarsTemplatePart {
  /** The template path */
  template: string;
  /** A CSS id to assign to the part element */
  id?: string;
  /** Does this part replace the root element's children? */
  root?: boolean;
  /** CSS classes to apply to the part element */
  classes?: string[];
  /** Additional templates required to render this part */
  templates?: string[];
  /** Selectors within this part whose scroll positions should be persisted */
  scrollable?: string[];
  /** Form configurations for this part */
  forms?: Record<string, ApplicationFormConfiguration>;
}

/**
 * Render options for HandlebarsApplication
 */
export interface HandlebarsRenderOptions extends ApplicationRenderOptions {
  /** Array of template part IDs to render */
  parts?: string[];
}

/**
 * HandlebarsApplication augments ApplicationV2 with template rendering
 */
export interface HandlebarsApplication extends ApplicationV2<ApplicationConfiguration, HandlebarsRenderOptions> {
  /** Record of all rendered template parts */
  readonly parts: Record<string, HTMLElement>;
  
  /**
   * Prepare context for a specific template part
   * @param partId - The part being rendered
   * @param context - Shared context from _prepareContext
   * @param options - Render options
   */
  _preparePartContext(
    partId: string,
    context: ApplicationRenderContext,
    options: HandlebarsRenderOptions
  ): Promise<ApplicationRenderContext>;
  
  /**
   * Attach event listeners to a rendered part
   * @param partId - The rendered part ID
   * @param htmlElement - The rendered HTML element
   * @param options - Render options
   */
  _attachPartListeners(partId: string, htmlElement: HTMLElement, options: HandlebarsRenderOptions): void;
}

/**
 * Constructor type for HandlebarsApplication
 */
export interface HandlebarsApplicationConstructor {
  new (options?: Partial<ApplicationConfiguration>): HandlebarsApplication;
  
  /** Template parts configuration */
  PARTS: Record<string, HandlebarsTemplatePart>;
}

/**
 * The HandlebarsApplicationMixin augments an ApplicationV2 class with Handlebars template rendering
 */
export type HandlebarsApplicationMixin = <T extends ApplicationV2Constructor>(
  BaseApplication: T
) => T & HandlebarsApplicationConstructor;

// ============================================================================
// DIALOG V2 API
// ============================================================================

/**
 * Button configuration for DialogV2
 */
export interface DialogV2Button {
  /** The button action identifier */
  action: string;
  /** The button label (will be localized) */
  label: string;
  /** FontAwesome icon classes */
  icon?: string;
  /** CSS classes to apply to the button */
  class?: string;
  /** The button type */
  type?: "submit" | "button" | "reset";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether this is the default button */
  default?: boolean;
  /** Callback invoked when button is clicked */
  callback?: (event: PointerEvent | SubmitEvent, button: HTMLButtonElement, dialog: any) => Promise<any>;
}

/**
 * DialogV2 configuration
 */
export interface DialogV2Configuration extends ApplicationConfiguration {
  /** Modal dialogs prevent interaction with rest of UI */
  modal?: boolean;
  /** Button configurations */
  buttons: DialogV2Button[];
  /** Dialog content (HTML string or element) */
  content?: string | HTMLDivElement;
  /** Function invoked when dialog is submitted */
  submit?: (result: any, dialog: any) => Promise<void>;
}

/**
 * DialogV2 wait options
 */
export interface DialogV2WaitOptions {
  /** Function invoked when dialog is rendered */
  render?: (event: Event, dialog: any) => void;
  /** Function invoked when dialog is closed */
  close?: (event: Event, dialog: any) => void;
  /** Throw rejection if dialog is dismissed */
  rejectClose?: boolean;
}

/**
 * DialogV2 interface
 */
export interface DialogV2 extends ApplicationV2<DialogV2Configuration> {
  /**
   * Wait for the dialog to be submitted or closed
   * @param options - Wait options
   */
  wait(options?: DialogV2WaitOptions): Promise<any>;
}

/**
 * DialogV2 constructor
 */
export interface DialogV2Constructor {
  new (options: Partial<DialogV2Configuration>): DialogV2;
  
  /**
   * Create a confirmation dialog
   * @param options - Dialog configuration
   */
  confirm(options?: Partial<DialogV2Configuration> & DialogV2WaitOptions): Promise<boolean>;
  
  /**
   * Create a prompt dialog
   * @param options - Dialog configuration with ok/cancel buttons
   */
  prompt(options?: Partial<DialogV2Configuration> & {
    ok?: Partial<DialogV2Button>;
    cancel?: Partial<DialogV2Button>;
  } & DialogV2WaitOptions): Promise<any>;
}

// ============================================================================
// DOCUMENT SHEET V2 API
// ============================================================================

/**
 * DocumentSheetV2 configuration
 */
export interface DocumentSheetConfiguration extends ApplicationConfiguration {
  /** The Document instance */
  document: any;
  /** View permission level required */
  viewPermission?: number;
  /** Edit permission level required */
  editPermission?: number;
  /** Can this sheet be used to create documents? */
  canCreate?: boolean;
  /** Show sheet configuration button? */
  sheetConfig?: boolean;
}

/**
 * DocumentSheetV2 render options
 */
export interface DocumentSheetRenderOptions extends ApplicationRenderOptions {
  /** Render context string */
  renderContext?: string;
  /** Render data object */
  renderData?: any;
}

/**
 * DocumentSheetV2 interface
 */
export interface DocumentSheetV2 extends ApplicationV2<DocumentSheetConfiguration, DocumentSheetRenderOptions> {
  /** The associated Document */
  readonly document: any;
  
  /** Is the sheet visible to current user? */
  readonly isVisible: boolean;
  
  /** Is the sheet editable by current user? */
  readonly isEditable: boolean;
}

/**
 * DocumentSheetV2 constructor
 */
export interface DocumentSheetV2Constructor {
  new (options: Partial<DocumentSheetConfiguration>): DocumentSheetV2;
}

// ============================================================================
// FOUNDRY NAMESPACE TYPE AUGMENTATION
// ============================================================================

/**
 * Augment the foundry namespace with proper types
 */
export namespace foundry {
  export namespace applications {
    export namespace api {
      export const ApplicationV2: ApplicationV2Constructor;
      export const HandlebarsApplicationMixin: HandlebarsApplicationMixin;
      export const DialogV2: DialogV2Constructor;
      export const Dialog: DialogV2Constructor;  // Alias
      export const DocumentSheetV2: DocumentSheetV2Constructor;
      export const DocumentSheet: DocumentSheetV2Constructor;  // Alias
    }
  }
}
