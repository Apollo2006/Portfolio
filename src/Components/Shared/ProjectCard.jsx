import { Box } from "@chakra-ui/react"


function ProjectCard({ header, span }) {
  return (
    <Box textAlign='center' fontWeight='semibold' fontSize='1xl'>{header}</Box>
    
  )
}

export default ProjectCard