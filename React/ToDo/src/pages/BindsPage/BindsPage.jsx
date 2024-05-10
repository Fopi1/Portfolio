import React from "react";
import "./BindsPage.css";
import BindsPageContainer from "../../components/BindsPageContainer/BindsPageContainer";

const BindsPage = () => {
  return (
    <div className="bg__binds-page">
      <div className="bg__container">
        <BindsPageContainer />
      </div>
    </div>
  );
};

export default BindsPage;
