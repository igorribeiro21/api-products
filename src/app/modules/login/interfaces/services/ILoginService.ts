import ISessionDTO from "../../dtos/ILoginDTO";

interface ILoginService {
    login(user: string, keyAccess: string): Promise<ISessionDTO>;
};

export default ILoginService;