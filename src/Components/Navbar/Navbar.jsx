import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";




const Navbar = () => {
    return <navbar className={s.nav}>

        <div className={s.active}>
            <NavLink to="News" className={s.active}>News</NavLink>
        </div>
        <div className={s.active}>
            <NavLink to="Carpentry" className={s.active}>Carpentry</NavLink>
        </div>
        <div className={s.active}>
            <NavLink to="Settings" className={s.active}>Settings</NavLink>
        </div>
        {/*        <div className={s.friendsBar}>
            <FriendsBar //state={props.state}
            />
        </div>*/}
    </navbar>
}
export default Navbar