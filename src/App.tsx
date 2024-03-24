import { useState } from "react"
import CenterElement from "./components/CenterElement"
import { leftToRightDiagonalImageMap, rightToLeftDiagonalImageMap, sectionsImageMap } from "./config/imageMap"
import Diagonal from "./components/Diagonal"
import { unifiedDiagonalMap } from "./config/mapPatterns"
import { Box, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react"

const initialChosenDiagonal = ''
const initialItem = -1

function handleReset(setChosenDiagonal: React.Dispatch<React.SetStateAction<string>>, setItem: React.Dispatch<React.SetStateAction<number>>) {
  setChosenDiagonal(initialChosenDiagonal)
  setItem(initialItem)
}

function App() {
  const [chosenDiagonal, setChosenDiagonal] = useState(initialChosenDiagonal)
  const [item, setItem] = useState(initialItem)

  return (
    <>
      <button onClick={() => handleReset(setChosenDiagonal, setItem)}>Reset</button>
      <Box>
        <Heading as="h2" size="xl" textAlign="center">Diagonals</Heading>
        <Flex justifyContent="center">
          <Wrap>
            <WrapItem mx="auto">
              <Diagonal setChosenDiagonal={setChosenDiagonal} diagonal={unifiedDiagonalMap.leftToRightDiagonal} imagesMap={leftToRightDiagonalImageMap} orientation='leftToRightDiagonal'/>
            </WrapItem>
            <WrapItem mx="auto">
              <Diagonal setChosenDiagonal={setChosenDiagonal} diagonal={unifiedDiagonalMap.rightToLeftDiagonal} imagesMap={rightToLeftDiagonalImageMap} orientation='rightToLeftDiagonal'/>
            </WrapItem>
          </Wrap>
        </Flex>
      </Box>
      {chosenDiagonal && 
        <Box>
          <Heading as="h2" size="xl" textAlign="center">Center item</Heading>
          <CenterElement chosenDiagonalElement={chosenDiagonal} setItem={setItem}/>
        </Box>
      }
      <Flex justifyContent="center">
        <img src={sectionsImageMap[item]}/>
      </Flex>
    </>
  )
}

export default App
