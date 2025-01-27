import { motion } from 'framer-motion'
import Head from 'next/head'
import styled from 'styled-components'
import { fade, pageAnimation, staggerFade } from '../components/animation'
import { Heading } from '../components/Shared/Heading'
import ProjectTile from '../components/Work/ProjectTile'
import { ProjectState } from '../lib/projects'

type Props = {}

export default function works({}: Props) {
  return (
    <>
      <Head>
        <title>Works</title>
        <meta name="description" content="Christian Anagnostou's Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Work id="work" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Heading variants={fade}>
          <h1>Websites</h1>
          <p>
            This list contains work from my freelance projects, past jobs, personal projects, and open-source
            contributions...my work on the www.
          </p>
        </Heading>

        <motion.section variants={staggerFade}>
          {ProjectState.map((project) => (
            <ProjectTile project={project} key={project.title} />
          ))}
        </motion.section>
      </Work>
    </>
  )
}

const Work = styled(motion.div)`
  overflow: hidden;
  color: var(--text);
  max-width: var(--max-w-screen);
  padding: 0 1rem;
  margin: 2rem auto;
`
