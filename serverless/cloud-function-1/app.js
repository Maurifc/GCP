const functions = require('@google-cloud/functions-framework');

functions.http('entrypoint', (req, res) => {
  res.json({function: "#1"});
});