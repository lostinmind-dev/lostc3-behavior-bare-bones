class LostEditorType extends SDK.IBehaviorTypeBase {
	constructor(sdkBehavior: SDK.IBehaviorBase, iBehaviorType: SDK.IBehaviorType) {
		super(sdkBehavior, iBehaviorType);
	}
};

/** Important to save export type for Typescript compiler */
export type { LostEditorType as EditorType };
