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
import { useNavigate } from 'react-router-dom';
import { EVENTS_ROUTE } from '../../utils/constants';

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
  const { openEventRegistrationPopup, setCurrentEvent } = useEvent();
  const { event, cardSize } = props;

  const navigate = useNavigate();

  //choosing card theme
  let chosenTheme;
  switch (event?.colorTheme) {
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
        width: '522px',
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

  const isLikeButtonActive = favoriteEvents.some((favoriteEvent) => favoriteEvent.id === event?.id);
  const isUserRegisterToEvent = registeredEvents.some(
    (registeredEvent) => registeredEvent.id === event?.id
  );
  const isEventCompleted = Date.now() - event?.date.getTime() > 0;

  // TODO
  // переделать под акутальные статусы!!!
  //
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

  const onCardClick = () => {
    navigate(`${EVENTS_ROUTE}/${event?.id}`, { state: event });
  };

  return (
    <Card sx={{ ...chosenSizes, display: 'flex' }} onClick={onCardClick}>
      <EventCardContainer colorTheme={chosenTheme} cardSize={cardSize}>
        <EventCardHeader {...event} colorTheme={chosenTheme} cardSize={cardSize} />
        <Stack direction="column" sx={{ flexGrow: '1' }}>
          <EventCardTitle colorTheme={chosenTheme} cardSize={cardSize}>
            {event?.title}
          </EventCardTitle>
          <EventCardSpeaker colorTheme={chosenTheme} cardSize={cardSize}>
            {event?.speaker}
          </EventCardSpeaker>
          {cardSize === 'small' && (
            <EventCardDate colorTheme={chosenTheme} cardSize={cardSize}>
              {event?.date.toLocaleDateString('en-Gb')}
            </EventCardDate>
          )}
          <CardActions sx={{ padding: 0, margin: 0 }} disableSpacing>
            {cardSize !== 'small' && (
              <EventCardDate colorTheme={chosenTheme} cardSize={cardSize}>
                {event?.date.toLocaleDateString('en-Gb')}
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
              aria-label="Добавить в избранное"
              title="Добавить в избранное"
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
