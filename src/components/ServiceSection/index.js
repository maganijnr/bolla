import React from 'react';

import { services } from './serviceData';

import { ServiceContainer,ServiceWrap,ServiceHeading,ServiceCards,Card,CardIcon,CardBody,CardHeading,CardSubtitle} from './ServiceElement';
const ServiceSection = () => {
    return (
        <>
			<ServiceContainer id="service">
				<ServiceWrap>
					<ServiceHeading>Our Services</ServiceHeading>
					<ServiceCards>
						{services.map((service) => (
							<Card>
								<CardIcon src={service.icon} alt="image alt" />
								<CardHeading>{service.heading}</CardHeading>
								<CardSubtitle>{service.subtitle}</CardSubtitle>
							</Card>
						))}
					</ServiceCards>
				</ServiceWrap>
			</ServiceContainer>
        </>
    )
}

export default ServiceSection