import axios from "axios";

import { Item } from "@/models/Item.model";
import { User } from "@/models/User.model";

const apiClient = axios.create({
  baseURL: "https://hello.dhstaging.net/api/sys/v1.0/front_end_test/",
});

class ApiService {
  public create(name: string): Promise<User> {
    return apiClient.post("create_test", { name }).then(
      ({
        data: {
          data: { code, name },
        },
      }) => {
        return { code, name };
      }
    );
  }

  public async addItem(user: User, value: string): Promise<string> {
    const response = await apiClient.post(
      `${user.name}/${user.code}/create_row`,
      {
        value,
      }
    );
    return response.headers["dh_took_ms"];
  }

  public getItems(user: User): Promise<Item[]> {
    return apiClient
      .get(`${user.name}/${user.code}/get_rows`)
      .then(({ data: { data } }) => data);
  }
}

export const apiService = new ApiService();
