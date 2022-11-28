import type { User } from '@/types/User.type'
import type { RemovableRef } from '@vueuse/shared';

export type UserState = {
  token: RemovableRef<string>;
	user: User;
}