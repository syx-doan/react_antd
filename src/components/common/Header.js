import { Anchor } from "antd";
import React from "react";

const { Link } = Anchor;

export default function AppHeader() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="#">Syx</a>
        </div>

        <Anchor targetOffset="65">
          <Link href="#hero" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#feature" title="Feature" />
          <Link href="#work" title="How is Work" />
          <Link href="#faq" title="FAQs" />
          <Link href="#pricing" title="Pricing" />
          <Link href="#contact" title="Contact" />
        </Anchor>
      </div>
    </div>
  );
}
