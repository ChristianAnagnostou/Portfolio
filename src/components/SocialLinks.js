import React from "react";
// Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animation";
// Icons
import Instagram from "../img/Instagram";
import Gitgub from "../img/GitHub";
import LinkedIn from "../img/LinkedIn";

function SocialLinks() {
  return (
    <SocialLinkList variants={fade}>
      <li>
        <a href="https://github.com/ChristianAnagnostou" target="_blank" rel="noreferrer">
          <Gitgub />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ChristianAnagnostou/" target="_blank" rel="noreferrer">
          <LinkedIn />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/christian.anagnostou/" target="_blank" rel="noreferrer">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="https://read.cv/christian.a" target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 28 28"
            style={{ transform: "scale(1.5)" }}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.809 5.242a1.25 1.25 0 00-1.531.884L6.042 18.2a1.25 1.25 0 00.884 1.53l9.66 2.59a1.25 1.25 0 001.53-.885l3.236-12.074a1.25 1.25 0 00-.884-1.53l-9.66-2.589zm-2.98.496a2.75 2.75 0 013.368-1.945l9.66 2.588A2.75 2.75 0 0122.8 9.75l-3.236 12.074a2.75 2.75 0 01-3.368 1.945L6.538 21.18a2.75 2.75 0 01-1.944-3.368L7.829 5.738z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.518 8.27a.75.75 0 01.919-.53l7.241 1.94a.75.75 0 01-.388 1.449l-7.242-1.94a.75.75 0 01-.53-.919zM9.677 11.41a.75.75 0 01.918-.531l7.242 1.94a.75.75 0 11-.388 1.45l-7.242-1.941a.75.75 0 01-.53-.919zM8.836 14.549a.75.75 0 01.918-.53l4.83 1.293a.75.75 0 11-.388 1.45l-4.83-1.295a.75.75 0 01-.53-.918z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </li>
    </SocialLinkList>
  );
}

const SocialLinkList = styled(motion.ul)`
  width: fit-content;
  margin: 1rem auto 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  border-radius: 5px;
  padding: 0.6rem 0 0.45rem;
  background: rgba(20, 20, 20, 0.5);
  border: 1px solid var(--accent);

  li {
    margin: 0 0.75rem;
    flex: 1;

    a {
      display: block;
      color: var(--accent);

      &:hover {
        color: #fff;
      }
    }
  }
`;

export default SocialLinks;
