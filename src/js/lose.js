
export default class lose extends Phaser.Scene {
    // constructeur de la classe
    constructor() {
        super({
            key: "lose" //  ici on précise le nom de la classe en tant qu'identifiant
        });

    }

    preload() {

    }

    create(){

    const screen_lose = this.add.image(640, 384, "screen_lose"); // Réglez la valeur selon vos besoins

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

    this.sound.stopByKey('son_game');

 if (!this.sound.get('son_game_over')) {
      console.warn('Sound "son_game_over" not found in the sound manager.');
     
    }
    else {
    // Play the sound for the win screen
    this.sound.play('son_game_over', {
        loop: false
    });
    }
    
    }


    udpate() {

    }

}