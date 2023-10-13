import React from 'react'
import { AppBar,Toolbar, styled } from "@mui/material"

const Container = styled (AppBar)`
          background: #060606;
          position: static;
          border-bottom: 1px solid #2f2f2f;
          height: 9vh;
`
    
const Header = () => {
     const logo = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/codepen-2749244-2284634.png?f=webp'

  return (
    <Container position= "static">
    <Toolbar>
        <img src ={logo} alt="logo" style={{width: 40,}} />
    </Toolbar>
   </Container>
  )
}

export default Header