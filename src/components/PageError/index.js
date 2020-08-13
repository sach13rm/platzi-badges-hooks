import React from 'react';

import './PageError.css';

function PageError({ error }) {
	return <div className="PageError">❌{error.message}😱</div>;
}

export default PageError;
