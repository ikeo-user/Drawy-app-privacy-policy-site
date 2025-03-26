import Image from "next/image";
import styles from "./page.module.css";

import appLogo from "../../public/drawy_logo.png";
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
        <h5 >Update date: 26 March 2025</h5>
        <div className={styles.privacy_intro_text}>
          <p>
          
          <strong>Drawy: Drawing App for Kids</strong> ("the App") is a fun and interactive drawing application designed for children.
           This Privacy Policy explains how we collect, use, and protect your data while using the App.
          </p>

        </div>

        </div>

  
          <div >
    <div className={styles.policy_container_div}>
      <h2>1. Information We Collect</h2>
      <div className={styles.policy_element}>
        <p>The App itself does not collect or store personal data. However, third-party services integrated into the App may
           collect limited information, as detailed below: </p>
        <br />
        <div className={styles.policy_elem_embaded}>
          <ul>
              <li><strong>AdMob (Google Ad Services):</strong> Used to display child-appropriate advertisements. AdMob may collect device-specific identifiers for ad personalization control.</li>
              <li><strong>Firebase Analytics:</strong> Used to analyze app performance and improve user experience. Firebase collects device identifiers, app usage data, and crash reports.</li>
              
          </ul>
        </div>
        <br />
        <p>All data collected by these services complies with Google Play’s Families Policy and is handled per their respective privacy policies.</p>
      </div>
    
      
    </div>

    <div className={styles.policy_container_div}>
    <h2>2. Permissions Used and Their Purpose</h2>
    <div className={styles.policy_elem_embaded}>
      <p>To provide core functionality, the App requests the following permissions:</p>
      <br />
      <ul>
          <li><strong>INTERNET:</strong> Required for displaying ads and analytics.</li>
          <li><strong>ACCESS_NETWORK_STATE:</strong> Checks if the device is connected to the internet.</li>
          <li><strong>FOREGROUND_SERVICE:</strong> Ensures smooth background processing while in use.</li>
          <li><strong>WAKE_LOCK:</strong> Prevents the device from sleeping while using the app.</li>
         
          <li><strong>READ_EXTERNAL_STORAGE / WRITE_EXTERNAL_STORAGE:</strong> Allows users to save and load their drawings.</li>

          <li><strong>POST_NOTIFICATIONS:</strong> Required to send notifications related to app usage.</li>
          <li><strong>CHECK_LICENSE:</strong> Verifies app legitimacy.</li>
          <li><strong>AD_ID:</strong> Used for AdMob to serve appropriate child-friendly ads.</li>

         
      </ul>
    </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>3. How We Use Your Information</h2>
      
      <div className={styles.policy_elem_embaded}>
        <p>The limited data collected by third-party services is used to:</p>
        <br />
        <ul>
            <li><p>Serve <strong>appropriate ads for children</strong> in compliance with Google’s Families Policy.</p></li>
            <li><p>Improve app performance through analytics.</p></li>
            <li><p>Display advertisements through AdMob.</p></li>

        </ul> <br />
        <p>The App does not collect personally identifiable information or share user data.</p>

      </div>
    </div>
    
    <div className={styles.policy_container_div}>
      <h2>4. Data Sharing and Third-Party Services</h2>
      <div className={styles.policy_elem_embaded}>
        <p>We do not sell, share, or store user data. However, the App integrates with the following third-party services:</p>
        <br />
        <ul>
            <li><strong>Google AdMob:</strong> <a href="https://policies.google.com/privacy" target="_blank">Google AdMob Privacy Policy</a>.</li>
            <li><strong>Firebase Analytics:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank">Firebase Privacy Policy</a>.</li>
        </ul>
        <br />
        <p>These services may collect device identifiers to function properly.</p>
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
      <br />
      <div className={styles.policy_elem_embaded}>
        <ul>
          <li><strong>Data collected:</strong> Device or other IDs, App interactions, Crash logs.</li>
          <li><strong>Data shared:</strong> Device or other IDs (for AdMob advertising purposes), App interactions (for analytics).</li>
          <li><strong>Security practices:</strong> Data is encrypted in transit, and we do not store user data beyond what is required for the App’s functionality.</li>        
          <li><strong>Data retention:</strong> Data is used only for analytics and ad-serving and is not stored beyond what is necessary.</li>
        </ul>
        <br />
        <p>The App complies with <strong>Google Play’s Families Policy</strong> and ensures that all ads shown are child-appropriate.</p>

      </div>
    </div>
    
    

    <div className={styles.policy_container_div}>
      <h2>7. Children's Privacy</h2>
      <div className={styles.policy_elem_embaded}>
        <p>The App is designed for children and strictly follows <strong>Google Play’s Families Policy</strong>. 
        <br />We do not knowingly collect, store, or share personal information from children.</p>
      </div>
      
    </div>

    <div className={styles.policy_container_div}>
      <h2>8. User Choices and Controls</h2>
      <div className={styles.policy_elem_embaded}>
        <ul>
          <li>You can manage ad settings through: <a href="https://adssettings.google.com/" target="_blank">Google Ads Settings</a>.</li>
          <li>You can manage app permissions via your device settings</li>
        </ul>
      </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>9. Changes to This Privacy Policy</h2>
      <div className={styles.policy_elem_embaded}>
      <p>We may update this policy from time to time. Any changes will be posted in the App and on this page.</p>

        <div className={styles.policy_elem_embaded}>
          <div className={styles.changes_text}>
            Date: 26 March 2025: (This) the initial Version of the app's privacy policy.
          </div>
         

        </div>
      </div>

    </div>

    
    
    <div className={styles.policy_container_div}>
      <h2>10. Contact Us</h2>
      <div className={styles.policy_elem_embaded}>
        <p>If you have any questions, please contact us at: [ikeolandramo@gmail.com]</p>
      </div>
      
    </div>
    
      




    </div>


      </main>
       


      <footer className={styles.footer}>
        <a
          href="https://play.google.com/store/apps/details?id=com.ikeo.drawyforkids"
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
