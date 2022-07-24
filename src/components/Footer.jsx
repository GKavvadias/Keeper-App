import React from "react";

const date = new Date().getFullYear();

function Footer() {
    return(
    <div className="footer">
        <p>copyrightⓒ{date}</p>
    </div>
    );
}

export default Footer;