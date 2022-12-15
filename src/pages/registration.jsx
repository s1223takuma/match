// import "../css/style.css";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "../context/Authcontext";

const Registration = () => {
    const { user } = useAuthContext();
    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        createUserWithEmailAndPassword(auth, email.value, password.value);
    };

    return (
        <>
            <main className="main">
                <h2>登録 {user.email}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">メールアドレス</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">パスワード</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <div>
                        <button>登録</button>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Registration;
