import styled from '@emotion/styled';
import {TrashVariant} from "../../../../types/trash.type";
import {Button, Card as MuiCard} from "@mui/material";

export const backgrounds = {
    [TrashVariant.Yellow]: {
        color: '#fabc05',
        gradient: 'linear-gradient(to top, rgb(197 138 2), rgb(253, 207, 106))',
        image: 'https://placekitten.com/500/500',
        icon: 'https://placekitten.com/200/200',
    },
    [TrashVariant.Brown]: {
        color: '#60452b',
        gradient: 'linear-gradient(to top, rgb(116 71 32), rgb(253, 207, 106))',
        image: 'https://www.placecage.com/500/500',
        icon: 'https://www.placecage.com/200/200',
    },
}

export const CardStyle = styled(MuiCard)<{trashVariant: TrashVariant}>`
  border-radius: 1rem;
  background-image: ${({trashVariant}) => `url(${backgrounds[trashVariant].image})`};
  max-width: 320px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div<{trashVariant: TrashVariant}>`
  padding: 160px 16px 16px;
  position: relative;
  border-radius: 1rem;
  box-shadow: rgb(252 121 68 / 50%) 0px 6px 16px 0px;
  &:before {
    background: ${({trashVariant}) => `${backgrounds[trashVariant].gradient}`};
    top: 160px;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    display: block;
    z-index: 0;
    position: absolute;
    clip-path: polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%, 95% 0%, 100% 0%, 100% 100%);
    border-radius: 1rem;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  
  & > div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    
    &:last-child {
      margin-top: 32px;
    }
  }
`;

export const Icon = styled.div<{trashVariant: TrashVariant}>`
  border-radius: 1rem;
  width: 116px;
  height: 100px;
  background-image: ${({trashVariant}) => `url(${backgrounds[trashVariant].icon})`};
`;

export const Title = styled.h2`
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

export const TakeOutButton = styled(Button)`
  color: #fff;
  opacity: 0.72;
  padding: 0 0.5rem;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, .38);
  
  &:hover {
    background-color: rgba(0, 0, 0, .3);
  }
`;