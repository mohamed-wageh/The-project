import React from 'react';
import styled from 'styled-components'
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`

const Navbar = () => {
    return (
        <div>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
        </div>

    )

}

export default Navbar;