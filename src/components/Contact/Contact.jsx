import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Contact ({ contact: { name, number,id }, onDelete }) {
    return (
<div className={css.contactContainer}>
    <div className={css.dataContainer}>
    <div className={css.stringContainer}>
    <FaUser size={20} />
    <p className={css.contactName}>{name}</p>
    </div>
    <div className={css.stringContainer}>
    <FaPhone size={20} />
    <p className={css.contactNumber}>{number}</p>
    </div>
    </div>
    <button className={css.buttonDelete} onClick={() => onDelete(id)} >Delete</button>
</div >
    )
}