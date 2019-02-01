var filewatcher = require('filewatcher');

var watcher = filewatcher();

// watch a file
watcher.add(__filename);

// ... or a directory
watcher.add(__dirname);

watcher.on('change', function(file, stat) {
    console.log('File modified: %s', file);
    if (!stat) console.log('deleted');
});