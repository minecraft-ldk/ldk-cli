/*
 *  The LDK - Launcher development kit
 *  Copyright (C) 2017 Adrien 'Litarvan' Navratil
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

let argv = process.argv;

let label = 'help';
let args = [];

if (argv.length > 2)
{
    label = argv[2];
    args = argv.slice(3);
}

let command = require('./commands')[label];

if (!command)
{
    console.error(`Unknown command '${label}'`);
    process.exit(1);
}

command(args);
