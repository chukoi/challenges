import React, { useState } from "react";
import "./styles.css";

interface IProps {}

export default function Tabs(): React.ReactElement<IProps> {
  const [activeTab, setActiveTab] = useState("html");
  const onTabChange = (e: any) => {
    setActiveTab(e.target.id);
  };

  return (
    <div>
      <div>
        <button
          id="html"
          className={activeTab === "html" ? "active-tab" : ""}
          onClick={onTabChange}
        >
          HTML
        </button>
        <button
          id="css"
          className={activeTab === "css" ? "active-tab" : ""}
          onClick={onTabChange}
        >
          CSS
        </button>
        <button
          id="javascript"
          className={activeTab === "javascript" ? "active-tab" : ""}
          onClick={onTabChange}
        >
          JavaScript
        </button>
      </div>
      <div>
        {activeTab === "html" && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {activeTab === "css" && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {activeTab === "javascript" && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}
