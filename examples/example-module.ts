/**
 * Example Foundry VTT Module using TypeScript
 * 
 * This example demonstrates how to use the Foundry VTT type definitions
 * to create a type-safe module.
 */

/// <reference types="../index.d.ts" />

// ============================================================================
// MODULE INITIALIZATION
// ============================================================================

/**
 * Initialize the module
 */
Hooks.once('init', async function() {
  console.log('Example Module | Initializing');
  
  // Register module settings
  registerSettings();
});

/**
 * Ready hook - called when everything is initialized
 */
Hooks.once('ready', async function() {
  console.log('Example Module | Ready!');
  console.log('Current user:', game.user?.name);
});

// ============================================================================
// SETTINGS REGISTRATION
// ============================================================================

function registerSettings(): void {
  // World setting
  game.settings.register('example-module', 'worldSetting', {
    name: 'World Setting',
    hint: 'This setting is stored in the world database',
    scope: 'world',
    config: true,
    type: String,
    default: 'default value',
    onChange: (value) => {
      console.log('Setting changed to:', value);
    }
  });
}

// ============================================================================
// CUSTOM APPLICATION EXAMPLE
// ============================================================================

/**
 * Example custom application using ApplicationV2
 */
class ExampleApplication extends foundry.applications.api.ApplicationV2 {
  static DEFAULT_OPTIONS = {
    id: 'example-app',
    window: {
      title: 'Example Application',
      icon: 'fa-solid fa-book'
    }
  };
  
  async _prepareContext(options: any): Promise<any> {
    const context = await super._prepareContext(options);
    context.message = 'Hello from Example Module!';
    return context;
  }
  
  async _renderHTML(context: any, options: any): Promise<HTMLElement> {
    const div = document.createElement('div');
    div.innerHTML = `<h2>${context.message}</h2>`;
    return div;
  }
}

// ============================================================================
// DOCUMENT EXAMPLES
// ============================================================================

/**
 * Create a chat message (requires type assertion for now)
 */
async function sendChatMessage(): Promise<void> {
  // In a real implementation, use proper Document types
  const ChatMessageClass = game.messages?.documentClass || ChatMessage;
  if (ChatMessageClass && 'create' in ChatMessageClass) {
    await (ChatMessageClass as any).create({
      content: '<p>Hello from the Example Module!</p>'
    });
  }
}

// ============================================================================
// HOOK EXAMPLES
// ============================================================================

Hooks.on('createActor', (actor: any, options: any, userId: string) => {
  console.log(`Actor created: ${actor.name}`);
});

export { ExampleApplication, sendChatMessage };
