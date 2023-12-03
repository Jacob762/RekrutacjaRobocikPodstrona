'use client'
import { Flex, Box, Heading, SimpleGrid, Text, Container } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Jobmodal } from "./JobModal"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

const IndexPage = () => (

  <Box>
    <Flex height="40vh" background="gray.100">
    </Flex>
    <Tabs>
      <TabList>
        <Tab>Software</Tab>
        <Tab>Konstrukcja</Tab>
        <Tab>Elektronika</Tab>
        <Tab>Marketing</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p><SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
              <CardHeader>
                <Heading size='md'> Programista python</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Jobmodal/>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Programista ROS</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
              <Jobmodal/>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Web Developer</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
              <Jobmodal/>
              </CardFooter>
            </Card>
          </SimpleGrid></p>
        </TabPanel>
        <TabPanel>
          <p><SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
              <CardHeader>
                <Heading size='md'> Alkoholik</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
              <Jobmodal/>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Menel</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
              <Jobmodal/>
              </CardFooter>
            </Card>
          </SimpleGrid></p>
        </TabPanel>
        <TabPanel>
          <p><SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
              <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
              <Jobmodal/>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Projektant płytek PCB</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
              <Jobmodal/>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Jobmodal/>
              </CardFooter>
            </Card>
          </SimpleGrid></p>
        </TabPanel>
        <TabPanel>
          <p><SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
              <CardHeader>
                <Heading size='md'> Copywriter</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
              <Jobmodal/>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Fundraising</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Jobmodal/>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Fotograf</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <Jobmodal/>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Filmowiec</Heading>
              </CardHeader>
              <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
              <CardFooter>
                <BasicUsage/> 
              </CardFooter>
            </Card>
          </SimpleGrid></p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <Flex height="40vh" >

    </Flex>
    <Flex height="2.5vh" background="gray.100">

    </Flex>
  </Box>

)



function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button colorScheme='blue' onClick={onOpen}>Zobacz więcej</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Filmowiec</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            siema {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Wróć
            </Button>
            <Button variant='ghost'>Wypierdalaj</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default IndexPage