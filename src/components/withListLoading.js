import React from 'react';
function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} style={{width: '90%'}} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Obteniendo informacion
      </p>
    );
  };
}
export default WithListLoading;