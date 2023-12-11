import React from 'react'
import GoogleMaps from "../Components_Utils/GoogleMaps"
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('Renderiza GoogleMaps corretamente', () => {
    render(<GoogleMaps latitude={-37.3159} longitude={81.1496} />)
  
    const iframeElement = screen.getByTitle('Google Maps')
    expect(iframeElement).toBeInTheDocument()
})