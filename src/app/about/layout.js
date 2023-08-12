import Link from "next/link";

const AboutLayout = ({children}) => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default AboutLayout;
