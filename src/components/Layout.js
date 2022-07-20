import React from 'react'

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="section-container">
        { children }          
      </div>
    </>
  )
}

export default Layout;