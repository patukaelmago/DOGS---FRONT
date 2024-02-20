import React from "react";

export default function Footer() {
    return (
        <div className="text-black py-8">
        <p className="text-sm mb-md-0">
          &copy; {new Date().getFullYear()} - Patuka Technologies.
          <br /> Todos los derechos reservados.
        </p>
      </div>
    )
}