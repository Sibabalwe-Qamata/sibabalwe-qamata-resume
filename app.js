// Copyright 2018, Google LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const express = require('express');

const app = express();
const path = require('path');
const router = express.Router();

// [START hello_world]
// Say hello!
var htmlPath = path.join(__dirname, 'client');

app.use(express.static(htmlPath));
// app.use(express.static(__dirname + '/index'));
// app.get('/', (req, res) => {
//   // res.status(200).send('Sibabalwe Qamata Resume!');
//   res.status(200).sendFile(path.join(__dirname+'/index.html'));

// });
// router.get('/css', (req, res) => {
//   // res.status(200).send('Sibabalwe Qamata Resume!');
//   res.status(200).sendFile(path.join(__dirname+'/assets/css/main.css'));

// });

// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8182, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
