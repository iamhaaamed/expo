import React from 'react';
import { createScreen } from 'components/elements';
import {
    AccordionShowCaseOne,
    AccordionShowCaseTwo,
    AccordionShowCaseThree,
    AccordionShowCaseFour,
} from './accordion.showcase';

const MAccordionShowcase = createScreen(
    () => {
        return (
            <>
                <AccordionShowCaseOne />
                <AccordionShowCaseTwo />
                <AccordionShowCaseThree />
                <AccordionShowCaseFour />
            </>
        );
    },
    {
        scrollView: true,
        paddingTop: false,
        paddingBottom: false,
    },
);

export default MAccordionShowcase;
