const fs = require('fs').promises;
const getDb = require('../../../DB/index');
const db = getDb();

async function createJsonFiles() {
    try {
        // Create the directory
        await fs.mkdir('./docs/static/db', { recursive: true });
        
        // Write each JSON file
        for (let [key, value] of Object.entries(db)) {
            await fs.writeFile(`./docs/static/db/${key}.json`, JSON.stringify(value));
        }

        console.log('All files created successfully!');
    } catch (err) {
        console.error('Error:', err);
    }
}

createJsonFiles();