import * as File from '@java.io.File';
import * as fs from 'fs';
import * as path from 'path';
import * as async from 'async';
import * as _ from 'underscore';

const watchedFiles: WatchedFile[] = [];

class WatchedFile {
    filename: string;
    lastModified: string;
    isDir: boolean;

    constructor(filename: string, lm: string, dir: boolean) {
        this.filename = filename;
        this.lastModified = lm;
        this.isDir = dir;
    }
}

export function watchFile(file: string) {
    if (_.any(watchedFiles, { filename: file.toLowerCase() })) return;
    var f = new File(file.toLowerCase());
    if (!f.exists()) return;
    watchedFiles.push(new WatchedFile(file.toLowerCase(), f.lastModified(), false));
}

export function watchDir(dir: string) {

}

export function beginWatch() {
    setInterval(() => {

    }, 1000);
}