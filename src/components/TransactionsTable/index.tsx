import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransctionsTable() {

    useEffect(() => {
        api.get('/transcations')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 1200,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/07/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1100,00</td>
                        <td>Casa</td>
                        <td>20/07/2021</td>
                    </tr>

                </tbody>
            </table>
        </Container>
    );

}