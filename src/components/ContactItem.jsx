import "./ContactItem.css";

export const ContactItem = () => {
  const emailAdress = "iuliia.erbis@gmail.com";
  const telegramUsername = "@UserjuliaErb";
  const phoneNumber = "+49 (176) 287 229 56";

  return (
    <div className="info-contact">
      <div className="card-container">
        <div className="map">
          <img src="./location.png" alt="map" />
        </div>

        <div className="card-group">
          <div className="card-01">
            <p>Country:</p>
            <p>City:</p>
            <p>Street:</p>
          </div>
          <div className="card-02">
            <p>Germany</p>
            <p>41812 Erkelenz</p>
            <p>Hoogenhof 49A</p>
          </div>
        </div>
      </div>
      <div className="contact-divider"></div>
      <div className="card-container">
        <div className="envelop">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="card-group">
          <div className="card-01">
            <p>Email:</p>
            <p>Telegram:</p>
          </div>
          <div className="card-02">
            <a href={`mailto:${emailAdress}`}>{emailAdress}</a>
            <a href={`tel:${telegramUsername}`}>{telegramUsername}</a>
          </div>
        </div>
      </div>
      <div className="contact-divider"></div>

      <div className="card-container">
        <div className="phone">
          <i className="fa-solid fa-mobile"></i>
        </div>
        <div className="card-group">
          <div className="card-01">
            <p>Mobile:</p>
          </div>
          <div className="card-02">
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
