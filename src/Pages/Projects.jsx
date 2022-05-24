import { SimpleGrid, Box } from '@chakra-ui/react'
import ProjectCard from '../Components/Shared/ProjectCard'

function Projects() {
  return (
    <div justify='center' spacing='10' w='100%'>
        <Box 
          bg='white' mt='5%'
          textAlign='center' justify='center'  fontWeight='thin' fontFamily='serif' letterSpacing='wider' fontSize='4xl'>
            Projects
        </Box>
        <SimpleGrid columns={2} justifyContent='center'>
          <ProjectCard header='Portfolio(A.K.A: this site)' />
          <ProjectCard header='FeedbackUI' />
          <ProjectCard header='GithubFinder' />
          <ProjectCard header='test' />
          
        </SimpleGrid>
    </div>
  )
}

export default Projects