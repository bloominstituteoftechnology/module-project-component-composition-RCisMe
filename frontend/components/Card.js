import React from 'react' 
import Figure from './Figure' 
import styled from 'styled-components'

const StyledCard = styled.div`
border: 2px solid black;
border-radius: 14px;
padding: 2rem;

h2 {
  color: ${pr => pr .$color};
  font-size: 3em;
  margin: 0 0 1rem 0;
}

p {
  margin: 0 0 2rem 0;

  &::first-line {
    font-size: 2em;
  }
}
`

export default function Card({ title, text, image, author, date }) {
    return (
      <StyledCard $color="red">
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure image={image} author={author} date={date} />
    </StyledCard>
    )
    }