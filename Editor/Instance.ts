class LostEditorInstance extends SDK.IBehaviorInstanceBase {
	constructor(sdkBehType: SDK.IBehaviorTypeBase, behInst: SDK.IBehaviorInstance) {
		super(sdkBehType, behInst);
	}
	
	Release() {

	}
	
	OnCreate() {

	}
	
	OnPropertyChanged(id: string, value: EditorPropertyValueType) {

	}
	
	LoadC2Property(name: string, valueString: string) {
		return false;		// not handled
	}
};

/** Important to save export type for Typescript compiler */
export type { LostEditorInstance as EditorInstance };