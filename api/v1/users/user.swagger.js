module.exports = {
  paths: {
    "/users": {
      get: {
        tags: ["Users"],
        summary: "List All Users.",
        parameters: [
          {
            name: "x-authorization",
            in: "header",
            required: false,
            type: "string"
          },
          {
            name: "skip",
            in: "query",
            description: "Records to skip",
            type: "integer",
            default: 0
          },
          {
            name: "limit",
            in: "query",
            description: "Records to limit",
            type: "integer",
            default: 20
          },
          {
            name: "sort_key",
            in: "query",
            description: "Key to sort",
            type: "string",
            items: {
              type: "string",
              enum: ["updated_at", "created_at"]
            },
            default: "created_at"
          },
          {
            name: "sort_order",
            in: "query",
            description: "Order to sort",
            type: "string",
            items: {
              type: "string",
              enum: ["ASC", "DESC"]
            },
            default: "DESC"
          },
          {
            name: "search",
            in: "query",
            description: "Search Keyword",
            type: "string"
          }
        ],
        responses: {
          "200": {
            description: "OK"
          }
        }
      }
    }
  },
  definitions: {

  }
};
