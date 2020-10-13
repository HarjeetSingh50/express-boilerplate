/**
 * This file holds all the configuration of app and database for all the servers, based on their environment
 */

module.exports = {
  /**
   * Common configuration for all the environments
   */
  commonConfig: {

  },
  /**
   *
   * Configuration for local server
   */
  local: {
    host: 'localhost',
    port: 5000,
    protocol: "http"
  },
  /**
   *
   * Configuration for staging server
   */
  staging: {
    host: '127.0.0.1',
    port: 5000,
    protocol: "http"
  }
};


