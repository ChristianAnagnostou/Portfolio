// Animations
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { fade } from './animation'
import Github from './SVG/GitHub'
import LinkedIn from './SVG/LinkedIn'
import Readcv from './SVG/Readcv'
import Twitter from './SVG/Twitter'

function SocialLinks() {
  return (
    <SocialLinkList variants={fade}>
      <li>
        <a href="https://github.com/ChristianAnagnostou" target="_blank" rel="noreferrer">
          <Github />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/ChristianAnagnostou/" target="_blank" rel="noreferrer">
          <LinkedIn />
        </a>
      </li>
      <li>
        <a href="https://read.cv/christian.a" target="_blank" rel="noreferrer">
          <Readcv />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/javascramble" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
      </li>
    </SocialLinkList>
  )
}

const SocialLinkList = styled(motion.ul)`
  width: fit-content;
  margin: 0;
  display: flex;
  gap: 0.75rem;
  padding: 0 0.75rem;
  justify-content: center;
  align-items: center;
  list-style: none;

  border-radius: 5px;
  background: var(--bg);
  border: 1px solid var(--accent);

  li {
    flex: 1;

    a {
      padding: 0.5rem 0.25rem;
      display: block;
      cursor: alias;
      color: var(--text-dark);
      transition: color 0.3s ease;

      &:hover {
        color: var(--text);
      }

      * {
        display: block;
      }
    }
  }
`

export default SocialLinks
