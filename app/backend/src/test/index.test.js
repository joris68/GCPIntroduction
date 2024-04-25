'use strict';

const sinon = require('sinon');
const assert = require('assert');
const myHttpFunction = require('../index');

const getMocks = () => {
  const req = {
    method: '',
    body: {},
    get: function (header) {
      return this.headers[header];
    },
  };

  return {
    req: req,
    res: {
      send: sinon.stub().returnsThis(),
      status: sinon.stub().returnsThis(),
    },
  };
};

describe('myHttpFunction Tests', () => {
  let mocks;

  beforeEach(() => {
    mocks = getMocks();
  });

  it('should return "Hello World from GCP!" for GET requests', () => {
    mocks.req.method = 'GET';
    myHttpFunction(mocks.req, mocks.res);

    assert(mocks.res.status.calledWith(200));
    assert(mocks.res.send.calledWith('Hello World from GCP!'));
  });

  it('should return "NOT WAR" for POST requests with message "MAKE LOVE"', () => {
    mocks.req.method = 'POST';
    mocks.req.body = { message: "MAKE LOVE" };
    myHttpFunction(mocks.req, mocks.res);

    assert(mocks.res.status.calledWith(200));
    assert(mocks.res.send.calledWith('NOT WAR'));
  });

  it('should return "WHAT DO YOU WANT?" for POST requests with any other message', () => {
    mocks.req.method = 'POST';
    mocks.req.body = { message: "HELLO" };
    myHttpFunction(mocks.req, mocks.res);

    assert(mocks.res.status.calledWith(200));
    assert(mocks.res.send.calledWith('WHAT DO YOU WANT?'));
  });
});
