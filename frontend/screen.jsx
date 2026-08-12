import { useEffect, useState } from "react";

export default function App() {
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/api/mensagem")
            .then(resposta => resposta.json())
            .then(dados => setMensagem(dados.texto));
    }, []);
    
    return (
        <div>
            <h1>O servidor diz</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);