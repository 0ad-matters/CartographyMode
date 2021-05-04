GameDescription.prototype.registerWatchers = function ()
{
	let update = () => this.updateGameDescription();
	g_GameSettings.biome.watch(update, ["biome"]);
	g_GameSettings.ceasefire.watch(update, ["value"]);
	g_GameSettings.cheats.watch(update, ["enabled"]);
	g_GameSettings.disableTreasures.watch(update, ["enabled"]);
	g_GameSettings.lastManStanding.watch(update, ["enabled"]);
	g_GameSettings.lockedTeams.watch(update, ["enabled"]);
	g_GameSettings.map.watch(update, ["map", "type"]);
	g_GameSettings.mapExploration.watch(update, ["explored"]);
	g_GameSettings.mapExploration.watch(update, ["allied"]);
	g_GameSettings.mapExploration.watch(update, ["revealed"]);
	g_GameSettings.nomad.watch(update, ["enabled"]);
	g_GameSettings.population.watch(update, ["perPlayer", "cap", "useWorldPop"]);
	g_GameSettings.rating.watch(update, ["enabled"]);
	g_GameSettings.regicideGarrison.watch(update, ["enabled"]);
	g_GameSettings.relic.watch(update, ["count", "duration"]);
	g_GameSettings.startingResources.watch(update, ["perPlayer", "resources"]);
	g_GameSettings.triggerDifficulty.watch(update, ["value"]);
	g_GameSettings.victoryConditions.watch(update, ["active"]);
	g_GameSettings.wonder.watch(update, ["duration"]);
};
