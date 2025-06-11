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
    this.leafImage = null
    this.leaf = null
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#000000', align: 'center' }
    this.gameOverText = null
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
    this.wormHead = null
    this.wormBody2 = null
    this.wormBody3 = null
    this.wormBody4 = null
    this.wormBody5 = null
    this.wormBody6 = null
    this.wormBody7 = null
    this.wormBody8 = null
    this.wormBody9 = null
    this.wormBody10 = null
    this.direction = 0
    this.lastMovement = 0
    this.movement = true
    this.gameOver = false
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    // images
    this.load.image('background', './assets/background.png')
    this.load.image('wormHead', './assets/wormHead.png')
    this.load.image('wormBody2', './assets/darkGreenSqaure.png')
    this.load.image('wormBody3', './assets/wormHead.png')
    this.load.image('leaf', './assets/leaf.png')
  }

  create (data) {
    this.movement = true
    // images
    // this.background = this.add.image(1920 / 2 ,1080 / 2, 'background').setScale(1.0)
    this.leafImage = this.add.image(10, 10, 'leaf').setScale(0.15)
    this.leafImage.setOrigin(0, 0)
    // sprites
    this.wormHead = this.physics.add.sprite(1920 / 2, 1080 / 2, 'wormHead').setScale(0.10)
    this.wormBody2 = this.physics.add.sprite(1920 / 2 - 60, 1080 / 2, 'wormBody2').setScale(0.10)
    this.wormBody3 = this.physics.add.sprite(1920 / 2 - 120, 1080 / 2, 'wormBody3').setScale(0.10)
    this.leaf = this.physics.add.sprite(1920 / 2 + 240, 1080 / 2, 'leaf').setScale(0.10)
    // groups
    this.wormBodyGroup = this.physics.add.group()
    // text
    this.scoreText = this.add.text(10, 10, this.score.toString(), this.scoreTextStyle)
    // head and body collision
    this.physics.add.collider(this.wormHead, this.wormBodyGroup, function (wormBodyCollide) {
      this.gameOver = true
    }.bind(this))
  }

  update (time, delta) {
    // controls
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keyUpObj = this.input.keyboard.addKey('DOWN')
    const keyDownObj = this.input.keyboard.addKey('UP')
    if (this.movement === true) {
      if (keyRightObj.isDown === true && this.wormBody2.x <= this.wormHead.x) {
        this.direction = 2
      } else if (keyLeftObj.isDown === true && this.wormBody2.x >= this.wormHead.x) {
        this.direction = 1
      } else if (keyUpObj.isDown === true && this.wormBody2.y <= this.wormHead.y) {
        this.direction = 3
      } else if (keyDownObj.isDown === true && this.wormBody2.y >= this.wormHead.y) {
        this.direction = 4
      } else {
        // Do nothing
      }
    }
    if (time > this.lastMovement + 200) {
      if (this.gameOver === true) {
        this.physics.pause()
        this.movement = false
        this.score = 0
        this.direction = 0
        this.wormBody4 = null; this.wormBody5 = null; this.wormBody6 = null; this.wormBody7 = null
        this.wormBody8 = null; this.wormBody9 = null; this.wormBody10 = null
        this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'Game Over!\nClick to play again', this.gameOverTextStyle).setOrigin(0.5)
        this.gameOver = false
        this.gameOverText.setInteractive({ useHandCursor: true })
        this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      }
      if (this.movement === true) {
        // worm body 10
        if (this.wormBody10 != null) {
          if (this.wormBody10.x > this.wormBody9.x) {
            this.wormBody10.x -= 60
          } else if (this.wormBody10.x < this.wormBody9.x) {
            this.wormBody10.x += 60
          } else if (this.wormBody10.y > this.wormBody9.y) {
            this.wormBody10.y -= 60
          } else if (this.wormBody10.y < this.wormBody9.y) {
            this.wormBody10.y += 60
          }
        }
        // worm body 9
        if (this.wormBody9 != null) {
          if (this.wormBody9.x > this.wormBody8.x) {
            this.wormBody9.x -= 60
          } else if (this.wormBody9.x < this.wormBody8.x) {
            this.wormBody9.x += 60
          } else if (this.wormBody9.y > this.wormBody8.y) {
            this.wormBody9.y -= 60
          } else if (this.wormBody9.y < this.wormBody8.y) {
            this.wormBody9.y += 60
          }
        }
        // worm body 8
        if (this.wormBody8 != null) {
          if (this.wormBody8.x > this.wormBody7.x) {
            this.wormBody8.x -= 60
          } else if (this.wormBody8.x < this.wormBody7.x) {
            this.wormBody8.x += 60
          } else if (this.wormBody8.y > this.wormBody7.y) {
            this.wormBody8.y -= 60
          } else if (this.wormBody8.y < this.wormBody7.y) {
            this.wormBody8.y += 60
          }
        }
        // worm body 7
        if (this.wormBody7 != null) {
          if (this.wormBody7.x > this.wormBody6.x) {
            this.wormBody7.x -= 60
          } else if (this.wormBody7.x < this.wormBody6.x) {
            this.wormBody7.x += 60
          } else if (this.wormBody7.y > this.wormBody6.y) {
            this.wormBody7.y -= 60
          } else if (this.wormBody7.y < this.wormBody6.y) {
            this.wormBody7.y += 60
          }
        }
        // worm body 6
        if (this.wormBody6 != null) {
          if (this.wormBody6.x > this.wormBody5.x) {
            this.wormBody6.x -= 60
          } else if (this.wormBody6.x < this.wormBody5.x) {
            this.wormBody6.x += 60
          } else if (this.wormBody6.y > this.wormBody5.y) {
            this.wormBody6.y -= 60
          } else if (this.wormBody6.y < this.wormBody5.y) {
            this.wormBody6.y += 60
          }
        }
        // worm body 5
        if (this.wormBody5 != null) {
          if (this.wormBody5.x > this.wormBody4.x) {
            this.wormBody5.x -= 60
          } else if (this.wormBody5.x < this.wormBody4.x) {
            this.wormBody5.x += 60
          } else if (this.wormBody5.y > this.wormBody4.y) {
            this.wormBody5.y -= 60
          } else if (this.wormBody5.y < this.wormBody4.y) {
            this.wormBody5.y += 60
          }
        }
        // worm body 4
        if (this.wormBody4 != null) {
          if (this.wormBody4.x > this.wormBody3.x) {
            this.wormBody4.x -= 60
          } else if (this.wormBody4.x < this.wormBody3.x) {
            this.wormBody4.x += 60
          } else if (this.wormBody4.y > this.wormBody3.y) {
            this.wormBody4.y -= 60
          } else if (this.wormBody4.y < this.wormBody3.y) {
            this.wormBody4.y += 60
          }
        }
        // worm body 3
        if (this.wormBody3.x > this.wormBody2.x) {
          this.wormBody3.x -= 60
        } else if (this.wormBody3.x < this.wormBody2.x) {
          this.wormBody3.x += 60
        } else if (this.wormBody3.y > this.wormBody2.y) {
          this.wormBody3.y -= 60
        } else if (this.wormBody3.y < this.wormBody2.y) {
          this.wormBody3.y += 60
        }
        // worm body 2
        if (this.wormBody2.x > this.wormHead.x) {
          this.wormBody2.x -= 60
        } else if (this.wormBody2.x < this.wormHead.x) {
          this.wormBody2.x += 60
        } else if (this.wormBody2.y > this.wormHead.y) {
          this.wormBody2.y -= 60
        } else if (this.wormBody2.y < this.wormHead.y) {
          this.wormBody2.y += 60
        }
        // worm head
        if (this.direction === 1) {
          this.wormHead.x -= 60
        } else if (this.direction === 2) {
          this.wormHead.x += 60
        } else if (this.direction === 3) {
          this.wormHead.y += 60
        } else if (this.direction === 4) {
          this.wormHead.y -= 60
        } else {
          // Do nothing
        }
      }
      if (this.wormHead.x < 480 || this.wormHead.x > 1440 || this.wormHead.y < 60 || this.wormHead.y > 1020) {
        this.gameOver = true
      }
      if (this.wormHead.x === this.leaf.x && this.wormHead.y === this.leaf.y) {
        while (this.leaf.x === this.wormHead.x && this.leaf.y === this.wormHead.y) {
          this.leaf.x = Math.floor(Math.floor(Math.random() * 960 + 1) / 60) * 60 + 480
          this.leaf.y = Math.floor(Math.floor(Math.random() * 960 + 1) / 60) * 60 + 60
        }
        this.score += 1
        this.scoreText.setText(this.score.toString())
        if (this.wormBody4 === null) {
          this.wormBody4 = this.physics.add.sprite(this.wormBody3.x, this.wormBody3.y, 'wormBody2').setScale(0.10)
          this.wormBodyGroup.add(this.wormBody4)
        } else if (this.wormBody5 === null) {
          this.wormBody5 = this.physics.add.sprite(this.wormBody4.x, this.wormBody4.y, 'wormBody3').setScale(0.10)
          this.wormBodyGroup.add(this.wormBody5)
        } else if (this.wormBody6 === null) {
          this.wormBody6 = this.physics.add.sprite(this.wormBody5.x, this.wormBody5.y, 'wormBody2').setScale(0.10)
          this.wormBodyGroup.add(this.wormBody6)
        } else if (this.wormBody7 === null) {
          this.wormBody7 = this.physics.add.sprite(this.wormBody6.x, this.wormBody6.y, 'wormBody3').setScale(0.10)
          this.wormBodyGroup.add(this.wormBody7)
        } else if (this.wormBody8 === null) {
          this.wormBody8 = this.physics.add.sprite(this.wormBody7.x, this.wormBody7.y, 'wormBody2').setScale(0.10)
          this.wormBodyGroup.add(this.wormBody8)
        } else if (this.wormBody9 === null) {
          this.wormBody9 = this.physics.add.sprite(this.wormBody8.x, this.wormBody8.y, 'wormBody3').setScale(0.10)
          this.wormBodyGroup.add(this.wormBody9)
        } else if (this.wormBody10 === null) {
          this.wormBody10 = this.physics.add.sprite(this.wormBody9.x, this.wormBody9.y, 'wormBody2').setScale(0.10)
          this.wormBodyGroup.add(this.wormBody10)
        } else {
          // empty for now
        }
      }
      this.lastMovement = time
    }
  }
}

export default GameScene
