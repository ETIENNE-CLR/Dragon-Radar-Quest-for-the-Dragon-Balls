# Dragon Radar: Quest for the Dragon Balls
## 📝 Description
**Dragon Radar** est une application mobile interactive qui simule le mythique radar de Dragon Ball. Plongez dans l'univers de la saga culte et partez à la recherche des 7 Dragon Balls. Une fois toutes les boules réunies, Shenron apparaît pour exaucer un vœu.

## 🛠️ Fonctionnalités
- **Radar interactif** : Visualisez la position des Dragon Balls sur une carte.
- **Collecte de Dragon Balls** : Suivez votre progression en récupérant chaque boule.
- **Invocation de Shenron** : Lorsque les 7 boules sont réunies, Shenron apparaît pour vous permettre de formuler un vœu.
- **Effets sonores et animations** : Plongée immersive dans l’ambiance de la série.
- **Position exacte** : Les 7 Dragons Balls seront dispersés dans un perimètre de 200 mètres.

## Installation
### Sur Android 🤖 (depuis votre téléphone)
1. Allez dans l'onglet `releases` de ce projet.
2. Dans les filtres, mettez `android`.
3. Télécharger la dernière version de l'APK et installez-le sur votre téléphone.

### Sur iOS 🍏 (depuis votre ordinateur)
1. Allez dans l'onglet `releases` de ce projet.
2. Dans les filtres, mettez `iOS`.
3. Télécharger la dernière version du projet.
4. Dans un terminal, accèdez à l'emplacement du projet téléchargé.
    > Normalement, ce sera dans ce répertoire :
    > ```bash
    >  cd Téléchargements/Dragon-Radar-Quest-for-the-Dragon-Balls
    >  ```
6. Installez les dépendances Cordova :
    ```bash
    npm install -g cordova
    cordova prepare 
    ```
7. Ajouter la plateforme :
    ```bash
    cordova platform add ios
    ```
8. Lancer l'application :
    ```bash
    cordova build ios
    cordova run ios
     ```

## 🎮 Comment jouer ?
1. **Cherchez les Dragon Balls** : Utilisez le radar pour suivre la position des boules.
2. **Récupérez-les toutes** : Chaque boule récupérée sera marquée comme acquise.
4. **Invoquez Shenron** : Une fois les 7 boules réunies, Shenron apparaît. Saisissez votre vœu et regardez-le se réaliser à l’écran !

## 🌟 Améliorations prévues
1. **Invocation de combattants** : Grâce à des cristaux de ki, vous pourrez invoquer des combattants parmi l'univers de Dragon Ball.
2. **Combattants** : Vous pourrez obtenir vos personnages préférés de la série et les entraîner afin qu'ils soient toujours prêt pour défendre la Terre de potentiels menaces.
    - Si un des vos combattants meurt en combat, vous pourrez le ramener à la vie grâce aux Dragon Ball.
    - Si vous n'entraînez pas vos combattants, ils perdront petit à petit leur pouvoir.
3. **Souhaits de Shenron** : Shenron pourra :
    - Ressusciter un de vos combattants mort au combat
    - Faire baisser votre niveau de joueur (pour baisser le niveau des ennemis et pour réduire la distance où sont dispersés les Dragon Ball)
    - Vous donnez des Zénis (les Zenis vous permettent d'entraîner vos combattants)
    - Vous donnez des cristaux de ki (les cristaux de ki vous permettent d'invoquer des combattants)
4. **Mode multijoueur** : Collaboration en ligne pour trouver les boules plus rapidement.
    - Vous pourrez aussi échanger vos Dragon Ball entre joueurs
5. **Difficulté adoptive** : plus vous aurez un niveau de joueur élevé, plus les Dragon Ball seront éparpillés plus loin.
6. **Combats d'art martiaux** : Lorsque la Terre sera menacé, vous participerez avec une équipe composée de 5 de vos combattants dans d'épique combats pour essayer de protéger la Terre.
    - Si vous n'avais pas réussi à protéger la Terre, vous perdrez toute votre progression
7. **Événements spéciaux** : Mettre des événements spéciaux (pour les fêtes, ...) (pas encore trop pensé à ça)

---
© 2024 Étienne Caulier - Ce projet est réalisé à des fins éducatives et de divertissement. Ce projet n’a aucun lien officiel avec la franchise Dragon Ball, Toei Animation ou Akira Toriyama.
