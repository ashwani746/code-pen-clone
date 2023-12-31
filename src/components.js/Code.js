import  { useContext } from 'react'
import Editor from './Editor'

import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`

const Code = () => {

   const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext);

  return (
    <Container>
    <Editor
      heading = "HTML"
      icons="/"
      color="#FF3C41"
      value={html}
      onChange={setHtml}
    />
    <Editor
     heading = "CSS"
     icons="*"
     color="#0EBEFF"
     value={css}
     onChange={setCss}
    />
    <Editor
     heading = "JavaScript"
     icons="{}"
     color="#FCD000"
     value={js}
     onChange={setJs}
    />
  </Container>
  )
}

export default Code