const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Organization', () => {
    let newOrgResponse;
    let newIncidentResponse;

    beforeAll( async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('should be able to create a new Organization', async () => {
        const responseCreateOrg = await request(app)
            .post('/orgs')
            .send({
                name : "Test Organization",
                email : "test@org.com",
                phone : "3333333333",
                city : "Orgville",
                state : "AA",
                website : "www.test.org",
        });

        expect(responseCreateOrg.body).toHaveProperty('id');
        expect(responseCreateOrg.body.id).toHaveLength(8);

        newOrgResponse = responseCreateOrg;
    }),
    
    it('should let Organizations Login and generate a session', async () => {
        const responseCreateSession = await request(app)
            .post('/sessions')
            .send({
                id : newOrgResponse.body.id,
            });

            expect(responseCreateSession.body).toHaveProperty('name');
            expect(responseCreateSession.name).toBe(newOrgResponse.body.name);
    }),

    it('should allow organizations to create a new incident', async () => {
        const responseCreateIncident = await request(app)
            .post('/incidents')
            .send({
                title : "Test Org Incident",
                description : "This is the description of a test incident created by Test Organization",
                value : "12345.67"
            })
            .set('Authorization', newOrgResponse.body.id);

            expect(responseCreateIncident.body).toHaveProperty('id');
            newIncidentResponse = responseCreateIncident;
    }),
    
    it('should let organizations delete incidents they created', async () => {
        await request(app)
            .delete(`/incidents/${newIncidentResponse.body.id}`)
            .set('Authorization', newOrgResponse.body.id)
            .expect(204);
    });
});