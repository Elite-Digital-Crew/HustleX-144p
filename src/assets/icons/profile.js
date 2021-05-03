import React from 'react'
import Svg, { Path, G } from "react-native-svg"

function Profile(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
        <Path
          fill="none"
          d="M-6.11-6.11H506.1V506.1H-6.11z"
          id="prefix__Layer_7"
        />
        <Path
          d="M170 110c-38.75 0-69.96 31.39-69.96 69.95 0 38.75 31.21 69.96 69.96 69.96 38.56 0 69.95-31.21 69.95-69.96 0-38.56-31.39-69.95-69.95-69.95zm47.89 160h-5.2c-12.92 6.28-27.26 10.04-42.69 10.04s-29.78-3.77-42.87-10.04h-5.2C82.29 270 50 302.29 50 341.93v18.12C50 376.55 63.45 390 79.95 390h180.09c16.5 0 29.95-13.45 29.95-29.96v-18.12c.01-39.63-32.28-71.92-72.1-71.92zm132.02-139.91c-33 0-59.91 26.73-59.91 59.91 0 33.18 26.91 59.91 59.91 59.91 33.18 0 60.09-26.73 60.09-59.91 0-33.18-26.91-59.91-60.09-59.91zM379.87 270h-2.33c-8.61 3.05-17.76 5.02-27.62 5.02-9.69 0-18.83-1.97-27.62-5.02h-2.33c-12.74 0-24.57 3.59-34.8 9.69 15.25 16.32 24.75 38.21 24.75 62.24v24.04c0 1.44-.36 2.69-.36 3.95h110.31c16.68 0 30.13-13.45 30.13-29.96 0-38.75-31.39-69.96-70.13-69.96z"
          id="prefix__Layer_4"
        />
      </Svg>
    )
}

export default Profile