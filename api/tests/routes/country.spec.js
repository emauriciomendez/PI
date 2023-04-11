/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id:'ggg',
  name: 'Argentina2',
  area:'suramerica',
  population:10000
};
const activity={
  id:501,
  name:'cometas',
  difficulty:3,
  duration: 4,
  season: 'Verano'
}
describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  // beforeEach(() => Country.sync({ alter: true })
  //   .then(() => Country.create(country)));
  // beforeEach(
  //   () => Country.sync({ alter: true })
  //   .then(() => Country.create(country))
  //   .then(() => Activity.sync({ alter: true }))
  //   .then(() => Activity.create(activity))
  //   );
 
 afterAll(()=>console.log('after all'))
  describe('GET /countries', () => {

    it('should get 200', () =>
      agent.get('/').expect(200)
    );
  
   it('should get 200 en countries', () =>
    agent.get('/countries').expect(200)
  );
  });



  describe('get/activities',()=>{
    it('should get 200 en activities', ()=> agent.get('/activities').expect(200)); 
  });
});
