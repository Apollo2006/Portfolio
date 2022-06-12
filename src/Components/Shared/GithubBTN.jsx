import { Button, Link, Icon } from "@chakra-ui/react"
import { AiFillGithub } from 'react-icons/ai'


function GithubBTN({ text }) {
  return (
    <Button variant='link' fontSize='small'>
        <Link href='https://github.com/Apollo2006'>
          {text}
        </Link>
        <Icon as={AiFillGithub} w={7} h={7} padding='3%'/>
        </Button>
  )
}

export default GithubBTN