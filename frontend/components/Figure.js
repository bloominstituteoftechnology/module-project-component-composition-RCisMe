import React from 'react' 
import styled from 'styled-components'

const StyledFigure = styled.figure`
max-width: 70%;

figcaption {
  font-style: internalIPSync;
}
`


export default function Figure({ image, author, date }) {
    return (
      <StyledFigure>
      <img src={image} />
      <figcaption>
       The Photo of the Day by {author} on {date}
       </figcaption>
       </StyledFigure>
    )
    }

    