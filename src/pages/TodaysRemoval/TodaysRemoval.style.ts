import styled from '@emotion/styled';
import {CircularProgress} from "@mui/material";

export const Loader = styled(CircularProgress)`
  display: block;
  margin: 0 auto;  
`;

export const NoRemoval = styled.div`
  & > img {
    width: 100%;
  }
  
  & > p {
    margin: 0;
  }
`;