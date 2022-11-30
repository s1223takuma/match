import Main from "./pages/main"
import Match from "./pages/match"
import Login from "./pages/login"
import Registration from "./pages/registration";
import Notfound from "./pages/notfound";
import { BrowserRouter,Route,Switch,NavLink } from 'react-router-dom';
import "./css/style.css"

function App() {
  return (
    <BrowserRouter>
      <header className="header">
      <div className="earth"></div>
          <h1 className="title">
            マッチングアプリ
          </h1>
            <ul>
                <li><NavLink activeClassName="active" to="/">ホーム</NavLink></li>
                <li><NavLink activeClassName="active" to="/match">人一覧</NavLink></li>
                <li><NavLink activeClassName="active" to="/login">ログイン</NavLink></li>
                <li><NavLink activeClassName="active" to="/registration">会員登録</NavLink></li>
            </ul>
      </header>
    <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/match">
          <Match />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route>
          <Notfound />
        </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;