import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { fade, pageAnimation } from '../components/animation'
import { ButtonRow } from '../components/Shared/ButtonRow'
import { Heading } from '../components/Shared/Heading'
import LeftArrow from '../components/SVG/LeftArrow'
import RightArrow from '../components/SVG/RightArrow'
import { ArtState } from '../lib/art'
import { BASE_URL } from '../lib/constants'
import { getArtStructuredData } from '../lib/structured/art'

type Props = {}

const ART_CATEGORIES = Object.keys(ArtState)
const NUM_COLUMNS = 2

const PageTitle = 'Photography | Christian Anagnostou'
const PageDescription = 'A gallery of photography capturing moments by Christian Anagnostou.'
const PageUrl = `${BASE_URL}/art`

const Art = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(ART_CATEGORIES[0])
  const [modalIndex, setModalIndex] = useState<number | null>(null)
  const flatImages: StaticImageData[] = ArtState[selectedCategory] || []

  // Calculate default Open Graph image (first image of first category)
  const defaultCategory = ART_CATEGORIES[0]
  const defaultImages = ArtState[defaultCategory] || []
  const ogImage = defaultImages.length > 0 ? `${BASE_URL}${defaultImages[0].src}` : undefined

  // Distribute images into columns.
  const columns = Array.from({ length: NUM_COLUMNS }, () => [] as { image: StaticImageData; index: number }[])
  flatImages.forEach((img, i) => {
    columns[i % NUM_COLUMNS].push({ image: img, index: i })
  })

  return (
    <>
      <Head>
        <title>{PageTitle}</title>
        <meta name="description" content={PageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={PageUrl} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="art, photography, gallery, Christian Anagnostou" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PageTitle} />
        <meta property="og:description" content={PageDescription} />
        <meta property="og:url" content={PageUrl} />
        {ogImage && <meta property="og:image" content={ogImage} />}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PageTitle} />
        <meta name="twitter:description" content={PageDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getArtStructuredData()) }}
        />
      </Head>

      <Container variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Heading variants={fade}>
          <h1>Photography</h1>
          <p>
            There&apos;s something profound about capturing the world around us. Not necessarily to share it with
            others, but to remember it. To recall the way the light hit the trees or the way the snowflakes fell from
            the sky. It creates moments you can revisit, even if only in your mind.
          </p>
        </Heading>

        {ART_CATEGORIES.length > 1 && (
          <ButtonRow>
            {ART_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'highlight' : ''}
              >
                {category}
              </button>
            ))}
          </ButtonRow>
        )}

        <Columns $numColumns={NUM_COLUMNS}>
          {columns.map((colImages, col) => (
            <Column
              key={`column_${col}`}
              $numColumns={NUM_COLUMNS}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {colImages.map(({ image, index }, row) => {
                const onClick = () => setModalIndex(index)
                const priority = row < 4

                return (
                  <ImageContainer
                    key={image.src}
                    onClick={onClick}
                    onKeyDown={(e) => e.key === 'Enter' && onClick()}
                    role="button"
                    tabIndex={0}
                    aria-label="Open full screen image"
                    variants={fade}
                    initial="hidden"
                    animate="show"
                  >
                    <Image
                      src={image}
                      alt=""
                      blurDataURL={image.blurDataURL}
                      placeholder="blur"
                      priority={priority}
                      loading={priority ? 'eager' : 'lazy'}
                    />
                  </ImageContainer>
                )
              })}
            </Column>
          ))}
        </Columns>
      </Container>

      <AnimatePresence>
        {modalIndex !== null && (
          <FullscreenModal
            images={flatImages}
            currentIndex={modalIndex}
            onClose={() => setModalIndex(null)}
            onNavigate={(newIndex) => setModalIndex(newIndex)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Art

// Modal components and styles

const deltaX = 25
const duration = 0.25
const imageVariants = {
  initial: (direction: number) => ({
    x: direction ? direction * deltaX : 0,
    opacity: 0.5,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration },
  },
  exit: (direction: number) => ({
    x: direction ? direction * -deltaX : 0,
    opacity: 0.5,
    transition: { duration },
  }),
}

interface FullscreenModalProps {
  images: StaticImageData[]
  currentIndex: number
  onClose: () => void
  onNavigate: (newIndex: number) => void
}

const FullscreenModal = ({ images, currentIndex, onClose, onNavigate }: FullscreenModalProps) => {
  const image = images[currentIndex]
  const [direction, setDirection] = useState(0)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') {
        setDirection(-1)
        onNavigate((currentIndex - 1 + images.length) % images.length)
      } else if (e.key === 'ArrowRight') {
        setDirection(1)
        onNavigate((currentIndex + 1) % images.length)
      }
    },
    [currentIndex, images.length, onClose, onNavigate]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-modal="true"
      role="dialog"
      aria-label="Image full screen view"
    >
      <AnimatePresence custom={direction} mode="wait">
        <MotionImageContainer
          key={currentIndex}
          custom={direction}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src={image}
            alt="Full screen view by Christian Anagnostou"
            blurDataURL={image.blurDataURL}
            placeholder="blur"
            fill
            sizes="100vw"
            style={{ objectFit: 'contain' }}
          />
        </MotionImageContainer>
      </AnimatePresence>

      <CloseButton onClick={onClose} aria-label="Close full screen view">
        &times;
      </CloseButton>
      <ArrowLeftWrapper
        onClick={() => {
          setDirection(-1)
          onNavigate((currentIndex - 1 + images.length) % images.length)
        }}
      >
        <LeftArrow />
      </ArrowLeftWrapper>
      <ArrowRightWrapper
        onClick={() => {
          setDirection(1)
          onNavigate((currentIndex + 1) % images.length)
        }}
      >
        <RightArrow />
      </ArrowRightWrapper>
    </ModalOverlay>
  )
}

const ImageContainer = styled(motion.div)`
  position: relative;
  img {
    display: block;
    height: auto;
    width: 100%;
    border-radius: 5px;
  }
`

// Container for the modal image; positioned relative so fill works.
const MotionImageContainer = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: calc(100vh - 100px);
  margin: 0 auto;
`

const Container = styled(motion.section)`
  overflow: hidden;
  color: var(--text);
  max-width: var(--max-w-screen);
  padding: 0 1rem;
  margin: 2rem auto;
`

const Columns = styled.section<{ $numColumns: number }>`
  display: flex;
  gap: ${({ $numColumns }) => 20 - $numColumns * 1.5}px;
`

const Column = styled(motion.div)<{ $numColumns: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $numColumns }) => 20 - $numColumns * 1.5}px;
  flex: 1;
`

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10000;
`

const CloseButton = styled(motion.button)`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
`

const ArrowWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  color: #fff;
  width: 50px;
  height: 100vh;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 50px;
`

const ArrowLeftWrapper = styled(ArrowWrapper)`
  left: 0;
`

const ArrowRightWrapper = styled(ArrowWrapper)`
  right: 0;
`
