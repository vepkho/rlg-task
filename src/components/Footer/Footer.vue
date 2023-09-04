<template>
  <div class="footer">
    <div class="top-footer">
      <div class="legal">
        <img src="./assets/logo.png" alt="logo" />
        <img src="./assets/curacao.png" alt="curacao" />
        <p>
          Curacao is a Dutch Caribbean island located in the Southern Caribbean
          Sea .
        </p>
      </div>
      <div class="footer-nav">
        <div class="nav">
          <p class="title">Sport</p>
          <p class="link">Sport</p>
          <p class="link">Live Sport</p>
          <p class="link">E-sport</p>
          <p class="link">Virtual</p>
        </div>
        <div class="nav">
          <p class="title">Casino</p>
          <p class="link">Casino</p>
          <p class="link">Live Casino</p>
          <p class="link">e-sport</p>
          <p class="link">virtual</p>
        </div>
        <div class="nav">
          <p class="title">Slot</p>
          <p class="link">Games</p>
          <p class="link">Bingo</p>
          <p class="link">Beton</p>
        </div>
        <div class="nav">
          <p class="title">Quick Links</p>
          <p class="link">Netent Restrictions</p>
          <p class="link">Self Exculsion Policy</p>
          <p class="link">Dispute Resolution</p>
          <p class="link">Fairness & RNG Testing Methods</p>
        </div>
        <div class="contact">
          <p class="title">Contact Us</p>
          <div class="mb-number">
            <img src="./assets/phone.svg" alt="phone icon" />
            <p class="number">+41 541 4512 1</p>
          </div>
          <div class="mb-number">
            <img src="./assets/phone.svg" alt="phone icon" />
            <p class="number">+41 541 4512 1</p>
          </div>
          <p class="work-hours">OPEN : 10:00 - 04:00</p>
        </div>
      </div>
    </div>
    <div class="support">
      <div class="email">
        <img src="./assets/convert.png" alt="email" />
        <p class="email-address">Support@Portobet.com</p>
      </div>
      <div class="social-icons">
        <img src="./assets/youtube.svg" alt="youtube" />
        <img src="./assets/twitter.svg" alt="twitter" />
        <img src="./assets/fb.svg" alt="fb" />
        <img src="./assets/linkedin.svg" alt="linkedin" />
      </div>
    </div>
    <div class="policies">
      <div class="language">
        <img src="./assets/flag.png" alt="flag" />
        <p>english</p>
        <img src="./assets/arrow.svg" alt="arrow" />
      </div>
      <p class="policy">AML-KYC Policy</p>
      <p class="policy">Payment Policy</p>
      <p class="policy">Bonus Policy</p>
      <p class="policy">Privacy Policy</p>
    </div>
    <div class="rights">
      <div class="left">
        <img src="./assets/18.svg" alt="age limit" />
        <p>Gambling can be addictive, please play responsibly.</p>
      </div>
      <p class="right">All rights reserved © 2023 Portobet</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: #16181d;
  padding: 48px 16px;

  .top-footer {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

    @media screen and (max-width: 1024px) {
      flex-direction: column-reverse;
    }

    @media screen and (max-width: 768px) {
      flex-direction: unset;
      align-items: flex-start;
    }

    @media screen and (max-width: 420px) {
      transform: scale(0.9);
    }

    .legal {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 32px;

      @media screen and (max-width: 1024px) {
        align-items: center;
        text-align: center;
      }

      p {
        max-width: 305px;
        color: #b5b5b5;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }

    .footer-nav {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 68px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
      }

      .nav {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 16px;

        .title {
          color: #fff;
          font-family: "Montserrat Variable", sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-transform: uppercase;
          max-width: 124px;
          padding-bottom: 8px;
          cursor: pointer;
        }

        .link {
          color: #b5b5b5;
          font-family: "Montserrat Variable", sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          cursor: pointer;
        }
      }

      @media screen and (max-width: 768px) {
        .link {
          display: none;
        }
      }
    }

    .contact {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      gap: 16px;

      @media screen and (max-width: 768px) {
        .work-hours {
          display: none;
        }
      }

      .title {
        color: #fff;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        width: 124px;
        padding-bottom: 8px;
        cursor: pointer;
      }

      .mb-number {
        width: 120px;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        cursor: pointer;

        @media screen and (max-width: 768px) {
          display: none;
        }

        p {
          color: #b5b5b5;
          font-family: "Montserrat Variable", sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          cursor: pointer;
        }
      }

      .work-hours {
        max-width: 152px;
        color: #fff;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }

  .support {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
    }
    .email {
      display: flex;
      align-items: center;
      gap: 12px;

      p {
        color: #fff;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    .social-icons {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
    }
  }

  .policies {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    max-width: 1200px;
    margin: 56px auto;
    padding: 20px 0;
    border-top: 1px solid #2b2d34;
    border-bottom: 1px solid #2b2d34;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
      gap: 16px;
      justify-content: flex-end;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }

    .language {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;

      p {
        color: #b5b5b5;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        cursor: pointer;
      }
    }

    .policy {
      color: #fff;
      font-family: "Montserrat Variable", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      cursor: pointer;
    }
  }

  .rights {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      margin-top: 24px;
      flex-direction: column;
      text-align: center;
      gap: 8px;
    }
    .left {
      display: flex;
      align-items: center;
      gap: 10px;

      @media screen and (max-width: 768px) {
        display: none;
      }

      p {
        color: #fff;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .right {
      color: #fff;
      font-family: "Montserrat Variable", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-transform: uppercase;
    }
  }
}
</style>
