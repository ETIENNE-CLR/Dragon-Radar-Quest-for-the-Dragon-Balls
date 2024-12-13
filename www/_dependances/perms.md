### 🔥 **Gestion des permissions**
Sur Android (et iOS), tu dois demander l'autorisation de localisation. Cordova le fait automatiquement, mais tu peux aussi t'assurer que la permission est demandée manuellement avec le plugin **cordova-plugin-permissions**.

Installation :
```bash
cordova plugin add cordova-plugin-android-permissions
```

Utilisation :
```javascript
var permissions = cordova.plugins.permissions;

permissions.checkPermission(permissions.ACCESS_FINE_LOCATION, function(status) {
    if (!status.hasPermission) {
        permissions.requestPermission(permissions.ACCESS_FINE_LOCATION, function(status) {
            if (!status.hasPermission) {
                alert("La permission de localisation est nécessaire pour utiliser cette fonctionnalité.");
            }
        }, function() {
            alert("Permission refusée.");
        });
    }
});
```
