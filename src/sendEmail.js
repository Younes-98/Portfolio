// sendEmail.js

import emailjs from "emailjs-com";


const serviceId = process.env.REACT_APP_SERVICEID
const templateId = process.env.REACT_APP_TEMPLATEID
const userId = process.env.REACT_APP_USERID
const accessToken = process.env.REACT_APP_ACCESSTOKEN

const sendEmail = async (objet, firstname, lastname, email, city, message) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      { objet, firstname, lastname, email, city, message },
      userId,
      accessToken,
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};

export default sendEmail;