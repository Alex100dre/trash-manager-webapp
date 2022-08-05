import React, { FunctionComponent } from 'react';
import { Trash } from "../../../../types/trash.type";
import { CardStyle, Content, ContentWrapper, Icon, TakeOutButton, Title } from "./Card.style";
import { useTranslation } from 'react-i18next';

export type CardProps = Trash;

const Card: FunctionComponent<CardProps> = ({id}) => {
    const { t } = useTranslation();
    const trashVariantSlug = id.toLowerCase()
  return (
      <CardStyle role="trashCard" trashVariant={id}>
        <ContentWrapper role="trashCardContentWrapper" trashVariant={id}>
            <Content>
                <div>
                    <Icon role="trashCardIcon" trashVariant={id} />
                    <Title role="trashCardTitle">{t(`trash.${trashVariantSlug}.name`)}</Title>
                </div>
                <div>
                    <div></div>
                    <TakeOutButton>{t('trash.action.takeout')}</TakeOutButton>
                </div>
            </Content>
        </ContentWrapper>
      </CardStyle>
  );
};

export default Card;
