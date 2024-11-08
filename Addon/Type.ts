
import type { Instance } from "./Instance.ts";

const C3 = globalThis.C3;

C3.Behaviors[Config.AddonId].Type = class LostBehaviorType extends globalThis.ISDKBehaviorTypeBase<Instance> {
	constructor() {
		super();
	}
	
	_onCreate() {}
};