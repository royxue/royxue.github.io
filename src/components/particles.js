import React from 'react'
import Particles from 'react-particles-js'

const ParticlesBg = () => (
  <Particles
    style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: -999
    }}
    params={{
      particles: {
        number: {
          value: 150,
          density: {
            enable: 1,
            value_area: 1200
          }
        },
        color: {
          value: ["#f44336", "03A9F4", "AB47BC"]
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#fff'
          },
          polygon:{
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.75,
          random: 0
        },
        move: {
          enable: false
        },
        size: {
          value: 3,
          random: 1
        },
        line_linked: {
          enable: 1,
          distance: 50,
          color: "#919191",
          opacity: .6,
          width: 1
        }
      }
    }}
  />
)

export default ParticlesBg
