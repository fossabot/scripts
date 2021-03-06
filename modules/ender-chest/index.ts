import { EnderTable } from './enderTable';
import * as fs from 'fs';
let tables: any = {};

export function initialize() {
    if (!fs.exists('./ender/')) {
        fs.mkdirSync('./ender/');
    }
}

export function getTable(name: string): EnderTable {
    if (!tables[name]) {
        tables[name] = new EnderTable(name);
    }
    return tables[name];
}

export function deleteTable(name: string) {
    fs.rmdirSync('./ender/' + name);
}