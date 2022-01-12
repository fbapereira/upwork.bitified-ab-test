import axios from 'axios';

import { Item } from '@/models/Item.model';
import { User } from '@/models/User.model';

const apiClient = axios.create({
  baseURL: "https://hello.dhstaging.net/api/sys/v1.0/front_end_test/",
});

class ApiService {
  public user!: User;
  public items!: Item[];

  public create(name: string): Promise<User> {
    return apiClient.post("create_test", { name }).then(
      ({
        data: {
          data: { code, name },
        },
      }) => {
        this.user = { code, name };
        return this.user;
      }
    );
  }

  public async addItem(value: string): Promise<Item[]> {
    await apiClient.post(`${this.user.name}/${this.user.code}/create_row`, {
      value,
    });
    this.items = await this.getItems();
    return this.items;
  }

  private getItems(): Promise<Item[]> {
    return apiClient.get(`${this.user.name}/${this.user.code}/get_rows`);
  }
}

export const apiService = new ApiService();
