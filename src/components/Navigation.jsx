import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div>
            <div>
                <Link to='/'>Главная</Link>
            </div>
            <div>
                <Link to='/leads'>Заявки</Link>
            </div>
        </div>
    )
}
export default Navigation;