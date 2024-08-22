/* Gitter visning */
export const profileGridTmpl = (element) =>
  ` <section class="team">
    <div class="team-profile ${element.teamGender}">
        <div class="team-header">
        <div class="team-img"><img src="${element.profileImg}" alt=""> </div></div>
        <div class="team-name"><p> ${element.teamName}</p></div>
        <div class="team-username"><p> ${element.teamUsername}</p></div>
        <div class="team-mail"><p> ${element.teamMail}</p></div>
        <div class="team-website-btn"><a href="#"> ${element.teamWebsiteBtn}</a></div>
      </div>
      </section>
`;

/* liste visning */
export const profileListTmpl = (element) =>
  ` <section class="team-list">
    <div class="team-profile ${element.teamGender}">
        <div class="team-header">
        <div class="team-img"><img src="${element.profileImg}" alt=""> </div></div>
        <div class="team-name"><p> ${element.teamName}</p></div>
        <div class="team-username"><p> ${element.teamUsername}</p></div>
        <div class="team-mail"><p> ${element.teamMail}</p></div>
        <div class="team-website-btn"><a href="#"> ${element.teamWebsiteBtn}</a></div>
      </div>
      </section>
`;

/* Contact specifik bruger */
export const teamContactTmpl = (element) =>
  `
<div class="team-info">
<div class="team-img"><img src="${element.profileImg}" alt=""> </div></div>
<div class="team-name"><p> ${element.teamName}</p></div>
<div class="team-mail"><p> ${element.teamMail}</p></div>
</div>
<input class="contact-name" type="text" placeholder="Navn"></input>
<input class="contact-email" type="email" placeholder="E-mail"></input>
<input class="contact-phone" type="text" placeholder="Telefon"></input
<textarea placeholder="Din besked..." ></textarea>
 <button class="send-btn"></button>

`;

/* firma info  */
export const customerServiceTmpl = (element) =>
  `
  <p class="cu-message-us">${element.messageUs}</p>
  <p class="cu-message-us-info">${element.messageUsInfo}</p>
  <p class="cu-adress">${element.adress}</p>
  <p class="cu-tlf">${element.customerServiceTlf}</p>
  <p class="cu-email">${element.customerServiceEmail}</p>
  
  `;
