GameSettingControls.AlliedMap = class AlliedMap extends GameSettingControlCheckbox
{
	constructor(...args)
	{
		super(...args);
		g_GameSettings.mapExploration.watch(() => this.render(), ["allied"]);
		g_GameSettings.map.watch(() => this.render(), ["type"]);
		this.render();
	}

	render()
	{
		this.setEnabled(g_GameSettings.map.type != "scenario");
		this.setChecked(g_GameSettings.mapExploration.allied);
	}

	onPress(checked)
	{
		g_GameSettings.mapExploration.setAllied(checked);
		this.gameSettingsController.setNetworkInitAttributes();
	}
};

GameSettingControls.AlliedMap.prototype.TitleCaption =
	// Translation: Make sure to differentiate between the revealed map and  settings!
	translate("Allied Map");

GameSettingControls.AlliedMap.prototype.Tooltip =
	// Translation: Make sure to differentiate between the revealed map and  settings!
	translate("Toggle allied map (see what your allies see).");
