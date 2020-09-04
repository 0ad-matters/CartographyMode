g_SettingsTabsGUI[0]["settings"].push("allyMap");

Object.assign(g_Checkboxes, { "allyMap": {
	"title": () =>
		// Translation: Make sure to differentiate between the revealed map and explored map settings!
		translate("Ally Map"),
	"tooltip":
		// Translation: Make sure to differentiate between the revealed map and explored map settings!
		() => translate("Toggle allied map (see everything you + allies can see)."),
	"default": () => false,
	"defined": () => g_GameAttributes.settings.AllyMap !== undefined,
	"get": () => g_GameAttributes.settings.AllyMap,
	"set": checked => {
		g_GameAttributes.settings.AllyMap = checked;

		// if (checked)
		// 	g_Checkboxes.exploreMap.set(true);
	},
	"enabled": () => g_GameAttributes.mapType != "scenario" && !g_GameAttributes.settings.RevealMap,
	"initOrder": 1000
}});