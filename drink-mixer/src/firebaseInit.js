import firebase from 'firebase';

const firebaseInit = () => {

    const drinksRef = firebase.database().ref('drinks');

    let dbDrinks = {};

    drinksRef.on('value', (snapshot) => {
        dbDrinks = snapshot.val();
    });
    const temp = [];

    for(const [key, value] of Object.entries(dbDrinks)) {
    temp.push({value})
} 

    return temp;
}

export default firebaseInit;