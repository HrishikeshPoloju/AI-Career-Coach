import React from 'react';

const CoverLetter = async ({ params }) => {
    const { id } = params; 

    return (
        <div>
            CoverLetter: {id}
        </div>
    );
};

export default CoverLetter;
