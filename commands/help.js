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

function help()
{
    console.log(`--- LDK / Launcher development kit v${require('../package').version} ---
    ldk new [path]
        Génère un nouveau projet de launcher au chemin donné (par défaut .) 
    ldk build [path]
        Génère un dossier files/ contenant le launcher assemblé et minimifié, avec un script updater.php, à mettre sur un hébérgement
    ldk run
        Lance le launcher en mode debug
    ldk bootstrap <windows/mac/linux> [path]
        Génère un bootstrap du launcher pour l'OS choisi à l'emplacement choisi (par défaut ./dist/bootstrap)
    ldk help
        Affiche la liste des commandes et leur description`);
}

module.exports = help;