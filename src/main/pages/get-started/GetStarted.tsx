import React from 'react';
import '../Page.css';
import './GetStarted.css';
import FeaturesTable from './FeaturesTable';
import PackageTiers from './PackageTiers';
import ContactUsSection from './ContactUsSection';

const GetStarted = () => {
    
    return (
        <>  
            <PackageTiers />
            <FeaturesTable />
            <ContactUsSection />
        </>
    );
}

export default GetStarted;