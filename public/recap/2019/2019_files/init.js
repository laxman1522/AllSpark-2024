if (typeof firebase === 'undefined')
  throw new Error(
    'hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js',
  );
firebase.initializeApp({
  apiKey: 'AIzaSyDDnRrrMyVWpeEZpw5JCrWHcC96KOwroao',
  authDomain: 'allspark2018-800e5.firebaseapp.com',
  databaseURL: 'https://allspark2018-800e5.firebaseio.com',
  messagingSenderId: '748636759891',
  projectId: 'allspark2018-800e5',
  storageBucket: 'allspark2018-800e5.appspot.com',
});
