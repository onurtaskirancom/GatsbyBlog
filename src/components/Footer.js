import React from 'react';
import { Link } from "gatsby";

function Copyright() {
  return (
    <footer>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Taskiran_Onur
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </footer>
  );
}

export default function Footer(props) {
  return (
    <footer>
      <div className="p-5">
        <nav className="level">
          <div className="level-item has-text-centered">
            <Copyright />
          </div>
        </nav>
      </div>
    </footer>
  );
}