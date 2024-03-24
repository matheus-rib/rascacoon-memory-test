const leftToRightDiagonal = {
  starfish: {
    whiteShell: 2,
    yellowShell: 4,
  },
  yellowShell: {
    starfish: 5,
    whiteShell: 7,
  },
}

const rightToLeftDiagonal = {
  starfish: {
    whiteShell: 1,
    yellowShell: 6,
  },
  yellowShell: {
    starfish: 0,
    whiteShell: 3,
  },
}

export type DiagonalType = {
  starfish: {
    whiteShell: number
    yellowShell: number
  }
  yellowShell: {
    starfish: number
    whiteShell: number
  }
}

export type UnifiedDiagonalMapType = {
  leftToRightDiagonal: DiagonalType
  rightToLeftDiagonal: DiagonalType
}

export const unifiedDiagonalMap = {
  leftToRightDiagonal,
  rightToLeftDiagonal,
}

