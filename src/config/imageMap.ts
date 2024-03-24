import starfishLeftToRight from '../assets/diagonals/leftToRight/starfish.png'
import yellowShellLeftToRight from '../assets/diagonals/leftToRight/yellowShell.png'

import starfishRightToLeft from '../assets/diagonals/rightToLeft/starfish.png'
import yellowShellRightToLeft from '../assets/diagonals/rightToLeft/yellowShell.png'

import starfishCenter from '../assets/centerItems/starfish.png'
import yellowShellCenter from '../assets/centerItems/yellowShell.png'
import whiteShellCenter from '../assets/centerItems/whiteShell.png'

import sectionZero from '../assets/section/0.png'
import sectionOne from '../assets/section/1.png'
import sectionTwo from '../assets/section/2.png'
import sectionThree from '../assets/section/3.png'
import sectionFour from '../assets/section/4.png'
import sectionFive from '../assets/section/5.png'
import sectionSix from '../assets/section/6.png'
import sectionSeven from '../assets/section/7.png'
import fullmap from '../assets/fullmap.png'

export const leftToRightDiagonalImageMap = {
  starfish: starfishLeftToRight,
  yellowShell: yellowShellLeftToRight,
} as Record<string, string>

export const rightToLeftDiagonalImageMap = {
  starfish: starfishRightToLeft,
  yellowShell: yellowShellRightToLeft,
} as Record<string, string>

export const centerItemsImageMap = {
  starfish: starfishCenter,
  yellowShell: yellowShellCenter,
  whiteShell: whiteShellCenter,
} as Record<string, string>

export const sectionsImageMap = {
  '-1': fullmap, 
  0: sectionZero,
  1: sectionOne,
  2: sectionTwo,
  3: sectionThree,
  4: sectionFour,
  5: sectionFive,
  6: sectionSix,
  7: sectionSeven,
} as Record<number, string>
