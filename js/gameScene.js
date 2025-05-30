/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This is the game scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
    this.background = null
    this.wormHead = null
    this.direction = 0
    this.lastMovement = 0
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    // images
    this.load.image('wormHead', './assets/wormHead.png')
    this.load.image('wormBody', './assets/darkGreenSquare.png')
  }

  create (data) {
    this.wormHead = this.physics.add.sprite(1920 / 2, 1080 / 2, 'wormHead').setScale(0.10)
    this.wormBody1 = this.physics.add.sprite (1920 / 2 - 60, 1080 / 2, 'wormBody').setScale(1)
  }

  update (time, delta) {
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keyUpObj = this.input.keyboard.addKey('DOWN')
    const keyDownObj = this.input.keyboard.addKey('UP')
    if (keyRightObj.isDown === true) {
      this.direction = 2
    }
    else if (keyLeftObj.isDown === true) {
      this.direction = 1
    }
    else if (keyUpObj.isDown === true) {
      this.direction = 3
    }
    else if (keyDownObj.isDown === true) {
      this.direction = 4
    }
    else {
      // Do nothing
    }
    if (time > this.lastMovement + 250) {
      if (this.direction === 1) {
        this.wormHead.x = this.wormHead.x - 60
      }
      else if (this.direction === 2) {
        this.wormHead.x = this.wormHead.x + 60
      }
      else if (this.direction === 3) {
        this.wormHead.y = this.wormHead.y + 60
      }
      else if (this.direction === 4) {
        this.wormHead.y = this.wormHead.y - 60
      }
      else {
        // Do nothing
      }
      this.lastMovement = time
    }
    
  }
}

export default GameScene
