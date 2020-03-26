const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const org_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('org_id', org_id)
            .select('*');

        return response.json(incidents);
    }
}