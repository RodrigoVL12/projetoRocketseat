import axios from "axios";
/**
 * Receber code(string)
 * Recuperar o acess_token no github
 * Verificar se o usuário existe no DB
 * -- Sim = Gera token
 * -- Não = Cria DB e gera token
 * Retornar o token com as infos do usuário
 */

class AuthenticateUserService {
    async execute(code: string){
        const url = "https://github.com/login/oauth/acess_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/jason"
            }
        })

        return response.data;
    }
}

export { AuthenticateUserService }