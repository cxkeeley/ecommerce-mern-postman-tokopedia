import React from 'react';

const Message = ({ variant, children }) => {
  return <div className={`alert ${variant}`}>{children}</div>;
};

Message.dafaultProps = {
  variant: 'alert-info'
};

export default Message;
