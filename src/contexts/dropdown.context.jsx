import { createContext, useState} from 'react';

//as the actual value you want to access
export const DropdownContext = createContext({
    toggleDropdown: false,
    setToggleDropdown: () => {},
});



export const DropdownProvider = ({children}) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const value = { toggleDropdown, setToggleDropdown };


    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}