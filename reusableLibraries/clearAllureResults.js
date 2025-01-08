const fs = require('fs');
const path = require('path');

module.exports = {
    clearFolder: function(folderPath) {
        if (fs.existsSync(folderPath)) {
            fs.readdirSync(folderPath).forEach(file => {
                const filePath = path.join(folderPath, file);
                if (fs.lstatSync(filePath).isDirectory()) {
                // Recursively remove subdirectories
                clearFolder(filePath);
                fs.rmdirSync(filePath);
                } else {
                // Remove files
                fs.unlinkSync(filePath);
                }
            });
            console.log(`${folderPath} has been cleared.`);
        } else {
            console.log(`${folderPath} does not exist.`);
        }
    }
};