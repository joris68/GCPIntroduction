const request = require('supertest');
const myHttpFunction = require('./index');

describe('myHttpFunction', () => {
  it('responds to GET', async () => {
    const res = await request(myHttpFunction)
      .get('/')
      .expect(200);
    expect(res.text).toEqual("Hello World from GCP!");
  });

  it('responds to POST', async () => {
    const res = await request(myHttpFunction)
      .post('/')
      .send({message: "MAKE LOVE"})
      .expect(200);
    expect(res.text).toEqual("NOT WAR");
  });

  it('handles other methods', async () => {
    const res = await request(myHttpFunction)
      .delete('/')
      .expect(200);
    expect(res.text).toEqual("WEIRD REQUEST BRO");
  });
});
