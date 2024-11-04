import Body from "./Body";
import NavBar from "./NavBar";
import Posts from "./Posts";
import SiderBar from "./SiderBar";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import User from "./User";

export default function App() {
    return (
       
            <>
            <NavBar />
            <div className="row">
                <Body />
                <Stories />
                <Posts />
                <SiderBar />
                <User />
                <Suggestions />
            </div>
            </>

    );
}