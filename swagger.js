const userSwagger = require("./api/v1/users/user.swagger"),
  config = require('./config'),
  env = require('./env'),
  host = config[env.instance].host,
  port = config[env.instance].port,
  protocol = config[env.instance].protocol;

module.exports = () => {
  return {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "Express Server API",
      description: "Express Server API documentation.",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT"
      }
    },
    host: `${host}:${port}`,
    basePath: "/api/v1",
    tags: [{
      name: "Users",
      description: "API for users in the system"
    }],
    schemes: [protocol],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      ...userSwagger.paths
    },
    definitions: {
      ...userSwagger.definitions
    }
  };
};
