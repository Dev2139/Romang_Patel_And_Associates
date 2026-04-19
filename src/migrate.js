import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import dotenv from 'dotenv';

// Load env variables from .env
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Migration failed: Missing Supabase URL or Anon Key in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const migrate = async () => {
    try {
        const rawData = fs.readFileSync('./public/projects.json', 'utf8');
        const projects = JSON.parse(rawData);

        console.log(`Found ${projects.length} projects to migrate.`);

        // Remove ID to let Supabase handle auto-increment or UUID
        const projectsToInsert = projects.map(({ id, ...rest }) => rest);

        const { data, error } = await supabase
            .from('projects')
            .insert(projectsToInsert);

        if (error) {
            console.error('Error during migration:', error);
        } else {
            console.log('Migration successful!');
        }
    } catch (err) {
        console.error('Migration failed:', err.message);
    }
};

migrate();
