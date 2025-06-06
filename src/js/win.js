
export default class win extends Phaser.Scene {
    // constructeur de la classe
    constructor() {
        super({
            key: "win" //  ici on précise le nom de la classe en tant qu'identifiant
        });

    }

    preload() {

    }

    create(){

    const screen_win = this.add.image(this.game.config.width/2, this.game.config.height/2, "screen_win"); // Réglez la valeur selon vos besoins

    const button_back = this.add.image(this.game.config.width/1.4, 600, "button_back"); // Réglez la valeur selon vos besoins
    const button_replay = this.add.image(this.game.config.width/3.4, 600, "button_replay"); // Réglez la valeur selon vos besoins
    
    button_back.setInteractive();    
    button_back.on("pointerover", () => {
      button_back.setScale(1.1);
      button_back.setTint(0xC0C0C0);
    });
    button_back.on("pointerout", () => {
      button_back.setScale(1.0);
      button_back.clearTint();
    });

    button_back.on("pointerup", () => {
      this.scene.start("accueil");
    });
    button_replay.setInteractive();    
    button_replay.on("pointerover", () => {
      button_replay.setScale(1.1);
      button_replay.setTint(0xC0C0C0);
    });
    button_replay.on("pointerout", () => {
      button_replay.setScale(1.0);
      button_replay.clearTint();
    });

    button_replay.on("pointerup", () => {
      this.scene.start("map_recto");
    });
   
   if (!this.sound.get('son_win')) {
     console.warn('Sound "son_win" not found in the sound manager.');
    
   }
   else {
   // Play the sound for the win screen
   this.sound.play('son_win', {
       loop: false
   });
   }
   }

   udpate() {

   }

}