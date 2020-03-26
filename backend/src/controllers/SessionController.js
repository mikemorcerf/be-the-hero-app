const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const org = await connection('orgs')
            .where('id', id)
            .select('name')
            .first();

        if(!org) {
            return response.status(400).json({ error: 'No ORG found with this ID'});
        }

        return response.json(org);
    }
}