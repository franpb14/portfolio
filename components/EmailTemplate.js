import * as React from 'react';

export const EmailTemplate = ({
  name_,
  email,
  client_message
}) => (
  <p>
    <strong>{name_}</strong> quiere contactar contigo y además te ha escrito el siguiente mensaje:<br></br>
    <i>{client_message}</i>.<br></br>
    Su email para contactar es: <strong>{email}</strong>.<br></br>
    Un saludo.
  </p>
);
