exports.handler = async (event) => {
  const { c, f } = event.queryStringParameters;

  if (c) {
    const fahrenheit = (c * 1.8) + 32;
    return {
      statusCode: 200,
      body: `${fahrenheit}`
    };
  } else if (f) {
    const celsius = (f - 32) / 1.8;
    return {
      statusCode: 200,
      body: `${celsius}`
    };
  } else {
    return {
      statusCode: 400,
      body: "Missing query parameter: c or f"
    };
  }
};
        
        