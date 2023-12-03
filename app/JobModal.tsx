import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'

  export function Jobmodal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
      
        <Button onClick={onOpen} colorScheme='blue'>Zobacz więcej</Button>
  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Programista ROS</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                Jakieś ładne hasło
              </Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim ut tellus. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Nullam ac tortor vitae purus faucibus ornare suspendisse. Enim sit amet venenatis urna. Amet nisl purus in mollis nunc sed. Id neque aliquam vestibulum morbi blandit cursus. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Libero enim sed faucibus turpis in. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh.
              <Text fontWeight='bold' mb='1rem'>
                Co powinieneś umieć
              </Text>
              Sed ullamcorper morbi tincidunt ornare. Mauris sit amet massa vitae. Vitae semper quis lectus nulla at. Sed risus ultricies tristique nulla aliquet enim. Tortor vitae purus faucibus ornare. Mauris cursus mattis molestie a. Integer quis auctor elit sed vulputate mi sit. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Tortor consequat id porta nibh. Fermentum et sollicitudin ac orci phasellus. Semper risus in hendrerit gravida rutrum. Nibh tortor id aliquet lectus proin nibh. Tempus urna et pharetra pharetra massa massa. Sagittis purus sit amet volutpat. Erat imperdiet sed euismod nisi porta. Ut eu sem integer vitae justo eget magna fermentum iaculis. Quis risus sed vulputate odio ut.
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Aplikuj
              </Button>
              <Button variant='ghost'  onClick={onClose}>Wróć</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }