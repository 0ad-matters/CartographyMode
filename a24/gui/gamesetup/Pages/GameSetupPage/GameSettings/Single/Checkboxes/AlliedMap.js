GameSettingControls.AlliedMap = class extends GameSettingControlCheckbox
{
	onMapChange(mapData)
	{
		let mapValue;
		if (mapData &&
			mapData.settings &&
			mapData.settings.AllyMap !== undefined)
			mapValue = mapData.settings.AllyMap;

		if (mapValue !== undefined && mapValue != g_GameAttributes.settings.AllyMap)
		{
			g_GameAttributes.settings.AllyMap = mapValue;
			this.gameSettingsControl.updateGameAttributes();
		}
	}

	onGameAttributesChange()
	{
		if (!g_GameAttributes.mapType)
			return;

		if (g_GameAttributes.settings.AllyMap === undefined)
		{
			g_GameAttributes.settings.AllyMap = !!g_GameAttributes.settings.RevealMap;
			this.gameSettingsControl.updateGameAttributes();
		}
		else if (g_GameAttributes.settings.RevealMap &&
		    !g_GameAttributes.settings.AllyMap)
		{
			g_GameAttributes.settings.AllyMap = true;
			this.gameSettingsControl.updateGameAttributes();
		}
	}

	onGameAttributesBatchChange()
	{
		if (!g_GameAttributes.mapType)
			return;

		this.setChecked(g_GameAttributes.settings.AllyMap);
		this.setEnabled(g_GameAttributes.mapType != "scenario" && !g_GameAttributes.settings.RevealMap);
	}

	onPress(checked)
	{
		g_GameAttributes.settings.AllyMap = checked;
		this.gameSettingsControl.updateGameAttributes();
		this.gameSettingsControl.setNetworkGameAttributes();
	}
};

GameSettingControls.AlliedMap.prototype.TitleCaption =
	translate("Allied Map");

GameSettingControls.AlliedMap.prototype.Tooltip =
	translate("Toggle allied map (see what your allies see).");
