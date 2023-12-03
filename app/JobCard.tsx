import {Box,Text,Divider, Button,ButtonGroup,Container, Card, CardHeader, CardBody, CardFooter, Image, Heading, Stack, Flex, Spacer, HStack, Progress} from '@chakra-ui/react'
import {Jobmodal} from './JobModal'

export function Jobcard() {
    return (

      <Card>
        <Progress value={0} size='xs' colorScheme='blue' />
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

    )
  }