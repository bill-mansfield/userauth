import firebase from './firebase';
import Papa from 'papaparse';

function writeJsonString(json) {
    firebase.database().ref('jsonString/').set({
      jsonString: json
    });
  }

  Papa.parse(file, {
    complete: function(results) {
      writeJsonString(JSON.stringify(results));
      console.log(results);
    }
  });