import { Box, Wrap, WrapItem } from "@chakra-ui/react"
import { DiagonalType } from "../../config/mapPatterns"

function handleDiagonalChoice(setChosenDiagonal: React.Dispatch<React.SetStateAction<string>>, orientation: string, diagonalElement: string) {
  setChosenDiagonal(`${orientation}.${diagonalElement}`)
}

type DiagonalsProps = {
  setChosenDiagonal: React.Dispatch<React.SetStateAction<string>>
  diagonal: DiagonalType
  orientation: 'leftToRightDiagonal' | 'rightToLeftDiagonal'
  imagesMap: Record<string, string>
}

export default function Diagonals({ setChosenDiagonal, diagonal, orientation, imagesMap }: DiagonalsProps) {
  return (
    <Wrap>
      {Object.keys(diagonal).map(diagonalItem => (
        <WrapItem key={diagonalItem} m="3">
          <Box onClick={() => handleDiagonalChoice(setChosenDiagonal, orientation, diagonalItem)}>
            <img src={imagesMap[diagonalItem]}/>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  )
}
