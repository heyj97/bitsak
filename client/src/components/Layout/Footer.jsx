import styles from "./Layout.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h2>Bitsak</h2>
      <div className={styles.FooterContent}>
        <div>
          <ul>
            <h3>Front-End</h3>
            <li>김한빈</li>
            <li>정주현</li>
          </ul>
          <ul>
            <h3>Back-End</h3>
            <li>김희찬</li>
            <li>윤혜원</li>
            <li>장나연</li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Information</h3>
            <li>
              <a
                href="https://kdt-gitlab.elice.io/ai_track/class_07/data_project/team04/bitsak"
                target="_blank"
              >
                GitLab
              </a>
            </li>
            <li>
              <a
                href="https://www.notion.so/4-9616445f600741e489bf18d43cdc3f29?pvs=4"
                target="_blank"
              >
                Notion
              </a>
            </li>
            <li>
              <a
                href="https://www.figma.com/file/6dQUmC29m2eqK3ule3Dwsq/Elice-2nd-PRJ-Team4?type=design&node-id=0%3A1&t=R6fprqwHhVpOJm9e-1"
                target="_blank"
              >
                Figma
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
