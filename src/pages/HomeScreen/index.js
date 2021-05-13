import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
function HomeScreen() {
    const history =useHistory();
    return (
        <div>
          <Button onClick={()=>history.push("/profile")}><Typography>OpenProfile Screen</Typography></Button>            
          <Button onClick={()=>history.push("/resources/:coursename")}><Typography>resources Screen</Typography></Button>            
        </div>
    )
}

export default HomeScreen
