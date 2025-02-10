import "./styles.css";
import React from "react";

interface IProps {}

export default function HolyGrail(): React.ReactElement<IProps> {
  return (
    <div className="holygrail-body">
      <header>Header</header>
      <div className="holygrail-container">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
}
