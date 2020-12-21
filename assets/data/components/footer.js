import {address, email, fullName, phone} from "../global";

const FooterData = {
    left: {
        header: fullName,
        address: address,
    },
    right: {
        email: "Email: " + email,
        phone: "Mobile: " + phone,
    }
}

export default FooterData
