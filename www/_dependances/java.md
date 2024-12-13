L'erreur **"ANDROID_HOME=undefined"** et **"Failed to find 'android' command"** signifie que Cordova ne trouve pas le **SDK Android** ni la **commande Android**. Voici un guide complet pour configurer correctement l'environnement sous **Linux**. 🐧

---

## 🔥 **1. Installer les outils nécessaires**
### 🛠️ **Installe Java JDK**
1. Vérifie si Java est déjà installé :
   ```bash
   java -version
   ```

2. Si ce n'est pas le cas, installe la **JDK (Java Development Kit)** :
   ```bash
   sudo apt update
   sudo apt install openjdk-11-jdk
   ```

3. Vérifie l'installation :
   ```bash
   java -version
   ```

> ⚠️ **Important** : Assure-toi d'avoir au moins la version **11 ou supérieure** de Java.

4. Configure la variable d'environnement **JAVA_HOME** :
   ```bash
   echo 'export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64' >> ~/.bashrc
   echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

> 🔍 **Vérification** :
```bash
echo $JAVA_HOME
```
La commande doit afficher : 
```
/usr/lib/jvm/java-11-openjdk-amd64
```

---

## 🔥 **2. Installer Android SDK et Outils de Build**
### 🛠️ **Option 1: Installer Android Studio**
1. **Télécharge Android Studio** depuis le site officiel :
   [Télécharger Android Studio](https://developer.android.com/studio)
   
2. **Installe Android Studio** :
   ```bash
   sudo snap install android-studio --classic
   ```

3. **Lance Android Studio** :
   ```bash
   android-studio
   ```

4. **Installe les outils SDK nécessaires** :
   - Ouvre **Tools** → **SDK Manager**.
   - Installe la dernière version du **SDK Android**.
   - Assure-toi d'installer :
     - **SDK Platforms** : Dernière version d'Android.
     - **SDK Tools** :
       - **Android SDK Build-Tools**
       - **Android SDK Command-line Tools**
       - **Android Emulator** (facultatif)
       - **Platform Tools**
       - **Tools**

---

## 🔥 **3. Configurer ANDROID_HOME et ANDROID_SDK_ROOT**
1. Détermine le chemin de ton SDK Android. Par défaut, le SDK se trouve ici :
   ```
   $HOME/Android/Sdk
   ```

2. Configure les variables d'environnement **ANDROID_HOME** et **PATH** :
   ```bash
   echo 'export ANDROID_HOME=$HOME/Android/Sdk' >> ~/.bashrc
   echo 'export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

> 🔍 **Vérification** :
```bash
echo $ANDROID_HOME
```
La commande doit afficher le chemin vers le SDK :
```
/home/ton_nom_utilisateur/Android/Sdk
```

3. **Vérifie que la commande `adb` fonctionne** :
```bash
adb version
```
Tu devrais voir quelque chose comme :
```
Android Debug Bridge version x.x.x
```

---

## 🔥 **4. Vérifie la configuration**
Exécute la commande suivante pour t'assurer que toutes les variables d'environnement sont correctement configurées :

```bash
echo $JAVA_HOME
echo $ANDROID_HOME
echo $PATH
```

- **$JAVA_HOME** doit pointer vers `/usr/lib/jvm/java-11-openjdk-amd64`
- **$ANDROID_HOME** doit pointer vers `/home/ton_nom_utilisateur/Android/Sdk`
- **$PATH** doit inclure les chemins d'accès à `platform-tools`, `tools`, etc.

---

## 🔥 **5. Nettoyer et recompiler le projet**
1. Nettoie les anciennes plateformes :
   ```bash
   cordova platform rm android
   ```

2. Réinstalle la plateforme :
   ```bash
   cordova platform add android
   ```

3. Compile le projet :
   ```bash
   cordova build android
   ```

---

## 🚀 **Résumé des commandes importantes**
```bash
# Installe les outils nécessaires
sudo apt update
sudo apt install openjdk-11-jdk
sudo snap install android-studio --classic

# Configure les variables d'environnement
echo 'export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64' >> ~/.bashrc
echo 'export ANDROID_HOME=$HOME/Android/Sdk' >> ~/.bashrc
echo 'export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$JAVA_HOME/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Vérifie l'installation
java -version
adb version

# Ajoute et compile la plateforme Android
cordova platform add android
cordova build android
```

---

## 💡 **Vérification finale**
Pour vérifier que tout est OK, exécute :

```bash
cordova info
```

Cela te donnera un rapport complet sur l'état de **Java**, **Android SDK**, **Cordova**, et **l'environnement**.  
Si tout est correctement configuré, tu ne devrais plus voir l'erreur **"ANDROID_HOME=undefined"**. 🎉

---

Si tu rencontres encore des erreurs, dis-moi ce que tu vois, et je t'aiderai à les corriger ! 😊