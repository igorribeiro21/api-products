import ISessionDTO from "../../dtos/ISessionDTO";

interface ILoginService {
    session(user: string, keyAccess: string): Promise<ISessionDTO>;
};

export default ILoginService;