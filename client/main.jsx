import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '/imports/ui/App'
// import FileUpload from '/imports/ui/FileUpload'

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});

//Meteor.startup(() => {
//  render(<FileUpload />, document.getElementById('react-target'));
//});
