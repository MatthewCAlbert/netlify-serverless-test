exports.handler = async (event, context) => {
  if (event.httpMethod == "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World" }),
    };
  }
};
