import { DiagonalType, UnifiedDiagonalMapType, unifiedDiagonalMap } from "../../config/mapPatterns"
import { centerItemsImageMap } from "../../config/imageMap"
import { Box, Flex } from "@chakra-ui/react"

type CenterElementProps = {
  chosenDiagonalElement: string
  setItem: React.Dispatch<React.SetStateAction<number>>
}

type AvailableItemsCombination = {
  whiteShell: number;
  yellowShell: number;
} | {
  starfish: number;
  whiteShell: number;
}

function handleItemSelection(setItem: React.Dispatch<React.SetStateAction<number>>, item: string, availableItems: AvailableItemsCombination) {
  setItem(availableItems[item as keyof AvailableItemsCombination])
}

export default function CenterElement({chosenDiagonalElement, setItem}: CenterElementProps) {
  const splittedElement = chosenDiagonalElement.split('.')
  const diagonal = splittedElement[0] as keyof UnifiedDiagonalMapType
  const centerElement = splittedElement[1] as keyof DiagonalType
  const availableItems = unifiedDiagonalMap[diagonal][centerElement]

  return (
    <Box>
      <Flex my="3" justifyContent="center">
        {diagonal && centerElement && Object.keys(availableItems).map(item => (
          <Box mx="3" key={item} onClick={() => handleItemSelection(setItem, item, availableItems)}>
            <img src={centerItemsImageMap[item]}/>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
