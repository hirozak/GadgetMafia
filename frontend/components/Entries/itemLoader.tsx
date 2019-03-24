import * as React from 'react';
import ContentLoader from 'react-content-loader';

import './itemLoader.scss';

const contentLoader3Columns = (
  <ContentLoader
    primaryColor="rgb(0,0,0)"
    secondaryColor="rgb(0,0,0)"
    primaryOpacity={0.06}
    secondaryOpacity={0.12}
  >
    <rect x="3.33%" y="0" rx="5" ry="5" width="30%" height="73%" />
    <rect x="3.33%" y="75%" rx="3" ry="3" width="30%" height="5%" />
    <rect x="3.33%" y="82%" rx="3" ry="3" width="30%" height="5%" />
    <rect x="34.83%" y="0" rx="5" ry="5" width="30%" height="73%" />
    <rect x="34.83%" y="75%" rx="3" ry="3" width="30%" height="5%" />
    <rect x="34.83%" y="82%" rx="3" ry="3" width="30%" height="5%" />
    <rect x="66.33%" y="0" rx="5" ry="5" width="30%" height="73%" />
    <rect x="66.33%" y="75%" rx="3" ry="3" width="30%" height="5%" />
    <rect x="66.33%" y="82%" rx="3" ry="3" width="30%" height="5%" />
  </ContentLoader>
)

const contentLoader2Columns = (
  <ContentLoader
    primaryColor="rgb(0,0,0)"
    secondaryColor="rgb(0,0,0)"
    primaryOpacity={0.06}
    secondaryOpacity={0.12}
  >
    <rect x="2%" y="0" rx="5" ry="5" width="47%" height="73%" />
    <rect x="2%" y="75%" rx="3" ry="3" width="47%" height="5%" />
    <rect x="2%" y="82%" rx="3" ry="3" width="47%" height="5%" />
    <rect x="51%" y="0" rx="5" ry="5" width="47%" height="73%" />
    <rect x="51%" y="75%" rx="3" ry="3" width="47%" height="5%" />
    <rect x="51%" y="82%" rx="3" ry="3" width="47%" height="5%" />
  </ContentLoader>
)

const itemLoader: React.SFC = () => (
  <div className="itemLoader">
    {window.screen.width < 761 && (
      <div>
        {contentLoader2Columns}
        {contentLoader2Columns}
      </div>
    )}
    {window.screen.width > 760 && (
      <div>
        {contentLoader3Columns}
        {contentLoader3Columns}
      </div>
    )}
  </div>
);

export default itemLoader;
