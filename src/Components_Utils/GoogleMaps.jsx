import React, { useEffect, useRef } from 'react'

const GoogleMaps = ({ latitude, longitude }) => {

  const map = useRef(null)

  useEffect(() => {
    const lat = latitude
    const lng = longitude

    if (map.current) {
      map.current.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`
    }
  }, [latitude, longitude])

  return (
    <div>
      <iframe ref={map} title="Google Maps" style={{ marginLeft:"85px"}}></iframe>
    </div>
  )
}

export default GoogleMaps