import { TProfile } from './profile';

export type TGratitude = {
  id: number;
  approved: boolean;
  gratitude: string;
  inserted_at: string;
  public: boolean;
  user_id: string;
  profiles: TProfile;
};
