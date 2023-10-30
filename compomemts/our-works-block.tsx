import React from 'react';

const OurWorksBlock = ({imageSrc, serviceName}: {imageSrc: string, serviceName: string}) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="box-image-4">
        <div className="media">
          <img src={imageSrc} alt={serviceName} className="img-responsive" />
        </div>
        <div className="body">
          <div className="content">
            <h4 className="title">{serviceName}</h4>
            <span className="category"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorksBlock;