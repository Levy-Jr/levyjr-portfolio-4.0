import { Suspense } from "react"
import ProjectsPageContent from "./components/projects-page-content"

const Projects = () => {
  return (
    <Suspense>
      <ProjectsPageContent />
    </Suspense>
  )
}

export default Projects