/// <binding AfterBuild='default, sass, pack_components' Clean='clean, clean_css, destroy_webpack_bundle' ProjectOpened='watch, sass, pack_components' />
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./Gulp/tasks', { recurse: true });