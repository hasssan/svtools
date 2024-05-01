export interface Player {
	name: string;
	farmName: string;
}

export function getPlayer(saveGame: Record<string, unknown>): Player {
	if (!saveGame) {
		throw new Error('Invalid save data');
	}

	if (typeof saveGame.player !== 'object' || !saveGame.player) {
		throw new Error('Invalid player data');
	}
	const parsedPlayer = saveGame.player as Player;

	const player: Player = {
		name: parsedPlayer.name,
		farmName: parsedPlayer.farmName
	};

	return player;
}
