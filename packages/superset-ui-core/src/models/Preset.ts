import Plugin from './Plugin';

export interface PresetConfig {
  name?: string;
  description?: string;
  presets?: Preset[];
  plugins?: Plugin[];
}

export default class Preset {
  name: string;
  description: string;
  presets: Preset[];
  plugins: Plugin[];

  constructor(config: PresetConfig = {}) {
    const { name = '', description = '', presets = [], plugins = [] } = config;
    this.name = name;
    this.description = description;
    this.presets = presets;
    this.plugins = plugins;
  }

  register() {
    this.presets.forEach(preset => {
      preset.register();
    });
    this.plugins.forEach(plugin => {
      plugin.register();
    });

    return this;
  }
}
