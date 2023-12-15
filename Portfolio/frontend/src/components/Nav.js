import React from 'react';
import { Link } from 'react-router-dom';
import { GiSpermWhale } from "react-icons/gi";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";
import { FaCameraRetro } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";

// Change the function names and links
// to fit your portfolio topic.

function Nav() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/" ><i><GiSpermWhale /></i>Home</Link>
        <Link to="../Topics"><i><IoServer /></i>Topics</Link>
        <Link to="../ProjectsPage"><i><PiPaintBrushHouseholdFill /></i>Home Projects</Link>
        <Link to="../GalleryPage"><i><FaCameraRetro /></i>Gallery</Link>
    </nav>
  );
}

export default Nav;
