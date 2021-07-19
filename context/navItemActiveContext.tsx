import { createContext, useState, FunctionComponent, Dispatch, SetStateAction } from 'react';

interface IState {
    activeItem: string;
    setActiveItem?: Dispatch<SetStateAction<string>>
}

export const NavItemActiveContext = createContext<IState>({activeItem: ""});

interface IProps {
    children: JSX.Element;
}
export const NavItemActiveProvider: FunctionComponent<IProps> = ({ children }) => {
    const [activeItem, setActiveItem] = useState<string>("home")
    return (
        <NavItemActiveContext.Provider value={{ activeItem, setActiveItem }}>
            {children}
        </NavItemActiveContext.Provider>
    )
}


