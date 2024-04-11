import { cardThemeBlue, cardThemeBlack, cardThemeWhite } from '../../themes/cardThemes';
import { Card, CardActions, Stack } from '@mui/material';
import EventCardContainer from './EventCardContainer/EventCardContainer';
import EventCardHeader from './EventCardHeader/EventCardHeader';
import EventCardTitle from './EventCardTitle/EventCardTitle';
import EventCardSpeaker from './EventCardSpeaker/EventCardSpeaker';
import EventCardDate from './EventCardDate/EventCardDate';
import EventCardButton from './EventCardButton/EventCardButton';
import React from 'react';
import useProfile from '../../providers/ProfileProvider/ProfileProvider.hook';
import useEvent from '../../providers/EventProvider/EventProvider.hook';

/** A event card component that has 3 size preset and 3 color style preset.
 * @param {string} cardSize There are 3 options: 'small' 'medium' and 'large'. Default is 'small'.
 * @param {string} colorTheme There are 3 options: 'blue' 'black' and 'white'. Default is 'blue'.
 * @param {string} title Event title.
 * @param {string} speaker Event speaker description.
 * @param {date} date Event date.
 * @param {string} buttonText Button text.
 * @param {boolean} isActive Like button state, true = active state, false = inactive state
 * @param {boolean} buttonDisabled State of text button, true = disabled, false = enabled
 * @param {*} props another props
 * @returns
 */
function EventCard(props) {
  const { favoriteEvents, registeredEvents, addFavoriteEvent, deleteFavoriteEvent } = useProfile();
  const { openEventRegistrationPopup } = useEvent();
  const { event, cardSize } = props;
  const { id, colorTheme, title = '', speaker = '', date = new Date() } = event;

  const isLikeButtonActive = favoriteEvents.some((favoriteEvent) => favoriteEvent.id === id);
  const isUserRegisterToEvent = registeredEvents.some(
    (registeredEvent) => registeredEvent.id === id
  );
  const isEventCompleted = Date.now() - date.getTime() > 0;

  const buttonState = isEventCompleted
    ? { text: 'Посмотреть', disabled: false, action: () => {} }
    : isUserRegisterToEvent
    ? { text: 'Вы зарегистрированы', disabled: true, action: () => {} }
    : {
        text: 'Зарегистрироваться',
        disabled: false,
        action: () => {
          openEventRegistrationPopup(event);
        },
      };
  //choosing card theme
  let chosenTheme;
  switch (colorTheme) {
    case 'white':
      chosenTheme = cardThemeWhite;
      break;
    case 'black':
      chosenTheme = cardThemeBlack;
      break;
    case 'blue':
    default:
      chosenTheme = cardThemeBlue;
      break;
  }

  //choose card size
  let chosenSizes;
  switch (cardSize) {
    case 'large': {
      chosenSizes = {
        borderRadius: '20px',
        width: '630px',
        minWidth: '630px',
        height: '315px',
      };
      break;
    }
    case 'medium': {
      chosenSizes = {
        borderRadius: '60px',
        width: '465px',
        minWidth: '465px',
        height: '430px',
      };
      break;
    }
    case 'small':
    default: {
      chosenSizes = {
        borderRadius: '20px',
        width: '305px',
        minWidth: '305px',
        height: '267px',
      };
      break;
    }
  }
  return (
    <Card sx={{ ...chosenSizes, display: 'flex' }}>
      <EventCardContainer colorTheme={chosenTheme} cardSize={cardSize}>
        <EventCardHeader {...event} colorTheme={chosenTheme} cardSize={cardSize} />
        <Stack direction="column" sx={{ flexGrow: '1' }}>
          <EventCardTitle colorTheme={chosenTheme} cardSize={cardSize}>
            {title}
          </EventCardTitle>
          <EventCardSpeaker colorTheme={chosenTheme} cardSize={cardSize}>
            {speaker}
          </EventCardSpeaker>
          {cardSize === 'small' && (
            <EventCardDate colorTheme={chosenTheme} cardSize={cardSize}>
              {date.toLocaleDateString('en-Gb')}
            </EventCardDate>
          )}
          <CardActions sx={{ padding: 0, margin: 0 }} disableSpacing>
            {cardSize !== 'small' && (
              <EventCardDate colorTheme={chosenTheme} cardSize={cardSize}>
                {date.toLocaleDateString('en-Gb')}
              </EventCardDate>
            )}
            <EventCardButton
              onClick={buttonState.action}
              disabled={buttonState.disabled}
              colorTheme={chosenTheme?.button}
              sx={{
                fontSize: cardSize === 'medium' ? '16px' : '12px',
              }}
            >
              {buttonState.text}
            </EventCardButton>
            <EventCardButton
              onClick={() =>
                isLikeButtonActive ? deleteFavoriteEvent(event) : addFavoriteEvent(event)
              }
              sx={{
                marginLeft: cardSize === 'small' ? '5px' : cardSize === 'medium' ? '20px' : '6px',
              }}
              role="like"
              isActive={isLikeButtonActive}
              colorTheme={chosenTheme?.button}
            />
          </CardActions>
        </Stack>
      </EventCardContainer>
    </Card>
  );
}

export default React.memo(EventCard);
