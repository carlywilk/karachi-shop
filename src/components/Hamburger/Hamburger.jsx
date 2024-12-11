
import "./Hamburger.scss";

export function Hamburger({ open }) {
    return (
        <div className={`hamburger ${open ? "hamburger--open" : ""}`}>
            <div className={`hamburger__burger ${open ? "hamburger__burger--top" : ""}`}></div>
            <div className={`hamburger__burger ${open ? "hamburger__burger--middle" : ""}`}></div>
            <div className={`hamburger__burger ${open ? "hamburger__burger--bottom" : ""}`}></div>
        </div>
    );
}