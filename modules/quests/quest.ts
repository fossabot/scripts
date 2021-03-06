import { QuestReward } from './rewards';
import { QuestObjective } from './objective';
import { QuestType } from './quest-actions';

export class Quest {
    name: string;
    objectives: QuestObjective[] = [];
    reward: QuestReward;
    npcSpeechStart: string[] = [];
    npcSpeechFinish: string[] = [];
    endsOnPlayerDeath: boolean = false;
    statuses: {};
    showScoreboard: boolean = true;

    constructor(name: string) {
        this.name = name;
    }

    setReward(reward: QuestReward) {
        this.reward = reward;
    }

    break(target, count, location = null) {
        var obj = new QuestObjective(QuestType.BREAK, target, this.objectives.length, count);
        this.objectives.push(obj);
        return this;
    }

    place(target, count, location = null) {
        var obj = new QuestObjective(QuestType.PLACE, target, this.objectives.length, count, location);
        this.objectives.push(obj);
        return this;
    }

    craft(target, count) {
        var obj = new QuestObjective(QuestType.CRAFT, target, this.objectives.length, count);
        this.objectives.push(obj);
        return this;
    }
    
    fish(count) {
        var obj = new QuestObjective(QuestType.FISH, null, this.objectives.length, count);
        this.objectives.push(obj);
        return this;
    }

    kill(target, count) {
        var obj = new QuestObjective(QuestType.KILL, target, this.objectives.length, count);
        this.objectives.push(obj);
        return this;
    }

    breed(target, count) {
        var obj = new QuestObjective(QuestType.BREED, target, this.objectives.length, count);
        this.objectives.push(obj);
        return this;
    }

    collect(target, count) {
        var obj = new QuestObjective(QuestType.COLLECT, target, this.objectives.length, count);
        this.objectives.push(obj);
        return this;
    }

    smelt(target, count) {
        var obj = new QuestObjective(QuestType.SMELT, target, this.objectives.length, count);
        this.objectives.push(obj);
        return this;
    }

    locate(target, count = 1) {
        var obj = new QuestObjective(QuestType.LOCATE, target, this.objectives.length, count);
        this.objectives.push(obj);
        return this;
    }
}