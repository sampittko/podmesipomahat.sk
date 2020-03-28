import React, {useEffect} from 'react';
import { getCityFromRoute, setDocumentTitleFromRoute } from '../../../utils/routesUtils';

import Action from '../common/Action';
import Arrow from '../../common/navigation/Arrow';
import CautionText from './CautionText';
import Headline from '../common/Headline';
import OpeningHours from './OpeningHours';
import PhoneNumber from './PhoneNumber';
import { ROUTES } from '../../../config/routes';
import Section from '../../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import { getCityInfo } from '../../../utils/citiesUtils';
import history from '../../../history';

const ContactPage = () => {
  useEffect(() => {
    setDocumentTitleFromRoute(history.location.pathname);
  }, []);

  const CITY = getCityFromRoute(history.location.pathname);
  
  const CITY_INFO = getCityInfo(CITY);

  return (
    <Section
      backgroundPath={backgroundPath}
      title="Potrebujem Pomoc"
    >
      <div className="flex flex-col justify-center sm:justify-start xs:justify-start items-center h-full -mt-14 md:-mt-18 sm:mt-0 xs:mt-0">
        <Headline text={CITY}/>
        <PhoneNumber number={CITY_INFO.PHONE}/>
        <OpeningHours
          fromDay={CITY_INFO.OPENING_HOURS.FROM_DAY}
          toDay={CITY_INFO.OPENING_HOURS.TO_DAY}
          fromHour={CITY_INFO.OPENING_HOURS.FROM_HOUR}
          toHour={CITY_INFO.OPENING_HOURS.TO_HOUR}
        />
        <CautionText />
        <Action
          to={CITY_INFO.ORDER_FORM_LINK}
          descriptionText="objednávka cez formulár"
          actionText="Formulár"
          buttonColor="green"
          buttonVariant="contained"
        />
      </div>
      <Arrow back color="green" to={ROUTES.VYBERTE_VASE_MESTO} />
    </Section>
  );
}

export default ContactPage;