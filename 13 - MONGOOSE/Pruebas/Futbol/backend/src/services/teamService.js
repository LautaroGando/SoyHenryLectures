const Team = require("../models/Team");

module.exports = {
    getAllTeams: async () => {

        const teams = Team.find();

        return teams;

    },
};