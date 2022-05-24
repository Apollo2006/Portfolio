import { Box } from "@chakra-ui/react"


function ProjectCard({ header, span }) {
  return (
    <Box textAlign='center' fontWeight='semibold' fontSize='2xl'>{header}</Box>
    
  )
}

export default ProjectCard