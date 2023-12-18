const express = require('express');

const admins = require('./routes/admin');

app.use('/api/admins',admins);