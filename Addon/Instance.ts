class LostBehaviorInstance extends globalThis.ISDKBehaviorInstanceBase<IWorldInstance> {

	/** Use this for triggering plugin conditions */
	readonly Conditions = C3.Behaviors[Lost.addonId].Cnds;

	constructor() {
		super();
		/**
		 * Use auto-created declaration file for your plugin properties after build
		 * @type {PluginProperties}
		 */
		const properties = this._getInitProperties() as PluginProperties;


		// Opt-in to getting calls to _tick()
		//this._setTicking(true);
	}

	_release() {
		super._release();
	}

	_tick() {
		const dt = this.instance.dt;
		
		// ... code to run every tick for this behavior ...
	}
	
};

/** Important to save export type for Typescript compiler */
export type { LostBehaviorInstance as Instance };