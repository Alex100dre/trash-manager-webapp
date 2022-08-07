import React, { FunctionComponent } from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
interface OwnProps {}

type Props = OwnProps;

const MainHeader: FunctionComponent<Props> = (props) => {

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography role="appName" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trash Manager
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default MainHeader;
