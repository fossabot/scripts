import * as guid from 'guid';

export default class Scoreboard {
    private _sb;
    private _obj;
    private _id;
    private _name;
    private _scores = {};

    constructor(name: string) {
        this._sb = Bukkit.getScoreboardManager().getNewScoreboard();
        this._id = guid().toString().substring(0, 16);
        this._name = name;
        this._obj = this._sb.registerNewObjective(this._id, name);
        this._obj.setDisplaySlot(org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
        this._obj.setDisplayName(name);
    }

    addEntry(name: string, value, id): Scoreboard {
        var score = this._obj.getScore(name);
        score.setScore(value);
        this._scores[id.toString()] = { name: name, value: value, id: id, score: score };
        return score;
    }

    setEntry(id, value: number, text?: string) {
        var entry = this._scores[id.toString()];
        entry.value = value;
        entry.name = text || entry.name;
        this.updateEntries();
    }

    removeEntry(id) {
        this._scores[id.toString()] = undefined;
        this.updateEntries();
    }

    private updateEntries() {
        this._obj.unregister();
        this._obj = this._sb.registerNewObjective(this._id, this._name);
        this._obj.setDisplaySlot(org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
        this._obj.setDisplayName(this._name);
        for (let entry in this._scores) {
            let e = this._scores[entry];
            if (!e) continue;
            if (!e.name || e.name.length == 0) continue;
            let score = this._obj.getScore(e.name);
            score.setScore(e.value);
        }
    }

    send(player) {
        if (!player.setScoreboard) return; // this typically happens if the player isn't fully logged in.
        player.setScoreboard(this._sb);
    }

    destroy() {
        this._sb.clearSlot(org.bukkit.scoreboard.DisplaySlot.SIDEBAR);
    }
}