import loadHeader from '../header-component.js';
import { auth, favoritesByUserRef } from '../firebase.js';
import { convertObjToArr } from '../convert-obj-to-array.js';
import updateRecipes from '../meal-card-components.js';
loadHeader();

auth.onAuthStateChanged(user => {
    const userID = user.uid;
    const userFavoritesByRef = favoritesByUserRef.child(userID);
    userFavoritesByRef.on('value', snapshot => {
        const value = snapshot.val();
        const meals = convertObjToArr(value);
        updateRecipes(meals);
    });
});

