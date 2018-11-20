import * as shell from 'shelljs';

shell.cp('-R', '.env.example', 'dist/');
shell.cp('-R', '.env', 'dist/');
