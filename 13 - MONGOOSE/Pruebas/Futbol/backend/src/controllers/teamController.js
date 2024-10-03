const teamService = require("../services/teamService");

module.exports = {
    getAllTeams: async (req, res) => {
      
        const teams = await teamService.getAllTeams();

        try {

            res.status(200).json(teams);
            
        } catch (error) {
          
            res.status(500).json({
                error: "Error en el servidor.",
            });

        };

    },
};