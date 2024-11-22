import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {

    const handleLoginClick = () => {
        window.location.href = "https://api.pandas.vn/oauth2/authorize/facebook?redirect_uri=https://pandas.vn/oauth2/redirect";
      };

  return (

    <div>
    <header className="header">
      <div className="header-container">


      <div className="logo">
      <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.728516" width="45" height="45" rx="22.5" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M11.974 8.75522C10.7883 9.88352 10.5678 12.2518 11.5691 13.1007C12.0659 13.5222 12.4327 13.4032 13.1336 12.5946C13.6371 12.0137 14.9865 10.9248 16.1317 10.1747C18.0716 8.90425 18.1482 8.77441 17.2466 8.28157C15.6777 7.42379 13.1322 7.65249 11.974 8.75522ZM31.74 8.5698C30.4803 9.08919 31.1759 11.0241 33.4412 13.3043C36.1919 16.072 37.5566 16.2874 38.3119 14.0731C39.1018 11.7585 38.9642 10.7851 37.6586 9.45168C36.7527 8.52602 35.995 8.25304 34.4093 8.28304C33.2723 8.30419 32.0712 8.43355 31.74 8.5698ZM23.1738 18.7968C21.4615 20.5458 21.578 22.9756 23.481 25.1899C27.1467 29.4557 33.0099 27.9521 31.6467 23.0951C31.0098 20.8277 29.7774 19.2174 28.0286 18.3694C25.7892 17.2834 24.5477 17.3926 23.1738 18.7968ZM12.051 18.6596C9.74131 19.8017 8.69141 24.458 10.4846 25.6045C12.1757 26.6856 15.8852 24.2696 16.5235 21.6712C16.7772 20.6373 16.576 20.1376 15.5396 19.2267C14.1137 17.9735 13.6059 17.8908 12.051 18.6596ZM15.734 21.0682C15.734 21.772 15.4746 22.0371 14.8969 21.9235C13.6424 21.6766 13.5024 20.0486 14.7361 20.0486C15.425 20.0486 15.734 20.3643 15.734 21.0682ZM25.4888 20.3427C25.9485 20.8119 25.3208 22.016 24.6165 22.016C23.8102 22.016 23.2841 21.1897 23.6769 20.5404C24.0057 19.9969 25.0402 19.8838 25.4888 20.3427ZM16.2655 24.9248C15.309 25.544 15.955 26.8489 17.4016 27.2197C18.1987 27.4244 19.0797 27.2335 19.9129 26.6758C21.1385 25.8549 21.1559 25.786 20.2985 25.1456C19.2823 24.3862 17.2687 24.276 16.2655 24.9248ZM33.0638 29.6303C32.1372 30.0031 30.1476 30.6573 28.6433 31.0847C25.871 31.8717 22.9548 33.8878 22.9548 35.0175C22.9548 35.3574 23.3799 36.0283 23.8993 36.5088C25.303 37.8068 32.9098 37.4143 35.9984 35.8851C42.0315 32.8977 39.3185 27.1145 33.0638 29.6303ZM6.94399 31.6267C6.21855 32.3143 5.625 33.1726 5.625 33.5346C5.625 34.628 8.17007 35.3559 11.4416 35.1985L14.5306 35.05L12.5304 33.9571C11.43 33.3561 10.099 32.3045 9.57283 31.6208C9.04619 30.9371 8.53592 30.3774 8.43916 30.3774C8.34192 30.3774 7.66944 30.9396 6.94399 31.6267Z" fill="#333333"></path></svg>
    </div>


        <h1 className="title">Pandas.vn</h1>
        <button className="login-button" onClick={handleLoginClick}>
          Đăng nhập
        </button>
      </div>
    </header>


    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Privacy Policy</h1>
      </header>
      <section className="privacy-section">
        <p>
        PANDAS SOFTWARE SOLUTIONS COMPANY LIMITED ("Company") built the Pandas ("Product") app as a Commercial app. This SERVICE is provided by Company and is intended for use as is.<br />
        <br />This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of data if anyone decided to use our Service.<br />
        <br />If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The data that we collect is used for providing and improving the Service. We will not use or share your data with anyone except as described in this Privacy Policy.<br />
        <br />The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Pandas unless otherwise defined in this Privacy Policy.
        </p>
        <h2>Data Collection and Use</h2>
        <p>
        In order to function, the app will collect your name, email address, your Facebook Page list and its data which include public data such as comments, posts, and private messages. The information that we request is will be retained by us and used as described in this privacy policy.<br />
        <br />Your data is stored on our server as long as your subscription is active. When an active subscription is no longer available. We have the right to remove your data automatically from our database after 60 days. In case you want to stop using our service and remove all data completely, please let us know. We will fulfill your request with 24 hours.<br />
        <br />For a better experience and statistical, the app does use third party services that may collect information used to identify you. These third party services may collect information such as your device Internet Protocol (“IP”) address, device name, operating system version, the time and date of your use of our app, and other statistics.
        </p>
        <h2>Google API Permissions</h2>
        <p>
        Our application complies with the Google API Services User Data Policy, including the Limited Use requirements. Your privacy is important to us, and we ensure that any use and transfer of information received from Google APIs will adhere strictly to these policies. For more details, please refer to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>.<br />
        <br />We do not transfer or disclose your information to third parties for purposes other than the ones provided.<br />
        <br />We will not sell your data to third parties, we use it to fulfill the purpose you requested.<br />
        <br />Link to privacy policy of third party service providers used by the app <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics</a> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">(Privacy)</a>
        </p>
        <h2>Facebook App Permissions</h2>
        <ul>
          <li>manage_pages*: to retrieve the list and access token of Pages that you administrates</li>
          <li>publish_pages*: to reply comment, like comment on behalf of Pages that you manage</li>
          <li>read_page_mailboxes*, pages_messaging*: to read, receive and reply to Pages' messages</li>
          <li>ads_read, ads_managerment (optional): to manage your ads</li>
          <li>catalog_management (optional): to manage your catalogs</li>
        </ul>
        <h2>Cookies</h2>
        <p>
        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.<br />
        <br />The app uses cookies to validate your identity after you logged into your account. Beside, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you will not be able to login into your account.
        </p>
        <h2>Security</h2>
        <p>
        We value your trust in providing us your data, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
        </p>
        <h2>Links to Other Sites</h2>
        <p>
        This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>
        <h2>Children's Privacy</h2>
        <p>
          TThese Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
        We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
        </p>
        <h2>Contact Us</h2>
        <p>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
        </p>
      </section>
      
    </div>

    <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <p style={{ fontWeight: 'bold' }}>Pandas Software Solution Co. Ltd</p>
            <p>Address: 9 Mậu Lương, Hà Nội</p>
          </div>
          <div className="footer-center">
            <p>Email: <a href="mailto:company@pandas.vn">company@pandas.vn</a></p>
            <p>Phone: 0333.874.623</p>
          </div>
          <div className="footer-right">
            <p>Copyright © 2024 Pandas</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

  

export default PrivacyPolicy;