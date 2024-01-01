import moon from './moon.png'
import land from './land.png'
import cat from './cat.gif'
import { useRef } from 'react'

import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const ref = useRef()
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <h2>Web development in cool</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2} //now size = 2 pages
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: `cover`
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: `cover`
          }}
        />

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Welcome to Arsh's website!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>Hehe Boi</h2>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
        >
          <img src={cat} alt="" />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
export default App