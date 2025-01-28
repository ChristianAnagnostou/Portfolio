import Image from 'next/image'
import styled from 'styled-components'

type Props = {}

const Signature = (props: Props) => {
  return <StyledImage src="/signature.png" width={128} height={74} alt="Signature of Christian Anagnostou" />
}

export default Signature

const StyledImage = styled(Image)`
  display: block;
  pointer-events: none;
  user-select: none;
  align-self: center;
  transform-origin: center center;
  transform: translateY(0.5rem) scale(0.9);
  width: 100px;
  height: 45px;
`
