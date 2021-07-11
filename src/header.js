const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

if (event.httpMethod !== "POST") {
  // To enable CORS
  return {
    statusCode: 200, // <-- Important!
    headers,
    body: "This was not a POST request!",
  };
}
