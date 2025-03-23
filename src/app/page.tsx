import Image from "next/image";
import styles from "./page.module.css";

import appLogo from "../../public/file.svg";
import googlePlayLogo from "../../public/google-play.png";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.page_title_h2}>
            <h2>Privacy Policy for Drawy: Drawing app for kids</h2>
        </div>
        <div className={styles.logo_container}>

        <Image
          className={styles.app_logo}
          src={appLogo}
          alt="the apps logomark"
          width={120}
          height={120}
        />
        <h5 >Update date: 23 March 2025</h5>
        <div className={styles.privacy_intro_text}>
          <p>
          
          Drawy: Drawing app for kids ("the App") is a drawing app etc.....
          </p>

        </div>

        </div>

  
          <div >
    <div className={styles.policy_container_div}>
      <h2>1. Information We Collect</h2>
      <div className={styles.policy_element}>
        <p>The App collects and processes the following data:</p>
        <br />
        <div className={styles.policy_elem_embaded}>
          <p>Our app may collect limited data automatically for functionality and analytics, including:</p>
          <ul>
              <li><strong>Device or other IDs:</strong> Used for analytics and advertising through AdMob.</li>
              <li><strong>Location Data:</strong> Required to scan and display nearby Wi-Fi access points (per Android OS policy).</li>
              <li><strong>Network Information:</strong> Used to analyze Wi-Fi signal strength and performance.</li>
          </ul>
          </div>
        </div>
    
      
    </div>

    <div className={styles.policy_container_div}>
    <h2>2. Permissions Used and Their Purpose</h2>
    <div className={styles.policy_elem_embaded}>
      <p>The App requires the following permissions for proper functionality:</p>
      <br />
      <ul>
          <li><strong>ACCESS_COARSE_LOCATION:</strong> Used to detect and display available Wi-Fi networks.</li>
          <li><strong>ACCESS_FINE_LOCATION:</strong> Required for accurate scanning of nearby Wi-Fi access points.</li>
          <li><strong>ACCESS_NETWORK_STATE:</strong> Used to check the status of the device’s network connection.</li>
          <li><strong>ACCESS_WIFI_STATE:</strong> Required to obtain information about Wi-Fi connections.</li>

          <li><strong>CHANGE_WIFI_STATE:</strong> Used to initiate Wi-Fi scans.</li>
          <li><strong>FOREGROUND_SERVICE:</strong> Ensures continuous operation while the app is in use.</li>
          <li><strong>INTERNET:</strong> Necessary for ads and analytics through AdMob.</li>
          <li><strong>NEARBY_WIFI_DEVICES:</strong> Required for scanning and detecting nearby Wi-Fi devices on Android 13 and above.</li>
          <li><strong>SCHEDULE_EXACT_ALARM:</strong> Used for scheduled scanning features.</li>
          <li><strong>WAKE_LOCK:</strong>Prevents the device from sleeping during operations.</li>
          <li><strong>CHECK_LICENSE:</strong>Verifies the legitimacy of the app download.</li>
          <li><strong>AD_ID:</strong>  Used for AdMob advertising purposes.</li>
      </ul>
    </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>3. How We Use Your Information</h2>
      <br />
      <p>We use the collected data to:</p>
      <div className={styles.policy_elem_embaded}>
        <ul>
            <li><p>Provide core functionality, such as scanning and displaying Wi-Fi signal strength.</p></li>
            <li><p>Improve app performance and user experience.</p></li>
            <li><p>Display advertisements through AdMob.</p></li>
            <li><p>Ensure compliance with Android and Google Play policies.</p></li>
        </ul>
      </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>4. Data Sharing and Third-Party Services</h2>
      <div className={styles.policy_elem_embaded}>
        <p>We do not sell your personal data. However, the App integrates with third-party services, including:</p>
        <br />
        <ul>
            <li><strong>Google AdMob:</strong> To display ads, AdMob may collect and use device identifiers and advertising data. 
            Please refer to <a href="https://policies.google.com/privacy" target="_blank">Google's Privacy Policy</a> for more details.</li>
        </ul>
      
      </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>5. Data Security</h2>
      <div className={styles.policy_elem_embaded}>
        <ul>
            <li>All data transmitted by the App is encrypted in transit.</li>
            <li>The App does not store or retain personal data beyond what is necessary for its core functions.</li>
        </ul>
      </div>
      
    </div>
    
       
    <div className={styles.policy_container_div}>
      <h2>6. Data Safety (Google Play Disclosure)</h2>
      <div className={styles.policy_elem_embaded}>
        <ul>
          <li><strong>Data collected:</strong> Device or other IDs, Location Data, Network Information.</li>
          <li><strong>Data shared:</strong> Device or other IDs (for AdMob advertising purposes).</li>
          <li><strong>Security practices:</strong> Data is encrypted in transit, and we do not store user data beyond what is required for the App’s functionality.</li>        
          <li><strong>Data retention:</strong> All collected data is ephemeral and only used during the active session of the App.</li>
        </ul>

      </div>
    </div>
    
    <div className={styles.policy_container_div}>
      <h2>7. User Choices and Controls</h2>
      <div className={styles.policy_elem_embaded}>
        <ul>
          <li>You can disable location permissions through your device settings, but this will limit the App’s functionality.</li>
           <li> You can opt out of personalized ads via Google’s settings: <a href="https://adssettings.google.com/" target="_blank">Google Ads Settings</a></li>
        </ul>
      </div>

    </div>

    <div className={styles.policy_container_div}>
      <h2>8. Children's Privacy</h2>
      <div className={styles.policy_elem_embaded}>
        <p>The App is not intended for children under 13. We do not knowingly collect data from children</p>
        
      </div>
      
    </div>
    
    <div className={styles.policy_container_div}>
      <h2>9. Changes to This Privacy Policy</h2>
      <div className={styles.policy_elem_embaded}>
      <p>We may update this policy from time to time. Any changes will be posted in the App and on this page.</p>

        <div className={styles.policy_elem_embaded}>
          <div className={styles.changes_text}>
            Date: 23 March 2025: (this) initial Version of the apps privacy policy.
          </div>
         

        </div>
      </div>

    </div>

    
    
    <div className={styles.policy_container_div}>
      <h2>11. Contact Us</h2>
      <div className={styles.policy_elem_embaded}>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>📧 Email: ikeolandramo@gmail.com</p>
      </div>
      
    </div>
    
      




    </div>


      </main>
       


      <footer className={styles.footer}>
        <a
          href="https://play.google.com/store/apps/details?id=com.ikeo.wifisignalanalyzer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={googlePlayLogo}
            alt="google play"
            width={37}
            height={37}
          />
          Get this app on Google play
        </a>


      </footer>
    </div>
    
  );
}
