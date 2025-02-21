import React from 'react'

const purposeContext = React.createContext({
    navFuction: () => {},
    navCloseFunc: ()=> {},
    showNav: () => {}
})

export default purposeContext;