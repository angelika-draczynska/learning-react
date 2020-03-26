import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContent } from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContent.title} image={faqContent.image} />
    <p>{faqContent.content}</p>
  </Container>
);

export default FAQ;