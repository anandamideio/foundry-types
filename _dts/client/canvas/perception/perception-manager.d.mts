declare const PerceptionManager_base: {
    new (...args: any[]): {
        renderFlags: foundry.canvas.interaction.RenderFlags;
        applyRenderFlags(): void;
    };
    RENDER_FLAGS: Record<string, RenderFlag>;
    RENDER_FLAG_PRIORITY: string;
};
/**
 * @import {PerceptionManagerFlags} from "../_types.mjs"
 */
/**
 * A helper class which manages the refresh workflow for perception layers on the canvas.
 * This controls the logic which batches multiple requested updates to minimize the amount of work required.
 * A singleton instance is available as {@link foundry.canvas.Canvas#perception}.
 */
export default class PerceptionManager extends PerceptionManager_base {
    /** @override */
    static override RENDER_FLAGS: {
        refreshEdges: {};
        initializeLighting: {
            propagate: string[];
        };
        initializeLightSources: {
            propagate: string[];
        };
        refreshLighting: {
            propagate: string[];
        };
        refreshLightSources: {};
        initializeVisionModes: {
            propagate: string[];
        };
        initializeVision: {
            propagate: string[];
        };
        refreshVision: {
            propagate: string[];
        };
        refreshVisionSources: {};
        refreshPrimary: {};
        refreshOcclusion: {
            propagate: string[];
        };
        refreshOcclusionStates: {};
        refreshOcclusionMask: {};
        initializeSounds: {
            propagate: string[];
        };
        refreshSounds: {};
        soundFadeDuration: {};
        /** @deprecated since v12 */
        refreshTiles: {
            propagate: string[];
            deprecated: {
                message: string;
                since: number;
                until: number;
            };
            alias: boolean;
        };
        /** @deprecated since v12 */
        identifyInteriorWalls: {
            propagate: string[];
            deprecated: {
                message: string;
                since: number;
                until: number;
            };
            alias: boolean;
        };
        /** @deprecated since v13 */
        initializeDarknessSources: {
            propagate: string[];
            deprecated: {
                message: string;
                since: number;
                until: number;
            };
        };
    };
    static #deprecatedFlags: string[];
    /**
     * Update perception manager flags which configure which behaviors occur on the next frame render.
     * @param {object} flags        Flag values (true) to assign where the keys belong to PerceptionManager.FLAGS
     */
    update(flags: object): void;
    /**
     * A helper function to perform an immediate initialization plus incremental refresh.
     */
    initialize(): void;
    /**
     * @deprecated since v12
     * @ignore
     */
    refresh(): void;
}
export {};
