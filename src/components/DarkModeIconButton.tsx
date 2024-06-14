// import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { IconButton, useColorMode } from "@chakra-ui/react";
// import React from "react";


// function DarkModeIconButton({
//     ...rest
// }: React.ComponentPropsWithoutRef<typeof IconButton>) {
//     const { colorMode, toggleColorMode } = useColorMode();

//     const isDark = colorMode === 'dark';

//     return(
//         <IconButton
//         onClick={toggleColorMode}
//         icon={isDark ? <SunIcon /> : <MoonIcon />}
//         aria-label={'dark-mode-toggle'}
//         {...rest}
//         />
//     );
// }

// export default DarkModeIconButton;



import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";

function DarkModeIconButton(props: React.ComponentPropsWithoutRef<typeof IconButton>) {
    const { colorMode, toggleColorMode } = useColorMode();

    const isDark = colorMode === 'dark';

    // Destructure aria-label out of props to prevent overwriting
    const { 'aria-label': ariaLabel, ...rest } = props;

    return (
        <IconButton
            onClick={toggleColorMode}
            icon={isDark ? <SunIcon /> : <MoonIcon />}
            aria-label={ariaLabel || 'dark-mode-toggle'}
            {...rest}
        />
    );
}

export default DarkModeIconButton;
