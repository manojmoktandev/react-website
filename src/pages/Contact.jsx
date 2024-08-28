import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
    <h2 className="common-heading">Contact page</h2>

    <iframe
      src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=weber%20street%20+(Temu%20eccomerce)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form
          action="https://formspree.io/f/mpwabjoe"
          method="POST"
          className="contact-inputs">
          <input
            type="text"
            placeholder="name"
            name="Name"
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter you message"></textarea>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>
  );
};

export default Contact;