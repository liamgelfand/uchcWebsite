import React from 'react';

const DownloadLink = () => {
  const s3Url = 'https://incite-seq-data.s3.amazonaws.com/Capillaries_to_liam.h5ad.gz';

  return (
    <a href={s3Url} download>
      Download Data File
    </a>
  );
};

export default DownloadLink;
