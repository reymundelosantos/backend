const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./src/routes')
const { httpLogger, logger } = require('./lib/logger')
const cors = require('cors')

// Get Chuck Norris joke categories
app.use(cors());
app.use(httpLogger)
app.use('/api', routes)


app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || 'Internal Server Error';

  res.status(statusCode).json({ error: errorMessage, stack: err?.stack });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
