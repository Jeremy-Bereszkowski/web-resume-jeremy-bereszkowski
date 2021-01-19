import {email, fullName, phone} from "../global";

const FooterData = {
    left: {
        header: fullName,
    },
    right: {
        email: "Email: " + email,
        phone: "Mobile: " + phone,
    }
}

export default FooterData
