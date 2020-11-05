import firebase from 'firebase/app';
import 'firebase/database';

import * as serviceAccount from './firebase-ecommerce.json';

const params = {
    apiKey: serviceAccount.apiKey,
    authDomain: serviceAccount.authDomain,
    databaseURL: serviceAccount.databaseURL,
    projectId: serviceAccount.projectId,
    storageBucket: serviceAccount.storageBucket,
    messagingSenderId: serviceAccount.messagingSenderId,
    appId: serviceAccount.appId,
    measurementId: serviceAccount.measurementId
};

firebase.initializeApp(params);

const databaseRef = firebase.database().ref();
export const productsRef = databaseRef.child("products");