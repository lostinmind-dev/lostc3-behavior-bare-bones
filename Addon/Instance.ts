
const C3 = globalThis.C3;

class LostBehaviorInstance extends globalThis.ISDKBehaviorInstanceBase<IWorldInstance> {

	readonly PluginConditions = C3.Plugins[Config.AddonId].Cnds;
	constructor() {
		super();
		const properties = this._getInitProperties();

        if (properties) {

        }

		// Opt-in to getting calls to _tick()
		//this._setTicking(true);
	}

	_release() {
		super._release();
	}

	_tick()
	{
		const dt = this.instance.dt;
		
		// ... code to run every tick for this behavior ...
	}
	
};

C3.Behaviors[Config.AddonId].Instance = LostBehaviorInstance;
export type { LostBehaviorInstance as Instance };