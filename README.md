# Foundry VTT TypeScript Type Definitions

This directory contains comprehensive TypeScript type definitions for developing Foundry Virtual Tabletop modules, systems, and add-ons.

## Version

These types are for **Foundry VTT v13.350** (Generation 13, Build 350).

## Quick Start

### Using the Types in Your Module

#### Option 1: Triple-Slash Reference Directive

Add this line at the top of your TypeScript files:

```typescript
/// <reference types="./path/to/types" />
```

#### Option 2: tsconfig.json Configuration

Configure your `tsconfig.json` to include the types automatically:

```json
{
  "compilerOptions": {
    "types": ["./path/to/types"],
    "lib": ["ES2023", "DOM"],
    "module": "ESNext",
    "target": "ESNext",
    "moduleResolution": "node"
  },
  "include": ["src/**/*"]
}
```

## Type Definitions Included

### Package Manifests

Types for `module.json`, `system.json`, and `world.json`:

```typescript
import type { ModuleManifestData, SystemManifestData, WorldManifestData } from './types';

const manifest: ModuleManifestData = {
  id: "my-module",
  title: "My Module",
  version: "1.0.0",
  compatibility: {
    minimum: "13",
    verified: "13.350"
  },
  esmodules: ["scripts/module.js"],
  styles: ["styles/module.css"],
  languages: [
    {
      lang: "en",
      name: "English",
      path: "lang/en.json"
    }
  ]
};
```

### Global API

All global Foundry VTT objects are typed:

```typescript
// game, canvas, ui, CONFIG, CONST, Hooks are all available with types

Hooks.once('init', () => {
  console.log('Game initializing');
});

Hooks.once('ready', () => {
  const user = game.user;
  const actors = game.actors;
  const items = game.items;
});
```

### Game Settings

```typescript
game.settings.register('my-module', 'mySetting', {
  name: 'My Setting',
  hint: 'A helpful description',
  scope: 'world',  // or 'client'
  config: true,
  type: String,
  default: 'default value',
  onChange: (value) => {
    console.log('Setting changed:', value);
  }
});

const value = game.settings.get('my-module', 'mySetting');
await game.settings.set('my-module', 'mySetting', 'new value');
```

### ApplicationV2 - Modern UI Framework

Create modern applications using the new ApplicationV2 API:

```typescript
class MyApplication extends foundry.applications.api.ApplicationV2 {
  static DEFAULT_OPTIONS = {
    id: "my-app",
    classes: ["my-module"],
    tag: "div",
    window: {
      frame: true,
      positioned: true,
      title: "My Application",
      icon: "fa-solid fa-book",
      minimizable: true,
      resizable: true
    },
    position: {
      width: 600,
      height: 400
    }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    context.myData = "Hello World";
    return context;
  }

  async _renderHTML(context, options) {
    const div = document.createElement('div');
    div.innerHTML = `<p>${context.myData}</p>`;
    return div;
  }
}

// Open the application
const app = new MyApplication();
await app.render({ force: true });
```

### HandlebarsApplication - Template-Based UI

Create applications using Handlebars templates:

```typescript
class MyHandlebarsApp extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.ApplicationV2
) {
  static DEFAULT_OPTIONS = {
    id: "my-handlebars-app",
    tag: "form",
    window: {
      title: "My Handlebars App",
      icon: "fa-solid fa-users"
    }
  };

  static PARTS = {
    header: {
      template: "modules/my-module/templates/header.hbs"
    },
    content: {
      template: "modules/my-module/templates/content.hbs",
      scrollable: [""]
    },
    footer: {
      template: "modules/my-module/templates/footer.hbs"
    }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    context.title = "My Application";
    context.items = game.items.contents;
    return context;
  }

  async _preparePartContext(partId, context, options) {
    const partContext = await super._preparePartContext(partId, context, options);
    
    if (partId === "content") {
      partContext.filteredItems = context.items.filter(i => i.type === "weapon");
    }
    
    return partContext;
  }
}
```

### DialogV2 - Modern Dialogs

Create dialogs easily:

```typescript
// Confirmation dialog
const proceed = await foundry.applications.api.DialogV2.confirm({
  window: { title: "Confirm Action" },
  content: "<p>Are you sure you want to proceed?</p>",
  rejectClose: false,
  modal: true
});

if (proceed) {
  console.log("User confirmed");
}

// Prompt dialog
const result = await foundry.applications.api.DialogV2.prompt({
  window: { title: "Enter Your Name" },
  content: '<input name="username" type="text" placeholder="Your name" autofocus>',
  ok: {
    label: "Submit",
    icon: "fa-solid fa-check",
    callback: (event, button, dialog) => {
      return button.form.elements.username.value;
    }
  },
  rejectClose: true
});

console.log("User entered:", result);
```

### DocumentSheetV2 - Document Sheets

Create custom document sheets:

```typescript
class MyActorSheet extends foundry.applications.api.HandlebarsApplicationMixin(
  foundry.applications.api.DocumentSheetV2
) {
  static DEFAULT_OPTIONS = {
    classes: ["my-system", "actor-sheet"],
    position: {
      width: 720,
      height: 800
    },
    window: {
      title: "Actor Sheet",
      icon: "fa-solid fa-user"
    }
  };

  static PARTS = {
    header: {
      template: "systems/my-system/templates/actor-sheet-header.hbs"
    },
    tabs: {
      template: "systems/my-system/templates/actor-sheet-tabs.hbs"
    },
    biography: {
      template: "systems/my-system/templates/actor-sheet-biography.hbs",
      scrollable: [""]
    }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    context.actor = this.document;
    context.system = this.document.system;
    context.items = this.document.items.contents;
    return context;
  }
}

// Register the sheet
DocumentSheetConfig.registerSheet(Actor, "my-system", MyActorSheet, {
  types: ["character", "npc"],
  makeDefault: true,
  label: "My Actor Sheet"
});
```

### Documents

All document types are available:

```typescript
// Create an actor
const actor = await Actor.create({
  name: "Test Actor",
  type: "character",
  img: "path/to/image.png"
});

// Update the actor
await actor.update({
  "system.health.value": 100
});

// Create an item
const item = await Item.create({
  name: "Magic Sword",
  type: "weapon",
  system: {
    damage: "1d8+3"
  }
});

// Add item to actor
await actor.createEmbeddedDocuments("Item", [item.toObject()]);

// Chat message
await ChatMessage.create({
  content: "Hello world!",
  speaker: ChatMessage.getSpeaker({ actor })
});
```

### Hooks

All major hooks are available:

```typescript
// Initialization hooks
Hooks.once('init', () => {
  console.log('Initializing...');
});

Hooks.once('setup', () => {
  console.log('Setup complete...');
});

Hooks.once('ready', () => {
  console.log('Ready!');
});

// Document hooks
Hooks.on('createActor', (actor, options, userId) => {
  console.log('Actor created:', actor.name);
});

Hooks.on('updateActor', (actor, changes, options, userId) => {
  console.log('Actor updated:', actor.name, changes);
});

Hooks.on('deleteActor', (actor, options, userId) => {
  console.log('Actor deleted:', actor.name);
});

// Render hooks
Hooks.on('renderActorSheet', (app, html, data) => {
  console.log('Actor sheet rendered');
});

// Canvas hooks
Hooks.on('canvasReady', (canvas) => {
  console.log('Canvas ready');
});
```

### Collections

Work with document collections:

```typescript
// Get all actors
const actors: Collection<Actor> = game.actors;

// Filter actors
const playerActors = actors.filter(a => a.hasPlayerOwner);

// Find an actor
const hero = actors.find(a => a.name === "Hero");

// Map actors
const actorNames = actors.map(a => a.name);

// Get actor by ID
const actor = actors.get("actor-id-here");

// Get actor by name
const actorByName = actors.getName("Actor Name");
```

## API Reference

### Core Objects

- `game: Game` - The main game instance
- `canvas: Canvas` - The game canvas
- `ui` - UI application instances
- `CONFIG` - Configuration object
- `CONST` - Constants
- `Hooks` - Event system

### Documents

- `Actor` - Player characters and NPCs
- `Item` - Equipment, spells, features
- `Scene` - Game scenes
- `ChatMessage` - Chat messages
- `Combat` - Combat encounters
- `Combatant` - Participants in combat
- `Folder` - Organizational folders
- `JournalEntry` - Journal entries
- `Macro` - Executable macros
- `Playlist` - Audio playlists
- `RollTable` - Random tables
- `User` - User accounts

### Applications

- `ApplicationV2` - Modern application base class
- `HandlebarsApplicationMixin` - Template rendering mixin
- `DialogV2` - Dialog helper
- `DocumentSheetV2` - Document sheet base class

### Utilities

- `foundry.utils` - Utility functions
- `foundry.data` - Data model fields
- `foundry.dice` - Dice rolling
- `foundry.documents` - Document classes

## Examples

See the main `index.d.ts` file for more detailed examples and documentation.

## Contributing

If you find issues with the type definitions or want to contribute improvements, please submit an issue or pull request.

## License

These type definitions follow the same license as Foundry Virtual Tabletop.

## Support

For questions about using these types:
- Foundry VTT Documentation: https://foundryvtt.com/api/
- Foundry VTT Discord: https://discord.gg/foundryvtt
- Community Forums: https://forums.foundryvtt.com/

## Changelog

### v13.350.0
- Initial release with comprehensive type definitions
- ApplicationV2 and HandlebarsApplication types
- DialogV2 and DocumentSheetV2 types
- Package manifest types
- Document types
- Global API types
