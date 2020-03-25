import React, { createContext, useState, useContext } from "react";

const BananaContext = createContext();
const BananaProvider = BananaContext.Provider;
const MyBananaProvider = ({ children }) => {
  const [bananas, setBananas] = useState("Bananas are great for monkeys");
  return (
    <BananaProvider value={{ bananas, setBananas }}>{children}</BananaProvider>
  );
};

const BananaPalm = props => {
  const bananaState = useContext(BananaContext);
  return (
    <>
      <p className="banana">{bananaState.bananas}</p>
      <p>
        If you are not a monkey, click{" "}
        <button
          onClick={() =>
            bananaState.setBananas("Carrots are great for rabbits")
          }
        >
          here
        </button>
      </p>
    </>
  );
};

const BananaPage = props => {
  return (
    <div className="page">
      <h2>This is my Banana Pages</h2>
      <div className="page">Read more about bananas on the section below</div>
      <div className="content">
        <BananaPalm />
      </div>
    </div>
  );
};
const BananaApp = () => {
  return (
    <MyBananaProvider>
      <div className="compo">
        <BananaPage />
      </div>
    </MyBananaProvider>
  );
};

export default BananaApp;
