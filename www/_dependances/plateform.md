## 1. Ajouter la plateforme Android
Exécute cette commande dans le terminal à la racine de ton projet Cordova :
```bash
cordova platform add android
```

## 2. Construire l'APK
Tu peux personnaliser la commande de build avec les options suivantes :

### **1️⃣ Compilation en mode debug (par défaut)**
```bash
cordova build android
```
- Produit un fichier **app-debug.apk** non signé.
- Utile pour tester sur un appareil ou un émulateur.

> Si ça marche pas :<br>
> Aller voir le fichier md `java.md`

### **2️⃣ Compilation en mode release (pour la publication)**
```bash
cordova build android --release
```
- Produit un fichier **app-release-unsigned.apk**.
- Ce fichier doit être **signé et aligné** avant d'être publié sur le Google Play Store.

## Executer l'application
Exécute cette commande dans le terminal à la racine de ton projet Cordova :
```bash
cordova run android
``` 