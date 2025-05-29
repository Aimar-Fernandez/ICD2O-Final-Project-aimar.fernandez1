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
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    // images
    this.load.image('wormHead', './assets/wormHead.png')
  }

  create (data) {
    this.snakeHead = this.physics.add.sprite(1920 / 2, 1080 / 2, 'snakeHead')
  }
  update (time, delta) {
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keyUpObj = this.input.keyboard.addKey('UP')
    const keyDownObj = this.input.keyboard.addKey('DOWN')
    let direction = 0
    if (keyLeftObj.isDown === true) {
      direction = 1
    }
    else if (keyRightObj === true) {
      direction = 2
    }
    else if (keyUpObj === true) {
      direction = 3
    }
    else if (keyDownObj === true) {
      direction = 4
    }
    else {
      // Do nothing
    }
    if (direction === 1) {
      this.wormHead.x - 15
    }
    else if (direction === 2) {
      this.wormHead.x + 15
    }
    else if (direction === 3) {
      this.wormHead.y + 15
    }
    else if (direction === 4) {
      this.wormHead.y + 15
    }
    else {
      // Do nothing
    }
  }
}

export default GameScene
