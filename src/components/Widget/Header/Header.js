import React from "react";

const Header = () => {
    const headerText = "React dialogue plot";
    const url = "https://github.com/nconnector/";

    return (
        <>
            <span>{headerText}</span>
            <a href={url}>
                <button>X</button>
            </a>
        </>
    );
};

const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;
