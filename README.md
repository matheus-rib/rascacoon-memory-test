# Rascacoon Memory Test
[![GitHub license](https://img.shields.io/github/license/matheus-rib/rascacoon-memory-test)](https://github.com/matheus-rib/rascacoon-memory-test/blob/main/LICENSE)

This app is to help you to find the right section of the map when doing Memory Test for Rascacoon points with just `TWO INPUTS`.

**THIS IS A HELPER TOOL AND NOT A BOT. IT DOESN'T CAPTURES / TRACKS IMAGES FROM THE GAME AND / OR MOVE YOUR CHARACTER AROUND.**

This is a still Work-In-Progress app, it's lacking some UI/UX features and final build, but the main functionality for Memory Test already working as it should for development environment.

## Table of Contents
  - [How to use](#how-to-use)
  - [Requirements](#requirements)
  - [How to run](#how-to-run-beta)
  - [Commands](#commands)
    - [Install dependencies](#install-dependencies)
    - [Run the APP](#run-the-api)
      - [Run the APP (lan mode)](#run-the-app-lan-mode)
  - [Contribution](#contribution)
  - [Authors](#authors)

# How to use
  - Run the application (check [how to run](#how-to-run-beta) session).
  - Open the APP on your browser (or any other device using the same network if you chose to run in Lan Mode).
  - Get inside the task area.
  - As soon as each round starts:
    - Choose which diagonal is displayed.
      - Left to right (Starfishes or Yellow shells).
      - Right to left (Starfishes or Yellow shells).
    - Choose which is the item in the center of the first line.
      - Starfish, Yellow shell or white shell.
    - The map in the bottom of the APP will highlight which section you should stay for the round.
    - As soon as the round finishes, repeat the process (no reset buttons is needed).

## Requirements
- Node v18
- Yarn (If you want to contribute)

## How to run (beta)
- Install dependencies ([check commands session](#commands))
- Run the APP ([check commands session](#commands))
  - If you want to open in another device (e.g. Smartphone) using the same network, check the command "`Run the APP (lan mode)`"
- Open the APP on your browser by typing `o` and pressing `enter` key or access it by your local ip address followed by port (e.g. `localhost:5173` / `192.168.0.1:5173`) displayed in your terminal

## Commands

### Install dependencies
```bash
# Install dependencies
yarn
# or: npm install
```

### Run the APP
```bash
yarn dev
# or: npm run dev
```

### Run the APP (lan mode)
```bash
yarn dev --host
# or: npm run dev --host
```

## Contribution
Feel free to contribute with better images, UI/UX improvements, better instructions, etc...
(Be sure to be using Yarn while doing it so we don't have lock files conflict).

If you like the idea and wants to support me, you can send Tibia Coins to the character`Xavrir` (it will be spent with either Training Rods for better ML or BiS items)

## Authors
- Matheus Ribeiro
