"use strict";
const View = require('./view');
const { Model, client } = require('./model');
var TablesDB;
(function (TablesDB) {
    const readLineSync = require('readline-sync');
    const tables = ['Genre', 'Anime', 'User', 'Passport', 'Review', 'User_Passport', 'Watched'];
    let currentTable = '';
    class Controller {
        static start() {
            console.log('Type home to start');
            readLineSync.promptCLLoop({
                home: () => {
                    currentTable = '';
                    View.mainMenu();
                },
                table: (tname) => {
                    if (tables.find(item => item === tname)) {
                        currentTable = tname;
                        View.actionWithTable(currentTable);
                    }
                    else {
                        console.log(`There is no ${tname} table`);
                    }
                },
                generate: async () => {
                    await Model.generateRows();
                },
                search: async (typeOfSearch) => {
                    if (typeOfSearch === 'static') {
                        View.staticSearchMenu();
                        let ans = readLineSync.question('Choose from list: ');
                        switch (+ans) {
                            case 1: {
                                Model.staticConfirmed();
                                break;
                            }
                            case 2: {
                                Model.staticBorn();
                                break;
                            }
                            case 3: {
                                Model.mostPopularAnime();
                                break;
                            }
                            default: {
                                break;
                            }
                        }
                    }
                    else if (typeOfSearch === 'dynamic') {
                        View.dynamicSearchMenu();
                        let ans = readLineSync.question('Choose from list: ');
                        switch (+ans) {
                            case 1: {
                                Model.specDateReg();
                                break;
                            }
                            case 2: {
                                Model.specGenreAnime();
                                break;
                            }
                            case 3: {
                                Model.specSeriesAnime();
                                break;
                            }
                            default: {
                                break;
                            }
                        }
                    }
                },
                add: async () => {
                    if (currentTable) {
                        switch (currentTable.toLowerCase()) {
                            case 'anime': {
                                const newRow = Model.prepareDataAnime();
                                Model.addDataAnime(newRow);
                                currentTable = '';
                                break;
                            }
                            case 'genre': {
                                const newRow = Model.prepareDataGenre();
                                Model.addDataGenre(newRow);
                                currentTable = '';
                                break;
                            }
                            case 'passport': {
                                const newRow = Model.prepareDataPassport();
                                Model.addDataPassport(newRow);
                                currentTable = '';
                                break;
                            }
                            case 'review': {
                                const newRow = Model.prepareDataReview();
                                Model.addDataReview(newRow);
                                currentTable = '';
                                break;
                            }
                            case 'user': {
                                const newRow = Model.prepareDataUser();
                                Model.addDataUser(newRow);
                                currentTable = '';
                                break;
                            }
                            case 'user_passport': {
                                const newRow = Model.prepareDataUserPassport();
                                Model.addDataUserPassport(newRow);
                                currentTable = '';
                                break;
                            }
                            case 'watched': {
                                const newRow = Model.prepareDataWatched();
                                Model.addDataWatched(newRow);
                                currentTable = '';
                                break;
                            }
                        }
                    }
                    else {
                        console.log('No table selected');
                        return true;
                    }
                },
                edit: async () => {
                    if (currentTable) {
                        switch (currentTable.toLowerCase()) {
                            case 'anime': {
                                Model.editDataAnime();
                                currentTable = '';
                                break;
                            }
                            case 'genre': {
                                Model.editDataGenre();
                                currentTable = '';
                                break;
                            }
                            case 'passport': {
                                Model.editDataPassport();
                                currentTable = '';
                                break;
                            }
                            case 'review': {
                                Model.editDataReview();
                                currentTable = '';
                                break;
                            }
                            case 'user': {
                                Model.editDataUser();
                                currentTable = '';
                                break;
                            }
                            case 'user_passport': {
                                Model.editDataUserPassport();
                                currentTable = '';
                                break;
                            }
                            case 'watched': {
                                Model.editDataWatched();
                                currentTable = '';
                                break;
                            }
                        }
                    }
                    else {
                        console.log('No table selected');
                        return true;
                    }
                },
                remove: async () => {
                    if (currentTable) {
                        switch (currentTable.toLowerCase()) {
                            case 'anime': {
                                Model.deleteDataAnime();
                                currentTable = '';
                                break;
                            }
                            case 'genre': {
                                Model.deleteDataGenre();
                                currentTable = '';
                                break;
                            }
                            case 'passport': {
                                Model.deleteDataPassport();
                                currentTable = '';
                                break;
                            }
                            case 'review': {
                                Model.deleteDataReview();
                                currentTable = '';
                                break;
                            }
                            case 'user': {
                                Model.deleteDataUser();
                                currentTable = '';
                                break;
                            }
                            case 'user_passport': {
                                Model.deleteDataUserPassport();
                                currentTable = '';
                                break;
                            }
                            case 'watched': {
                                Model.deleteDataWatched();
                                currentTable = '';
                                break;
                            }
                        }
                    }
                    else {
                        console.log('No table selected');
                        return true;
                    }
                },
                show: async () => {
                    if (currentTable) {
                        switch (currentTable.toLowerCase()) {
                            case 'anime': {
                                Model.showDataAnime();
                                currentTable = '';
                                break;
                            }
                            case 'genre': {
                                Model.showDataGenre();
                                currentTable = '';
                                break;
                            }
                            case 'passport': {
                                Model.showDataPassport();
                                currentTable = '';
                                break;
                            }
                            case 'review': {
                                Model.showDataReview();
                                currentTable = '';
                                break;
                            }
                            case 'user': {
                                Model.showDataUser();
                                currentTable = '';
                                break;
                            }
                            case 'user_passport': {
                                Model.showDataUserPassport();
                                currentTable = '';
                                break;
                            }
                            case 'watched': {
                                Model.showDataWatched();
                                currentTable = '';
                                break;
                            }
                        }
                    }
                    else {
                        console.log('No table selected');
                        return true;
                    }
                },
                q: () => {
                    return true;
                }
            });
        }
    }
    module.exports = Controller;
})(TablesDB || (TablesDB = {}));
