import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Webdev</span> News
      </h1>
      <p>gdxxfhd stsrts estst syrrgxgwatwfyc terj yrirtlhvmrdse</p>
      {/* Use CSS in Javascript using style jsx
      <style jsx>{`
        .title {
          color: red;
        }
      `}</style> */}
    </div>
  );
};

export default Header;
