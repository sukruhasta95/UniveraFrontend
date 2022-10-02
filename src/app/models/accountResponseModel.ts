import { Account } from "./account";
import { responsemodel } from "./responsemodel";

export interface AccountResponseModel extends responsemodel{
  data:Account[]

}
