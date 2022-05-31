import { SimpleGrid, Box } from '@chakra-ui/react'
import ProjectCard from '../Components/Shared/ProjectCard'

function Projects() {

  const Projects = [
    {
      "header" : "<h1>Portfolio</h1>",
      "desc": "The current website made with React and Chakra UI. Built with the knowledge I have gained till now."
    },
    {
      "header" : "<h1>FeedbackUI</h1>",
      "desc": "This is a basic FeedbackUI that could be used in order to get reviews from customer. Mainly the use of filter and mapping."
    },
    {
      "header" : "<h1>GithubFinder</h1>",
      "desc": "This application can find Github users and their info with the use of Github API. P.S I had outside help."
    },
    {
      "header" : "<h1>ToDo.V2</h1>",
      "desc": "While this is a very basic and old project. I fondly look back at this as my starting step towards coding and look at how much progress is made."
    }
  ]


  return (
    <div spacing='10' w='100%'>
        <Box 
          bg='white' mt='5%'
          textAlign='center' justify='center'  fontWeight='thin' fontFamily='serif' letterSpacing='wider' fontSize='4xl'>
            Projects
        </Box>
        <SimpleGrid justifyContent='center' columns={1}  >
          {Projects.map(Projects => <ProjectCard header={Projects.header} description={Projects.desc}/>)}
        </SimpleGrid>
    </div>
  )
}

export default Projects