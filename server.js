const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./src/routes')

// Get Chuck Norris joke categories
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
