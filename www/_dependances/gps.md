### 🔥 **1. Installer le plugin GPS (Geolocation)**
Exécute cette commande dans le terminal à la racine de ton projet Cordova :

```bash
cordova plugin add cordova-plugin-geolocation
```

👉 **Explications** :
- Cette commande installe le plugin de géolocalisation.
- Ce plugin permet d'accéder aux informations GPS du téléphone, comme la latitude, la longitude, l'altitude, la vitesse, etc.

---

### 🔥 **2. Vérifie que le plugin est bien installé**
Pour t'assurer que le plugin a bien été ajouté, exécute la commande suivante :

```bash
cordova plugin ls
```

Tu devrais voir apparaître quelque chose comme ça dans la liste des plugins installés :

```
cordova-plugin-geolocation 4.1.0 "Geolocation"
```

---

### 🔥 **3. Utilisation du GPS dans le code JavaScript**
Voici un exemple simple d'utilisation pour récupérer la position actuelle de l'utilisateur.

```javascript
document.addEventListener("deviceready", function () {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

function onSuccess(position) {
    console.log('Latitude : ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
    console.log('Altitude : ' + position.coords.altitude);
    console.log('Accuracy : ' + position.coords.accuracy);
    console.log('Altitude Accuracy: ' + position.coords.altitudeAccuracy);
    console.log('Heading : ' + position.coords.heading);
    console.log('Speed : ' + position.coords.speed);
    console.log('Timestamp : ' + position.timestamp);
}

function onError(error) {
    console.error('code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n');
}
```

👉 **Explications** :
1. **`navigator.geolocation.getCurrentPosition()`** : Récupère la position GPS actuelle.
2. **`onSuccess`** : Fonction appelée si la position est récupérée avec succès.
3. **`onError`** : Fonction appelée si une erreur se produit (permissions refusées, signal GPS perdu, etc.).

---

### 🔥 **4. Surveiller la position GPS en temps réel**
Si tu veux suivre la position GPS en temps réel (comme dans Pokémon GO ou ton projet de **Dragon Ball Radar**), utilise **`watchPosition`** au lieu de **`getCurrentPosition`**.

```javascript
let watchID;

document.addEventListener("deviceready", function () {
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
        maximumAge: 0,
        timeout: 10000,
        enableHighAccuracy: true
    });
});

function onSuccess(position) {
    console.log('Latitude : ' + position.coords.latitude);
    console.log('Longitude: ' + position.coords.longitude);
}

function onError(error) {
    console.error('code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n');
}

// Pour arrêter de surveiller la position GPS
function stopWatching() {
    if (watchID) {
        navigator.geolocation.clearWatch(watchID);
    }
}
```

👉 **Explications** :
1. **`navigator.geolocation.watchPosition()`** : Suivi en temps réel de la position de l'utilisateur.
2. **`maximumAge: 0`** : Ne garde pas en cache les positions précédentes.
3. **`enableHighAccuracy: true`** : Utilise le GPS pour obtenir la position la plus précise.
4. **`clearWatch(watchID)`** : Arrête la surveillance du GPS.

---

### 🛠️ **Problèmes fréquents**
1. **Erreur "Geolocation unavailable"** : Vérifie que tu as les permissions dans `AndroidManifest.xml` ou `Info.plist` pour iOS.
2. **Les permissions ne sont pas demandées** : Sur Android, il faut utiliser `cordova-plugin-android-permissions` pour les autorisations runtime.
3. **Erreur de précision** : Assure-toi d'avoir activé le GPS haute précision sur l'appareil.
4. **Les positions ne changent pas** : Utilise `watchPosition` au lieu de `getCurrentPosition`.

---

Si tu as besoin d'aide pour adapter ça à ton projet **Dragon Ball Radar**, je peux te guider ! 😊